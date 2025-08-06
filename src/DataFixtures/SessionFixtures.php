<?php

namespace App\DataFixtures;

use App\Entity\Spot;
use App\Entity\User;
use App\Entity\Session;
use Doctrine\Persistence\ObjectManager;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;

class SessionFixtures extends Fixture implements DependentFixtureInterface
{    
    public function load(ObjectManager $manager): void
    {    
        $session = new Session(); 
        $session->setDate(new \DatetimeImmutable("2025-09-01 07:00:00"))
            ->setDuration(4)
            ->setConditions("Sun all the day and clean conditions")
            ->setPersonalRating(3)          
            ->setCreatedAt(new \DatetimeImmutable())
            ->setUpdatedAt(new \DatetimeImmutable())
            ->setUser($this->getReference('user_1', User::class))
            ->setSpot($this->getReference('spot_0', Spot::class));
        $this->addReference('session_0', $session);           
        $manager->persist($session);       
        
        $manager->flush(); 
    
    }
    
    public function getDependencies(): array
    {
        return [
            UserFixtures::class,
            SpotFixtures::class
        ]; 
    }
}