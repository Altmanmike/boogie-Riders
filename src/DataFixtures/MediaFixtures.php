<?php

namespace App\DataFixtures;

use App\Entity\Spot;
use App\Entity\User;
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
        $media = new Media(); 
        $media->setFilePath("https://ibcworldtour.com/wp-content/uploads/2024/09/armide-pierreA.jpg")
            ->setType("Image")
            ->setDescription("Two contenders for the world title")        
            ->setCreatedAt(new \DatetimeImmutable())
            ->setUpdatedAt(new \DatetimeImmutable())
            ->setUser($this->getReference('user_0', User::class))
            ->setArticle($this->getReference('article_0', Article::class));        
        $this->addReference('media_0', $media);           
        $manager->persist($media);
        
        $media = new Media(); 
        $media->setFilePath("https://ibcworldtour.com/wp-content/uploads/2025/08/05.jpg")
            ->setType("Image")
            ->setDescription("from Morocco again takes the win")        
            ->setCreatedAt(new \DatetimeImmutable())
            ->setUpdatedAt(new \DatetimeImmutable())
            ->setUser($this->getReference('user_1', User::class))
            ->setSpot($this->getReference('spot_1', Spot::class));        
        $this->addReference('media_1', $media);           
        $manager->persist($media);

        $media = new Media(); 
        $media->setFilePath("https://ibcworldtour.com/wp-content/uploads/2024/09/armide-pierreA.jpg")
            ->setType("Image")
            ->setDescription("Image test3")        
            ->setCreatedAt(new \DatetimeImmutable())
            ->setUpdatedAt(new \DatetimeImmutable())
            ->setUser($this->getReference('user_2', User::class))
            ->setArticle($this->getReference('article_0', Article::class)); 
        $this->addReference('media_2', $media);           
        $manager->persist($media);

        $media = new Media(); 
        $media->setFilePath("../../public/build/img/test4.jpg")
            ->setType("Image")
            ->setDescription("Image test4")        
            ->setCreatedAt(new \DatetimeImmutable())
            ->setUpdatedAt(new \DatetimeImmutable())
            ->setUser($this->getReference('user_0', User::class))
            ->setSession($this->getReference('session_0', Session::class));
        $this->addReference('media_3', $media);           
        $manager->persist($media);

        $media = new Media(); 
        $media->setFilePath("https://youtu.be/lBxcXqRujog")
            ->setType("Video")
            ->setDescription("IBC 2025 trailer")        
            ->setCreatedAt(new \DatetimeImmutable())
            ->setUpdatedAt(new \DatetimeImmutable())
            ->setUser($this->getReference('user_0', User::class))
            ->setSession($this->getReference('session_0', Session::class));
        $this->addReference('media_4', $media);           
        $manager->persist($media);
        
        $manager->flush(); 
    
    }
    
    public function getDependencies(): array
    {
        return [
            UserFixtures::class,
            ArticleFixtures::class,
            SessionFixtures::class
        ]; 
    }
}