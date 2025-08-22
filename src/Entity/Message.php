<?php

namespace App\Entity;

use ApiPlatform\Metadata\ApiResource;
use App\Repository\MessageRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Metadata\Get;
use ApiPlatform\Metadata\GetCollection;
use ApiPlatform\Metadata\Post;
use ApiPlatform\Metadata\Put;
use ApiPlatform\Metadata\Patch;
use ApiPlatform\Metadata\Delete;
use ApiPlatform\Metadata\QueryParameter;
use ApiPlatform\Doctrine\Orm\Filter\SearchFilter;
use ApiPlatform\Metadata\ApiFilter;

/**
 * Secured resource.
 */
#[ApiResource(
    operations: [
        new Get(
            security: "is_granted('ROLE_ADMIN') or object.user == user", 
            securityMessage: 'Requires token authentication and being admin or the person concerned'),
        new GetCollection(
            security: "is_granted('ROLE_ADMIN') or object.user == user", 
            securityMessage: 'Requires token authentication and being admin',
            parameters: ['user' => new QueryParameter]),
        new Post(
            security: "is_granted('ROLE_ADMIN') or object.user == user", 
            securityMessage: 'Requires token authentication and being admin'),
        new Put(
            security: "is_granted('ROLE_ADMIN') or object.user == user", 
            securityMessage: 'Requires token authentication and being admin or the person concerned'),
        new Patch(
            security: "is_granted('ROLE_ADMIN') or object.user == user", 
            securityMessage: 'Requires token authentication and being admin or the person concerned'),
        new Delete(
            security: "is_granted('ROLE_ADMIN') or object.user == user", 
            securityMessage: 'Requires token authentication and being admin')
    ]
)]
#[ApiFilter(SearchFilter::class, properties: ['user' => 'exact'])]
#[ORM\Table(name: '`message`')]
#[ORM\Entity(repositoryClass: MessageRepository::class)]
class Message
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(type: Types::TEXT)]
    private ?string $content = null;

    #[ORM\Column]
    private ?bool $isRead = null;

    #[ORM\Column(options: ['default' => 'CURRENT_TIMESTAMP'])]
    private ?\DateTimeImmutable $createdAt = null;

    #[ORM\Column(options: ['default' => 'CURRENT_TIMESTAMP'])]
    private ?\DateTimeImmutable $updatedAt = null;

    #[ORM\ManyToOne(inversedBy: 'messages')]
    private ?Chat $chat = null;

    #[ORM\ManyToOne(inversedBy: 'messages')]
    #[ORM\JoinColumn(nullable: false)]
    private ?User $user = null;

    public function __construct()
    {
        $this->createdAt = new \DateTimeImmutable();  
        $this->updatedAt = new \DateTimeImmutable();       
    }
    
    public function getId(): ?int
    {
        return $this->id;
    }

    public function getContent(): ?string
    {
        return $this->content;
    }

    public function setContent(string $content): static
    {
        $this->content = $content;

        return $this;
    }

    public function isRead(): ?bool
    {
        return $this->isRead;
    }

    public function setIsRead(bool $isRead): static
    {
        $this->isRead = $isRead;

        return $this;
    }

    public function getCreatedAt(): ?\DateTimeImmutable
    {
        return $this->createdAt;
    }

    public function setCreatedAt(\DateTimeImmutable $createdAt): static
    {
        $this->createdAt = $createdAt;

        return $this;
    }

    public function getUpdatedAt(): ?\DateTimeImmutable
    {
        return $this->updatedAt;
    }

    public function setUpdatedAt(\DateTimeImmutable $updatedAt): static
    {
        $this->updatedAt = $updatedAt;

        return $this;
    }

    public function getChat(): ?Chat
    {
        return $this->chat;
    }

    public function setChat(?Chat $chat): static
    {
        $this->chat = $chat;

        return $this;
    }

    public function getUser(): ?User
    {
        return $this->user;
    }

    public function setUser(?User $user): static
    {
        $this->user = $user;

        return $this;
    }
}