<?php

namespace App\DataFixtures;

use App\Entity\Like;
use App\Entity\User;
use App\Entity\Article;
use App\Entity\Session;
use Doctrine\Persistence\ObjectManager;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;

class LikeFixtures extends Fixture implements DependentFixtureInterface
{    
    public function load(ObjectManager $manager): void
    {    
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
            ->setUser($this->getReference('user_2', User::class))            
            ->setSession($this->getReference('session_0', Session::class));
        $this->addReference('like_1', $like);           
        $manager->persist($like); 
        
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