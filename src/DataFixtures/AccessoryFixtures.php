<?php

namespace App\DataFixtures;

use App\Entity\User;
use App\Entity\Accessory;
use Doctrine\Persistence\ObjectManager;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;

class AccessoryFixtures extends Fixture implements DependentFixtureInterface
{    
    public function load(ObjectManager $manager): void
    {     
        $accessory = new Accessory(); 
        $accessory->setKind("Fins stuff")
            ->setBrand("GYROLL")                      
            ->setSize('L')
            ->setDescription("Neoprene Fins socks.")
            ->setColors(["Black","Yellow"])            
            ->setPrice(16)
            ->setCreatedAt(new \DatetimeImmutable())
            ->setUpdatedAt(new \DatetimeImmutable())
            ->setUser($this->getReference('user_0', User::class));            
        $manager->persist($accessory);
        
        $accessory = new Accessory(); 
        $accessory->setKind("Wear")
            ->setBrand("SCIENCE")           
            ->setSize('XL')
            ->setDescription("Fuse Hooded Sweatshirt.")
            ->setColors(["Black"]) 
            ->setPrice(75)
            ->setCreatedAt(new \DatetimeImmutable())
            ->setUpdatedAt(new \DatetimeImmutable())
            ->setUser($this->getReference('user_1', User::class));
        $manager->persist($accessory); 
        
        $accessory = new Accessory(); 
        $accessory->setKind("Plug")
            ->setBrand("PLUG")
            ->setColors(["Black"]) 
            ->setPrice(3)
            ->setCreatedAt(new \DatetimeImmutable())
            ->setUpdatedAt(new \DatetimeImmutable())
            ->setUser($this->getReference('user_2', User::class));            
        $manager->persist($accessory);
        
        $manager->flush(); 
    
    }
    
    public function getDependencies(): array
    {
        return [
            UserFixtures::class
        ]; 
    }
}