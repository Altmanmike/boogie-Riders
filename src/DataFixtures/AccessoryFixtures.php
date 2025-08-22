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
            ->setPhoto("https://www.ogm-bodyboard-shop.com/5308-large_default/gyroll-fins-socks-chaussons-neoprene.jpg")
            ->setCreatedAt(new \DatetimeImmutable())
            ->setUpdatedAt(new \DatetimeImmutable())
            ->setUser($this->getReference('user_0', User::class))
            ->setVisibility(["Friends"]);            
        $manager->persist($accessory);
        
        $accessory = new Accessory(); 
        $accessory->setKind("Wear")
            ->setBrand("SCIENCE")           
            ->setSize('XL')
            ->setDescription("Fuse Hooded Sweatshirt.")
            ->setColors(["Black"]) 
            ->setPrice(75)
            ->setPhoto("https://www.ogm-bodyboard-shop.com/5233-large_default/sweatshirt-science-fuse-hooded-.jpg")
            ->setCreatedAt(new \DatetimeImmutable())
            ->setUpdatedAt(new \DatetimeImmutable())
            ->setUser($this->getReference('user_1', User::class))
            ->setVisibility(["Friends"]);
        $manager->persist($accessory); 
        
        $accessory = new Accessory(); 
        $accessory->setKind("Plug")
            ->setBrand("PLUG")
            ->setColors(["Black"]) 
            ->setPrice(3)
            ->setPhoto("https://www.ogm-bodyboard-shop.com/5044-large_default/plug-creatures.jpg")
            ->setCreatedAt(new \DatetimeImmutable())
            ->setUpdatedAt(new \DatetimeImmutable())
            ->setUser($this->getReference('user_2', User::class))
            ->setVisibility(["Friends"]);            
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