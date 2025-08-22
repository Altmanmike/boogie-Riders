<?php

namespace App\DataFixtures;

use App\Entity\User;
use App\Entity\Friendship;
use Doctrine\Persistence\ObjectManager;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;

class FriendshipFixtures extends Fixture implements DependentFixtureInterface
{    
    public function load(ObjectManager $manager): void
    {    
        $friendship = new Friendship(); 
        $friendship->setUser($this->getReference('user_0', User::class))
            ->setFriend($this->getReference('user_1', User::class))
            ->setCreatedAt(new \DatetimeImmutable())
            ->setUpdatedAt(new \DatetimeImmutable())
            ->setStatus("Accepted");        
        $this->addReference('friendship_0', $friendship);           
        $manager->persist($friendship);

        $friendship = new Friendship(); 
        $friendship->setUser($this->getReference('user_0', User::class))
            ->setFriend($this->getReference('user_2', User::class))
            ->setCreatedAt(new \DatetimeImmutable())
            ->setUpdatedAt(new \DatetimeImmutable())
            ->setStatus("Accepted");        
        $this->addReference('friendship_1', $friendship);           
        $manager->persist($friendship);

        $friendship = new Friendship(); 
        $friendship->setUser($this->getReference('user_0', User::class))
            ->setFriend($this->getReference('user_3', User::class))
            ->setCreatedAt(new \DatetimeImmutable())
            ->setUpdatedAt(new \DatetimeImmutable())
            ->setStatus("Pending");        
        $this->addReference('friendship_2', $friendship);           
        $manager->persist($friendship);

        $friendship = new Friendship(); 
        $friendship->setUser($this->getReference('user_1', User::class))
            ->setFriend($this->getReference('user_2', User::class))
            ->setCreatedAt(new \DatetimeImmutable())
            ->setUpdatedAt(new \DatetimeImmutable())
            ->setStatus("Pending");        
        $this->addReference('friendship_3', $friendship);           
        $manager->persist($friendship);

        $friendship = new Friendship(); 
        $friendship->setUser($this->getReference('user_1', User::class))
            ->setFriend($this->getReference('user_3', User::class))
            ->setCreatedAt(new \DatetimeImmutable())
            ->setUpdatedAt(new \DatetimeImmutable())
            ->setStatus("Accepted");        
        $this->addReference('friendship_4', $friendship);           
        $manager->persist($friendship);

        $friendship = new Friendship(); 
        $friendship->setUser($this->getReference('user_2', User::class))
            ->setFriend($this->getReference('user_3', User::class))
            ->setCreatedAt(new \DatetimeImmutable())
            ->setUpdatedAt(new \DatetimeImmutable())
            ->setStatus("Blocked");        
        $this->addReference('friendship_5', $friendship);           
        $manager->persist($friendship);

        
        $manager->flush(); 
    
    }
    
    public function getDependencies(): array
    {
        return [
            UserFixtures::class
        ]; 
    }
}