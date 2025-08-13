<?php

namespace App\DataFixtures;

use App\Entity\User;
use App\Entity\Spot;
use Doctrine\Persistence\ObjectManager;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;

class SpotFixtures extends Fixture implements DependentFixtureInterface
{    
    public function load(ObjectManager $manager): void
    {     
        $spot = new Spot(); 
        $spot->setName("Sintra")
            ->setLat(38.8141377)
            ->setLon(-9.4770121)
            ->setLocation("Avenida Alfredo Coelho, Colares, Portugal") 
            ->setDescription("Europe’s most iconic beaches.")             
            ->setWaveType("Beach break")
            ->setBestConditions("The spot works at all tides. The ideal wind is offshore, coming from the east. It picks up northwest swells well. It's a very regular and consistent spot. For beginners, summer is ideal with smaller waves. More experienced surfers will prefer fall and winter for more powerful swells.")
            ->setDifficultyLevel(4)
            ->setCreatedAt(new \DatetimeImmutable())
            ->setUpdatedAt(new \DatetimeImmutable())
            ->addUser($this->getReference('user_0', User::class));            
        $this->addReference('spot_0', $spot);           
        $manager->persist($spot);
        
        $spot = new Spot(); 
        $spot->setName("Mehdya")
            ->setDescription("Partnership with the Royal Moroccan Surfing Federation (FRMS).")
            ->setLat(34.25949933897172)
            ->setLon(-6.681251411181536)   
            ->setLocation("Mehdya Beach, Kenitra, Morocco")
            ->setWaveType("Beach break")
            ->setBestConditions("The spot catches northwest swells well. The ideal wind is offshore, coming from the east, which tends to dig the waves. The spot works at all tides.")
            ->setDifficultyLevel(4)
            ->setCreatedAt(new \DatetimeImmutable())
            ->setUpdatedAt(new \DatetimeImmutable())
            ->addUser($this->getReference('user_1', User::class));
        $this->addReference('spot_1', $spot);
        $manager->persist($spot); 
        
        $spot = new Spot(); 
        $spot->setName("Iquique")
            ->setDescription("Chile's famous spot.")
            ->setLat(-20.217092139498753)
            ->setLon(-70.1562238338118)   
            ->setLocation("Punta Dos, Bellavista Beach in El Morro, Iquique, Chile")
            ->setWaveType("Shallow reefs")
            ->setBestConditions("The spot operates with northwest, south, southwest, and west swells. There is no universally ideal tide, but most spots in the area operate well at low tide. The ideal wind is offshore, coming from the east. This is a spot that can be surfed year-round, but the water temperature requires a wetsuit.")
            ->setDifficultyLevel(4)
            ->setCreatedAt(new \DatetimeImmutable())
            ->setUpdatedAt(new \DatetimeImmutable())
            ->addUser($this->getReference('user_2', User::class));
        $this->addReference('spot_2', $spot);            
        $manager->persist($spot);
        
        $manager->flush(); 
    
    }
    
    public function getDependencies(): array
    {
        return [
            UserFixtures::class
        ]; 
    }
}