<?php

namespace App\Entity;

use ApiPlatform\Metadata\ApiResource;
use App\Repository\FriendshipRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
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
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * Secured resource.
 */
#[ApiResource(
    operations: [
        new Get(
            security: "is_granted('ROLE_ADMIN') or object.user == user", 
            securityMessage: 'Requires token authentication and being admin or the person concerned'),
        new GetCollection(
            security: "is_granted('ROLE_ADMIN')", 
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
    ],
    normalizationContext: ['groups' => ['friendship:read']] 
)]
#[ApiFilter(SearchFilter::class, properties: ['user' => 'exact'])]
#[ORM\Table(name: '`friendship`')]
#[ORM\Entity(repositoryClass: FriendshipRepository::class)]
#[Groups(['friendship:read'])]
class Friendship
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]    
    private ?int $id = null;

    #[ORM\ManyToOne(inversedBy: 'friendships')]
    #[ORM\JoinColumn(nullable: false)]    
    private ?User $user = null;

    #[ORM\ManyToOne]
    #[ORM\JoinColumn(nullable: false)]    
    private ?User $friend = null;

    #[ORM\Column(length: 255)]    
    private ?string $status = null;

    #[ORM\Column(options: ['default' => 'CURRENT_TIMESTAMP'])]    
    private ?\DateTimeImmutable $createdAt = null;

    #[ORM\Column(options: ['default' => 'CURRENT_TIMESTAMP'])]    
    private ?\DateTimeImmutable $updatedAt = null;

    public function __construct()
    {        
        $this->createdAt = new \DateTimeImmutable();  
        $this->updatedAt = new \DateTimeImmutable();      
    }
    
    public function getId(): ?int
    {
        return $this->id;
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

    public function getFriend(): ?User
    {
        return $this->friend;
    }

    public function setFriend(?User $friend): static
    {
        $this->friend = $friend;

        return $this;
    }

    public function getStatus(): ?string
    {
        return $this->status;
    }

    public function setStatus(string $status): static
    {
        $this->status = $status;

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
}