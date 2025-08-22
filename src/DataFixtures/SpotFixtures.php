<?php

namespace App\DataFixtures;

use App\Entity\Spot;
use App\Entity\User;
use App\Entity\Group;
use Doctrine\Persistence\ObjectManager;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;

class SpotFixtures extends Fixture implements DependentFixtureInterface
{    
    public function load(ObjectManager $manager): void
    {     
        $spot = new Spot(); 
        $spot->setName("Sintra")
            ->setCover("https://ibcworldtour.com/wp-content/uploads/2025/08/IMG_7228-1920x1080.jpg")
            ->setLat(38.8141377)
            ->setLon(-9.4770121)
            ->setLocation("Avenida Alfredo Coelho, Colares, Portugal") 
            ->setDescription("Europe’s most iconic beaches.")             
            ->setWaveType("Beach break")
            ->setBestConditions("The spot works at all tides. The ideal wind is offshore, coming from the east. It picks up northwest swells well. It's a very regular and consistent spot. For beginners, summer is ideal with smaller waves. More experienced surfers will prefer fall and winter for more powerful swells.")
            ->setDifficultyLevel(4)
            ->setCreatedAt(new \DatetimeImmutable())
            ->setUpdatedAt(new \DatetimeImmutable())
            ->setUser($this->getReference('user_0', User::class))
            ->addUser($this->getReference('user_0', User::class))
            ->addUser($this->getReference('user_1', User::class))
            ->addUser($this->getReference('user_2', User::class))
            ->setVisibility(["Public"]);          
        $this->addReference('spot_0', $spot);           
        $manager->persist($spot);
        
        $spot = new Spot(); 
        $spot->setName("Mehdya")
            ->setCover("https://ibcworldtour.com/wp-content/uploads/2025/08/21.jpg")
            ->setDescription("Partnership with the Royal Moroccan Surfing Federation (FRMS).")
            ->setLat(34.25949933897172)
            ->setLon(-6.681251411181536)   
            ->setLocation("Mehdya Beach, Kenitra, Morocco")
            ->setWaveType("Beach break")
            ->setBestConditions("The spot catches northwest swells well. The ideal wind is offshore, coming from the east, which tends to dig the waves. The spot works at all tides.")
            ->setDifficultyLevel(4)
            ->setCreatedAt(new \DatetimeImmutable())
            ->setUpdatedAt(new \DatetimeImmutable())
            ->setUser($this->getReference('user_1', User::class))
            ->addUser($this->getReference('user_0', User::class))            
            ->addUser($this->getReference('user_2', User::class))
            ->setVisibility(["Group"])
            ->addVisibleToGroup($this->getReference('group_1', Group::class));
        $this->addReference('spot_1', $spot);
        $manager->persist($spot); 
        
        $spot = new Spot(); 
        $spot->setName("Iquique")
            ->setCover("https://ibcworldtour.com/wp-content/uploads/2024/05/Mikelle-Arriagada-Chile-2.jpg")
            ->setDescription("Chile's famous spot.")
            ->setLat(-20.217092139498753)
            ->setLon(-70.1562238338118)   
            ->setLocation("Punta Dos, Bellavista Beach in El Morro, Iquique, Chile")
            ->setWaveType("Shallow reef")
            ->setBestConditions("The spot operates with northwest, south, southwest, and west swells. There is no universally ideal tide, but most spots in the area operate well at low tide. The ideal wind is offshore, coming from the east. This is a spot that can be surfed year-round, but the water temperature requires a wetsuit.")
            ->setDifficultyLevel(4)
            ->setCreatedAt(new \DatetimeImmutable())
            ->setUpdatedAt(new \DatetimeImmutable())
            ->setUser($this->getReference('user_0', User::class))
            ->addUser($this->getReference('user_0', User::class))
            ->addUser($this->getReference('user_1', User::class))            
            ->setVisibility(["Public"]);
        $this->addReference('spot_2', $spot);            
        $manager->persist($spot);
        
        $spot = new Spot(); 
        $spot->setName("El Frontón")
            ->setCover("https://ibcworldtour.com/wp-content/uploads/2024/10/Armide-FK-2023.jpg")
            ->setDescription("Spain's famous spot in Gran Canaria islands")
            ->setLat(28.158315034015455)
            ->setLon(-15.665381432593936)    
            ->setLocation("Playa boca Barranco, Gran Canaria, Spain")
            ->setWaveType("Shallow reef")
            ->setBestConditions("This is a reef break (a wave that breaks on a reef). It is known for being very powerful, explosive, and tubular. The spot works best with a house coming from the NW, N, or NE. Light winds from the S, SW, or W are ideal, as they create offshore conditions, smoothing the wave surface. The spot often performs best at mid-tide or high tide, although some sources indicate that it can also work at low tide with faster waves.")
            ->setDifficultyLevel(4)
            ->setCreatedAt(new \DatetimeImmutable())
            ->setUpdatedAt(new \DatetimeImmutable())
            ->setUser($this->getReference('user_0', User::class))
            ->addUser($this->getReference('user_0', User::class))
            ->addUser($this->getReference('user_1', User::class))
            ->addUser($this->getReference('user_2', User::class))
            ->addUser($this->getReference('user_3', User::class))
            ->setVisibility(["Public"]);
        $this->addReference('spot_3', $spot);            
        $manager->persist($spot);
        
        
        $manager->flush(); 
    
    }
    
    public function getDependencies(): array
    {
        return [
            UserFixtures::class,
            GroupFixtures::class
        ]; 
    }
}