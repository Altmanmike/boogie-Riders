<?php

namespace App\DataFixtures;

use App\Entity\User;
use App\Entity\Leash;
use Doctrine\Persistence\ObjectManager;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;

class LeashFixtures extends Fixture implements DependentFixtureInterface
{    
    public function load(ObjectManager $manager): void
    {     
        $leash = new Leash(); 
        $leash->setBrand("FOUND")            
            ->setType("Biceps")            
            ->setSize('L')
            ->setDescription("LEASH Biceps FOUND KD.")
            ->setColors(["Black"])            
            ->setPrice(40)
            ->setPhoto("https://www.ogm-bodyboard-shop.com/5274-large_default/leash-biceps-found-kd-.jpg")
            ->setCreatedAt(new \DatetimeImmutable())
            ->setUpdatedAt(new \DatetimeImmutable())
            ->setUser($this->getReference('user_0', User::class))
            ->setVisibility(["Friends"]);          
        $manager->persist($leash);
        
        $leash = new Leash(); 
        $leash->setBrand("OGM")
            ->setType("Biceps")           
            ->setSize('L')
            ->setDescription("Leash Biceps OGM Premium.")
            ->setColors(["Green fluo"]) 
            ->setPrice(45)
            ->setPhoto("https://www.ogm-bodyboard-shop.com/5013-large_default/leash-biceps-ogm-premium.jpg")
            ->setCreatedAt(new \DatetimeImmutable())
            ->setUpdatedAt(new \DatetimeImmutable())
            ->setUser($this->getReference('user_1', User::class))
            ->setVisibility(["Friends"]);
        $manager->persist($leash); 
        
        $leash = new Leash(); 
        $leash->setBrand("NMD")   
            ->setType("Biceps")         
            ->setSize('L')
            ->setDescription("Leash Biceps NMD.")
            ->setColors(["White","Black"]) 
            ->setPrice(39)
            ->setPhoto("https://www.ogm-bodyboard-shop.com/3975-large_default/leash-nmd-biceps-noir-blanc.jpg")
            ->setCreatedAt(new \DatetimeImmutable())
            ->setUpdatedAt(new \DatetimeImmutable())
            ->setUser($this->getReference('user_2', User::class))
            ->setVisibility(["Friends"]);            
        $manager->persist($leash);
        
        $manager->flush(); 
    
    }
    
    public function getDependencies(): array
    {
        return [
            UserFixtures::class
        ]; 
    }
}