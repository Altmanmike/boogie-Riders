<?php

namespace App\DataFixtures;

use App\Entity\Club;
use App\Entity\Like;
use App\Entity\Spot;
use App\Entity\User;
use App\Entity\Event;
use App\Entity\Article;
use App\Entity\Session;
use Doctrine\Persistence\ObjectManager;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;

class LikeFixtures extends Fixture implements DependentFixtureInterface
{    
    public function load(ObjectManager $manager): void
    {
        // ARTICLE    
        $like = new Like(); 
        $like->setLiked(true)             
            ->setCreatedAt(new \DatetimeImmutable())
            ->setUpdatedAt(new \DatetimeImmutable())
            ->setUser($this->getReference('user_1', User::class))
            ->setArticle($this->getReference('article_0', Article::class));            
        $this->addReference('like_0', $like);           
        $manager->persist($like);

        $like = new Like(); 
        $like->setLiked(true)             
            ->setCreatedAt(new \DatetimeImmutable())
            ->setUpdatedAt(new \DatetimeImmutable())
            ->setUser($this->getReference('user_0', User::class))
            ->setArticle($this->getReference('article_2', Article::class));            
        $this->addReference('like_1', $like);           
        $manager->persist($like);
        
        // SESSION
        $like = new Like(); 
        $like->setLiked(true)             
            ->setCreatedAt(new \DatetimeImmutable())
            ->setUpdatedAt(new \DatetimeImmutable())
            ->setUser($this->getReference('user_2', User::class))            
            ->setSession($this->getReference('session_0', Session::class));
        $this->addReference('like_2', $like);           
        $manager->persist($like);

        // SPOT
        $like = new Like(); 
        $like->setLiked(true)             
            ->setCreatedAt(new \DatetimeImmutable())
            ->setUpdatedAt(new \DatetimeImmutable())
            ->setUser($this->getReference('user_1', User::class))            
            ->setSpot($this->getReference('spot_0', Spot::class));
        $this->addReference('like_3', $like);           
        $manager->persist($like);

        $like = new Like(); 
        $like->setLiked(true)             
            ->setCreatedAt(new \DatetimeImmutable())
            ->setUpdatedAt(new \DatetimeImmutable())
            ->setUser($this->getReference('user_3', User::class))            
            ->setSpot($this->getReference('spot_3', Spot::class));
        $this->addReference('like_4', $like);           
        $manager->persist($like);

        // EVENT
        $like = new Like(); 
        $like->setLiked(true)             
            ->setCreatedAt(new \DatetimeImmutable())
            ->setUpdatedAt(new \DatetimeImmutable())
            ->setUser($this->getReference('user_0', User::class))            
            ->setEvent($this->getReference('event_0', Event::class));
        $this->addReference('like_5', $like);           
        $manager->persist($like);

        $like = new Like(); 
        $like->setLiked(true)             
            ->setCreatedAt(new \DatetimeImmutable())
            ->setUpdatedAt(new \DatetimeImmutable())
            ->setUser($this->getReference('user_1', User::class))            
            ->setEvent($this->getReference('event_3', Event::class));
        $this->addReference('like_6', $like);           
        $manager->persist($like);

        // CLUB
        $like = new Like(); 
        $like->setLiked(true)             
            ->setCreatedAt(new \DatetimeImmutable())
            ->setUpdatedAt(new \DatetimeImmutable())
            ->setUser($this->getReference('user_2', User::class))            
            ->setClub($this->getReference('club_0', Club::class));
        $this->addReference('like_7', $like);           
        $manager->persist($like);
        
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
        ]; 
    }
}