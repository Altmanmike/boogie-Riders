<?php

namespace App\DataFixtures;

use App\Entity\Club;
use App\Entity\Spot;
use App\Entity\User;
use App\Entity\Event;
use App\Entity\Group;
use App\Entity\Media;
use App\Entity\Article;
use App\Entity\Session;
use Doctrine\Persistence\ObjectManager;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;

class MediaFixtures extends Fixture implements DependentFixtureInterface
{    
    public function load(ObjectManager $manager): void
    {
        // ARTICLE   
        $media = new Media(); 
        $media->setFilePath("https://ibcworldtour.com/wp-content/uploads/2024/09/armide-pierreA.jpg")
            ->setType("Image")
            ->setDescription("Two contenders for the world title")        
            ->setCreatedAt(new \DatetimeImmutable())
            ->setUpdatedAt(new \DatetimeImmutable())
            ->setUser($this->getReference('user_0', User::class))
            ->setArticle($this->getReference('article_0', Article::class))
            ->setVisibility(["Public"]);       
        $this->addReference('media_0', $media);           
        $manager->persist($media);
        
        $media = new Media(); 
        $media->setFilePath("https://ibcworldtour.com/wp-content/uploads/2024/09/armide-pierreA.jpg")
            ->setType("Image")
            ->setDescription("Image test3")        
            ->setCreatedAt(new \DatetimeImmutable())
            ->setUpdatedAt(new \DatetimeImmutable())
            ->setUser($this->getReference('user_2', User::class))
            ->setArticle($this->getReference('article_0', Article::class))
            ->setVisibility(["Public"]);
        $this->addReference('media_1', $media);           
        $manager->persist($media);
        
        // SPOT
        $media = new Media(); 
        $media->setFilePath("https://ibcworldtour.com/wp-content/uploads/2025/08/05.jpg")
            ->setType("Image")
            ->setDescription("from Morocco again takes the win")        
            ->setCreatedAt(new \DatetimeImmutable())
            ->setUpdatedAt(new \DatetimeImmutable())
            ->setUser($this->getReference('user_1', User::class))
            ->setSpot($this->getReference('spot_1', Spot::class))
            ->setVisibility(["Group"])
            ->addVisibleToGroup($this->getReference('group_1', Group::class));       
        $this->addReference('media_2', $media);           
        $manager->persist($media);        

        // SESSION
        $media = new Media(); 
        $media->setFilePath("../../public/build/img/test4.jpg")
            ->setType("Image")
            ->setDescription("Image test4")        
            ->setCreatedAt(new \DatetimeImmutable())
            ->setUpdatedAt(new \DatetimeImmutable())
            ->setUser($this->getReference('user_0', User::class))
            ->setSession($this->getReference('session_0', Session::class))
            ->setVisibility(["Group"])
            ->addVisibleToGroup($this->getReference('group_1', Group::class));
        $this->addReference('media_3', $media);           
        $manager->persist($media);

        $media = new Media(); 
        $media->setFilePath("https://www.youtube.com/embed/lBxcXqRujog")
            ->setType("Video")
            ->setDescription("IBC 2025 trailer")        
            ->setCreatedAt(new \DatetimeImmutable())
            ->setUpdatedAt(new \DatetimeImmutable())
            ->setUser($this->getReference('user_0', User::class))
            ->setSession($this->getReference('session_0', Session::class))
            ->setVisibility(["Group"])
            ->addVisibleToGroup($this->getReference('group_1', Group::class));
        $this->addReference('media_4', $media);           
        $manager->persist($media);
        
        // EVENT
        $media = new Media(); 
        $media->setFilePath("https://www.youtube.com/embed/2l92OP0Zgxg")
            ->setType("Video")
            ->setDescription("IBC MEDHYA 2025 DAY 2 trailer")        
            ->setCreatedAt(new \DatetimeImmutable())
            ->setUpdatedAt(new \DatetimeImmutable())
            ->setUser($this->getReference('user_0', User::class))
            ->setEvent($this->getReference('event_1', Event::class))
            ->setVisibility(["Group"])
            ->addVisibleToGroup($this->getReference('group_1', Group::class));
        $this->addReference('media_5', $media);           
        $manager->persist($media);
        
        $media = new Media(); 
        $media->setFilePath("https://www.youtube.com/embed/fx64Rz7jlvw")
            ->setType("Video")
            ->setDescription("Wave conditions the 20 august 2025 at Lacanau, France")        
            ->setCreatedAt(new \DatetimeImmutable())
            ->setUpdatedAt(new \DatetimeImmutable())
            ->setUser($this->getReference('user_2', User::class))
            ->setEvent($this->getReference('event_4', Event::class))
            ->setVisibility(["Group"])
            ->addVisibleToGroup($this->getReference('group_2', Group::class));
        $this->addReference('media_6', $media);           
        $manager->persist($media);
        
        // CLUB
        $media = new Media(); 
        $media->setFilePath("https://www.youtube.com/embed/CH3eIv3jiV8")
            ->setType("Video")
            ->setDescription("HCL trailer")        
            ->setCreatedAt(new \DatetimeImmutable())
            ->setUpdatedAt(new \DatetimeImmutable())
            ->setUser($this->getReference('user_0', User::class))
            ->setClub($this->getReference('club_0', Club::class))
            ->setVisibility(["Group"])
            ->addVisibleToGroup($this->getReference('group_2', Group::class));
        $this->addReference('media_7', $media);           
        $manager->persist($media);
        
        $manager->flush(); 
    
    }
    
    public function getDependencies(): array
    {
        return [
            UserFixtures::class,
            ArticleFixtures::class,
            SessionFixtures::class,
            SpotFixtures::class,
            EventFixtures::class,
            ClubFixtures::class,
            GroupFixtures::class
        ]; 
    }
}