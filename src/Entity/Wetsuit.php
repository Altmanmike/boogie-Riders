<?php

namespace App\Entity;

use ApiPlatform\Metadata\ApiResource;
use App\Repository\WetsuitRepository;
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
#[ORM\Table(name: '`wetsuit`')]
#[ORM\Entity(repositoryClass: WetsuitRepository::class)]
class Wetsuit
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $brand = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $model = null;
    
    #[ORM\Column(length: 255, nullable: true)]
    private ?string $type = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $size = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $description = null;

    #[ORM\Column(type: Types::ARRAY)]
    private array $colors = [];

    #[ORM\Column(length: 255)]
    private ?string $gender = null;

    #[ORM\Column(length: 255)]
    private ?string $thickness = null;

    #[ORM\Column(nullable: true)]
    private ?float $price = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $photo = null;

    #[ORM\Column(options: ['default' => 'CURRENT_TIMESTAMP'])]
    private ?\DateTimeImmutable $createdAt = null;

    #[ORM\Column(options: ['default' => 'CURRENT_TIMESTAMP'])]
    private ?\DateTimeImmutable $updatedAt = null;

    #[ORM\ManyToOne(inversedBy: 'wetsuits')]
    private ?User $user = null;

    /**
     * @var list<string> visibility
     */
    #[ORM\Column]
    private array $visibility = [];

    /**
     * @var Collection<int, Group>
     */
    #[ORM\ManyToMany(targetEntity: Group::class, inversedBy: 'wetsuits')]
    private Collection $visibleToGroups;    

    public function __construct()
    {
        $this->createdAt = new \DateTimeImmutable();  
        $this->updatedAt = new \DateTimeImmutable();
        $this->visibleToGroups = new ArrayCollection();       
    }
    
    public function getId(): ?int
    {
        return $this->id;
    }

    public function getBrand(): ?string
    {
        return $this->brand;
    }

    public function setBrand(string $brand): static
    {
        $this->brand = $brand;

        return $this;
    }
    
    public function getModel(): ?string
    {
        return $this->model;
    }

    public function setModel(?string $model): static
    {
        $this->model = $model;

        return $this;
    }
    
    public function getType(): ?string
    {
        return $this->type;
    }

    public function setType(?string $type): static
    {
        $this->type = $type;

        return $this;
    }

    public function getSize(): ?string
    {
        return $this->size;
    }

    public function setSize(?string $size): static
    {
        $this->size = $size;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(?string $description): static
    {
        $this->description = $description;

        return $this;
    }

    public function getColors(): array
    {
        return $this->colors;
    }

    public function setColors(array $colors): static
    {
        $this->colors = $colors;

        return $this;
    }

    public function getGender(): ?string
    {
        return $this->gender;
    }

    public function setGender(string $gender): static
    {
        $this->gender = $gender;

        return $this;
    }

    public function getThickness(): string
    {
        return $this->thickness;
    }

    public function setThickness(string $thickness): static
    {
        $this->thickness = $thickness;

        return $this;
    }

    public function getPrice(): ?float
    {
        return $this->price;
    }

    public function setPrice(?float $price): static
    {
        $this->price = $price;

        return $this;
    }
    
    public function getPhoto(): ?string
    {
        return $this->photo;
    }

    public function setPhoto(?string $photo): static
    {
        $this->photo = $photo;

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

    public function getUser(): ?User
    {
        return $this->user;
    }

    public function setUser(?User $user): static
    {
        $this->user = $user;

        return $this;
    }

    public function getVisibility(): array
    {
        $visibility = $this->visibility;
        // guarantee default value Public
        $visibility[] = 'Public';

        return array_unique($visibility);
    }

    /**
     * @param list<string> $visibility
     */
    public function setVisibility(array $visibility): static
    {
        $this->visibility = $visibility;

        return $this;
    }

    /**
     * @return Collection<int, Group>
     */
    public function getVisibleToGroups(): Collection
    {
        return $this->visibleToGroups;
    }

    public function addVisibleToGroup(Group $visibleToGroup): static
    {
        if (!$this->visibleToGroups->contains($visibleToGroup)) {
            $this->visibleToGroups->add($visibleToGroup);
        }

        return $this;
    }

    public function removeVisibleToGroup(Group $visibleToGroup): static
    {
        $this->visibleToGroups->removeElement($visibleToGroup);

        return $this;
    }    
}