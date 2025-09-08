<?php

namespace App\DataFixtures;

use App\Entity\User;
use App\Entity\Group;
use Doctrine\Persistence\ObjectManager;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;

class GroupFixtures extends Fixture implements DependentFixtureInterface
{    
    public function load(ObjectManager $manager): void
    {    
        $group = new Group(); 
        $group->setName("Old friends")
            ->setDescription("A group started by some friends ...")
            ->setUser($this->getReference('user_0', User::class))            
            ->addMember($this->getReference('user_0', User::class))
            ->addMember($this->getReference('user_1', User::class))
            ->addMember($this->getReference('user_2', User::class))
            ->addMember($this->getReference('user_3', User::class))
            ->setIsJoinable(true)            
            ->setCreatedAt(new \DatetimeImmutable())
            ->setUpdatedAt(new \DatetimeImmutable());        
        $this->addReference('group_0', $group);           
        $manager->persist($group);

        $group = new Group(); 
        $group->setName("Medhya Maroc admins team")
            ->setDescription("People from the event and locals")
            ->setUser($this->getReference('user_1', User::class))
            ->addMember($this->getReference('user_0', User::class))
            ->addMember($this->getReference('user_1', User::class))
            ->addMember($this->getReference('user_2', User::class))
            ->setIsJoinable(false)
            ->setCreatedAt(new \DatetimeImmutable())
            ->setUpdatedAt(new \DatetimeImmutable());        
        $this->addReference('group_1', $group);           
        $manager->persist($group);

        $group = new Group(); 
        $group->setName("Club lambda") 
            ->setDescription("Group from club members") 
            ->setUser($this->getReference('user_3', User::class))          
            ->addMember($this->getReference('user_1', User::class))
            ->addMember($this->getReference('user_2', User::class))
            ->addMember($this->getReference('user_3', User::class))
            ->setIsJoinable(true)
            ->setCreatedAt(new \DatetimeImmutable())
            ->setUpdatedAt(new \DatetimeImmutable());        
        $this->addReference('group_2', $group);                 
        $manager->persist($group);
        
        
        $manager->flush();  
           
    }
    
    public function getDependencies(): array
    {
        return [
            UserFixtures::class
        ]; 
    }
}