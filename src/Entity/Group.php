<?php

namespace App\Entity;

use ApiPlatform\Metadata\ApiResource;
use App\Repository\GroupRepository;
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
            securityMessage: 'Requires token authentication and being admin or the person concerned',
            normalizationContext: ['groups' => ['group:read']]),
        new GetCollection(
            security: "is_granted('ROLE_ADMIN') or object.user == user", 
            securityMessage: 'Requires token authentication and being admin',
            normalizationContext: ['groups' => ['group:read']],
            parameters: ['user' => new QueryParameter]),
        new Post(
            security: "is_granted('ROLE_ADMIN') or object.user == user", 
            securityMessage: 'Requires token authentication and being admin',
            denormalizationContext: ['groups' => ['group:write']]),
        new Put(            
            security: "is_granted('ROLE_ADMIN') or object.user == user", 
            securityMessage: 'Requires token authentication and being admin or the person concerned',
            denormalizationContext: ['groups' => ['group:write']]),
        new Patch(
            security: "is_granted('ROLE_ADMIN') or object.user == user", 
            securityMessage: 'Requires token authentication and being admin or the person concerned'),
        new Delete(
            security: "is_granted('ROLE_ADMIN') or object.user == user", 
            securityMessage: 'Requires token authentication and being admin')
    ]    
)]
#[ApiFilter(SearchFilter::class, properties: ['user' => 'exact'])]
#[ORM\Entity(repositoryClass: GroupRepository::class)]
#[ORM\Table(name: '`group`')]
#[Groups(['group:read'])]
class Group
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    #[Groups(['group:write'])]
    private ?string $name = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    #[Groups(['group:write'])]
    private ?string $description = null;
    
    #[ORM\ManyToOne(inversedBy: 'groupsCreated')]
    #[ORM\JoinColumn(nullable: false)]
    #[Groups(['group:write'])]    
    private ?User $user = null;
    
    /**
     * @var Collection<int, User>
     */
    #[ORM\ManyToMany(targetEntity: User::class, inversedBy: 'groups')]
    #[Groups(['group:write'])]    
    private Collection $members;

    #[ORM\Column(options: ['default' => 'CURRENT_TIMESTAMP'])]
    private ?\DateTimeImmutable $createdAt = null;

    #[ORM\Column(options: ['default' => 'CURRENT_TIMESTAMP'])]
    private ?\DateTimeImmutable $updatedAt = null;

    /**
     * @var Collection<int, Accessory>
     */
    #[ORM\ManyToMany(targetEntity: Accessory::class, mappedBy: 'visibleToGroups')]
    private Collection $accessories;

    /**
     * @var Collection<int, Article>
     */
    #[ORM\ManyToMany(targetEntity: Article::class, mappedBy: 'visibleToGroups')]
    private Collection $articles;

    /**
     * @var Collection<int, Board>
     */
    #[ORM\ManyToMany(targetEntity: Board::class, mappedBy: 'visibleToGroups')]
    private Collection $boards;

    /**
     * @var Collection<int, Fin>
     */
    #[ORM\ManyToMany(targetEntity: Fin::class, mappedBy: 'visibleToGroups')]
    private Collection $fins;

    /**
     * @var Collection<int, Leash>
     */
    #[ORM\ManyToMany(targetEntity: Leash::class, mappedBy: 'visibleToGroups')]
    private Collection $leashes;

    /**
     * @var Collection<int, Media>
     */
    #[ORM\ManyToMany(targetEntity: Media::class, mappedBy: 'visibleToGroups')]
    private Collection $medias;

    /**
     * @var Collection<int, Session>
     */
    #[ORM\ManyToMany(targetEntity: Session::class, mappedBy: 'visibleToGroups')]
    private Collection $sessions;

    /**
     * @var Collection<int, Spot>
     */
    #[ORM\ManyToMany(targetEntity: Spot::class, mappedBy: 'visibleToGroups')]
    private Collection $spots;

    /**
     * @var Collection<int, Wetsuit>
     */
    #[ORM\ManyToMany(targetEntity: Wetsuit::class, mappedBy: 'visibleToGroups')]
    private Collection $wetsuits;

    /**
     * @var Collection<int, Club>
     */
    #[ORM\ManyToMany(targetEntity: Club::class, mappedBy: 'visibleToGroups')]
    private Collection $clubs;

    /**
     * @var Collection<int, Event>
     */
    #[ORM\ManyToMany(targetEntity: Event::class, mappedBy: 'visibleToGroups')]
    private Collection $events;

    #[ORM\Column(type: 'boolean')]
    #[Groups(['group:write'])]
    private ?bool $isJoinable = null;        

    public function __construct()
    {
        $this->createdAt = new \DateTimeImmutable();  
        $this->updatedAt = new \DateTimeImmutable();
        $this->members = new ArrayCollection();
        $this->accessories = new ArrayCollection();
        $this->articles = new ArrayCollection();
        $this->boards = new ArrayCollection();
        $this->fins = new ArrayCollection();
        $this->leashes = new ArrayCollection();
        $this->medias = new ArrayCollection();
        $this->sessions = new ArrayCollection();
        $this->spots = new ArrayCollection();
        $this->wetsuits = new ArrayCollection();
        $this->clubs = new ArrayCollection();
        $this->events = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): static
    {
        $this->name = $name;

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
     * @return Collection<int, User>
     */
    public function getMembers(): Collection
    {
        return $this->members;
    }

    public function addMember(User $member): static
    {
        if (!$this->members->contains($member)) {
            $this->members->add($member);
        }

        return $this;
    }

    public function removeMember(User $member): static
    {
        $this->members->removeElement($member);

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

    /**
     * @return Collection<int, Accessory>
     */
    public function getAccessories(): Collection
    {
        return $this->accessories;
    }

    public function addAccessory(Accessory $accessory): static
    {
        if (!$this->accessories->contains($accessory)) {
            $this->accessories->add($accessory);
            $accessory->addVisibleToGroup($this);
        }

        return $this;
    }

    public function removeAccessory(Accessory $accessory): static
    {
        if ($this->accessories->removeElement($accessory)) {
            $accessory->removeVisibleToGroup($this);
        }

        return $this;
    }

    /**
     * @return Collection<int, Article>
     */
    public function getArticles(): Collection
    {
        return $this->articles;
    }

    public function addArticle(Article $article): static
    {
        if (!$this->articles->contains($article)) {
            $this->articles->add($article);
            $article->addVisibleToGroup($this);
        }

        return $this;
    }

    public function removeArticle(Article $article): static
    {
        if ($this->articles->removeElement($article)) {
            $article->removeVisibleToGroup($this);
        }

        return $this;
    }

    /**
     * @return Collection<int, Board>
     */
    public function getBoards(): Collection
    {
        return $this->boards;
    }

    public function addBoard(Board $board): static
    {
        if (!$this->boards->contains($board)) {
            $this->boards->add($board);
            $board->addVisibleToGroup($this);
        }

        return $this;
    }

    public function removeBoard(Board $board): static
    {
        if ($this->boards->removeElement($board)) {
            $board->removeVisibleToGroup($this);
        }

        return $this;
    }

    /**
     * @return Collection<int, Fin>
     */
    public function getFins(): Collection
    {
        return $this->fins;
    }

    public function addFin(Fin $fin): static
    {
        if (!$this->fins->contains($fin)) {
            $this->fins->add($fin);
            $fin->addVisibleToGroup($this);
        }

        return $this;
    }

    public function removeFin(Fin $fin): static
    {
        if ($this->fins->removeElement($fin)) {
            $fin->removeVisibleToGroup($this);
        }

        return $this;
    }

    /**
     * @return Collection<int, Leash>
     */
    public function getLeashes(): Collection
    {
        return $this->leashes;
    }

    public function addLeash(Leash $leash): static
    {
        if (!$this->leashes->contains($leash)) {
            $this->leashes->add($leash);
            $leash->addVisibleToGroup($this);
        }

        return $this;
    }

    public function removeLeash(Leash $leash): static
    {
        if ($this->leashes->removeElement($leash)) {
            $leash->removeVisibleToGroup($this);
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
            $media->addVisibleToGroup($this);
        }

        return $this;
    }

    public function removeMedia(Media $media): static
    {
        if ($this->medias->removeElement($media)) {
            $media->removeVisibleToGroup($this);
        }

        return $this;
    }

    /**
     * @return Collection<int, Session>
     */
    public function getSessions(): Collection
    {
        return $this->sessions;
    }

    public function addSession(Session $session): static
    {
        if (!$this->sessions->contains($session)) {
            $this->sessions->add($session);
            $session->addVisibleToGroup($this);
        }

        return $this;
    }

    public function removeSession(Session $session): static
    {
        if ($this->sessions->removeElement($session)) {
            $session->removeVisibleToGroup($this);
        }

        return $this;
    }

    /**
     * @return Collection<int, Spot>
     */
    public function getSpots(): Collection
    {
        return $this->spots;
    }

    public function addSpot(Spot $spot): static
    {
        if (!$this->spots->contains($spot)) {
            $this->spots->add($spot);
            $spot->addVisibleToGroup($this);
        }

        return $this;
    }

    public function removeSpot(Spot $spot): static
    {
        if ($this->spots->removeElement($spot)) {
            $spot->removeVisibleToGroup($this);
        }

        return $this;
    }

    /**
     * @return Collection<int, Wetsuit>
     */
    public function getWetsuits(): Collection
    {
        return $this->wetsuits;
    }

    public function addWetsuit(Wetsuit $wetsuit): static
    {
        if (!$this->wetsuits->contains($wetsuit)) {
            $this->wetsuits->add($wetsuit);
            $wetsuit->addVisibleToGroup($this);
        }

        return $this;
    }

    public function removeWetsuit(Wetsuit $wetsuit): static
    {
        if ($this->wetsuits->removeElement($wetsuit)) {
            $wetsuit->removeVisibleToGroup($this);
        }

        return $this;
    }

    /**
     * @return Collection<int, Club>
     */
    public function getClubs(): Collection
    {
        return $this->clubs;
    }

    public function addClub(Club $club): static
    {
        if (!$this->clubs->contains($club)) {
            $this->clubs->add($club);
            $club->addVisibleToGroup($this);
        }

        return $this;
    }

    public function removeClub(Club $club): static
    {
        if ($this->clubs->removeElement($club)) {
            $club->removeVisibleToGroup($this);
        }

        return $this;
    }

    /**
     * @return Collection<int, Event>
     */
    public function getEvents(): Collection
    {
        return $this->events;
    }

    public function addEvent(Event $event): static
    {
        if (!$this->events->contains($event)) {
            $this->events->add($event);
            $event->addVisibleToGroup($this);
        }

        return $this;
    }

    public function removeEvent(Event $event): static
    {
        if ($this->events->removeElement($event)) {
            $event->removeVisibleToGroup($this);
        }

        return $this;
    }

    public function getIsJoinable(): ?bool
    {
        return $this->isJoinable;
    }

    public function setIsJoinable(bool $isJoinable): static
    {
        $this->isJoinable = $isJoinable;

        return $this;
    }       
}