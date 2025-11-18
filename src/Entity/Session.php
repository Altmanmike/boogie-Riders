<?php

namespace App\Entity;

use ApiPlatform\Metadata\ApiResource;
use App\Repository\SessionRepository;
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
    ],
    normalizationContext: ['groups' => ['session:read']]
)]
#[ApiFilter(SearchFilter::class, properties: ['user' => 'exact'])]
#[ORM\Table(name: '`session`')]
#[ORM\Entity(repositoryClass: SessionRepository::class)]
#[Groups(['session:read'])]
class Session
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(['spot:read'])]
    private ?int $id = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $cover = null;
    
    #[ORM\Column]
    private ?\DateTimeImmutable $date = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $description = null;
    
    #[ORM\Column(nullable: true)]
    private ?float $duration = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $conditions = null;

    #[ORM\Column]
    private ?int $personalRating = null;
    
    #[ORM\Column(nullable: true)]
    private ?float $lat = null;

    #[ORM\Column(nullable: true)]
    private ?float $lon = null;

    #[ORM\Column(length: 255)]
    private ?string $location = null;
    
    #[ORM\Column(options: ['default' => 'CURRENT_TIMESTAMP'])]
    private ?\DateTimeImmutable $createdAt = null;

    #[ORM\Column(options: ['default' => 'CURRENT_TIMESTAMP'])]
    private ?\DateTimeImmutable $updatedAt = null;

    #[ORM\ManyToOne(inversedBy: 'sessions')]
    private ?Spot $spot = null;

    #[ORM\ManyToOne(inversedBy: 'sessions')]
    #[ORM\JoinColumn(nullable: false)]
    private ?User $user = null;

    /**
     * @var Collection<int, Comment>
     */
    #[ORM\OneToMany(targetEntity: Comment::class, mappedBy: 'session')]
    private Collection $comments;

    /**
     * @var Collection<int, Like>
     */
    #[ORM\OneToMany(targetEntity: Like::class, mappedBy: 'session')]
    private Collection $likes;

    /**
     * @var Collection<int, Media>
     */
    #[ORM\OneToMany(targetEntity: Media::class, mappedBy: 'session')]
    private Collection $medias;

    /**
     * @var list<string> visibility
     */
    #[ORM\Column]
    private array $visibility = [];

    /**
     * @var Collection<int, Group>
     */
    #[ORM\ManyToMany(targetEntity: Group::class, inversedBy: 'sessions')]
    private Collection $visibleToGroups;   
        
    public function __construct()
    {
        $this->createdAt = new \DateTimeImmutable();  
        $this->updatedAt = new \DateTimeImmutable();
        $this->comments = new ArrayCollection();
        $this->likes = new ArrayCollection();
        $this->medias = new ArrayCollection();
        $this->visibleToGroups = new ArrayCollection();       
    }
    
    public function getId(): ?int
    {
        return $this->id;
    }
    
    public function getCover(): ?string 
    {
        return $this->cover;
    }

    public function setCover(?string $cover): static
    {
        $this->cover = $cover;

        return $this;
    }
    
    public function getDate(): ?\DateTimeImmutable
    {
        return $this->date;
    }

    public function setDate(\DateTimeImmutable $date): static
    {
        $this->date = $date;

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
     
    public function getDuration(): ?float
    {
        return $this->duration;
    }

    public function setDuration(?float $duration): static
    {
        $this->duration = $duration;

        return $this;
    }

    public function getConditions(): ?string
    {
        return $this->conditions;
    }

    public function setConditions(?string $conditions): static
    {
        $this->conditions = $conditions;

        return $this;
    }

    public function getPersonalRating(): ?int
    {
        return $this->personalRating;
    }

    public function setPersonalRating(int $personalRating): static
    {
        $this->personalRating = $personalRating;

        return $this;
    }

    public function getLat(): ?float
    {
        return $this->lat;
    }

    public function setLat(?float $lat): static
    {
        $this->lat = $lat;

        return $this;
    }

    public function getLon(): ?float
    {
        return $this->lon;
    }

    public function setLon(?float $lon): static
    {
        $this->lon = $lon;

        return $this;
    }

    public function getLocation(): ?string
    {
        return $this->location;
    }

    public function setLocation(string $location): static
    {
        $this->location = $location;

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

    public function getSpot(): ?Spot
    {
        return $this->spot;
    }

    public function setSpot(?Spot $spot): static
    {
        $this->spot = $spot;

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

    /**
     * @return Collection<int, Comment>
     */
    public function getComments(): Collection
    {
        return $this->comments;
    }

    public function addComment(Comment $comment): static
    {
        if (!$this->comments->contains($comment)) {
            $this->comments->add($comment);
            $comment->setSession($this);
        }

        return $this;
    }

    public function removeComment(Comment $comment): static
    {
        if ($this->comments->removeElement($comment)) {
            // set the owning side to null (unless already changed)
            if ($comment->getSession() === $this) {
                $comment->setSession(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, Like>
     */
    public function getLikes(): Collection
    {
        return $this->likes;
    }

    public function addLike(Like $like): static
    {
        if (!$this->likes->contains($like)) {
            $this->likes->add($like);
            $like->setSession($this);
        }

        return $this;
    }

    public function removeLike(Like $like): static
    {
        if ($this->likes->removeElement($like)) {
            // set the owning side to null (unless already changed)
            if ($like->getSession() === $this) {
                $like->setSession(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, Media>
     */
    public function getMedias(): Collection
    {
        return $this->medias;
    }

    public function addMedia(Media $media): static
    {
        if (!$this->medias->contains($media)) {
            $this->medias->add($media);
            $media->setSession($this);
        }

        return $this;
    }

    public function removeMedia(Media $media): static
    {
        if ($this->medias->removeElement($media)) {
            // set the owning side to null (unless already changed)
            if ($media->getSession() === $this) {
                $media->setSession(null);
            }
        }

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
    
    public function __toString(): string
    {
        if ($this->id) {
            return (string) $this->getId();
        }

        return '';        
    }
}