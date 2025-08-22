<?php

namespace App\DataFixtures;

use App\Entity\Fin;
use App\Entity\User;
use Doctrine\Persistence\ObjectManager;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;

class FinFixtures extends Fixture implements DependentFixtureInterface
{    
    public function load(ObjectManager $manager): void
    {     
        $fin = new Fin(); 
        $fin->setBrand("GYROLL")            
            ->setSize('M')
            ->setDescription("Maximize your propulsion with Gyroll fins. Made in Malaysia from 100% Malaysian rubber (yes, that's important... no fuss), these fins feature a soft pocket and a stiffer blade for the perfect balance of comfort and power. A true blast from the past!")
            ->setColors(["Yellow","Blue"]) 
            ->setPrice(59)
            ->setPhoto("https://www.ogm-bodyboard-shop.com/5310-large_default/palmes-gyroll-.jpg")
            ->setCreatedAt(new \DatetimeImmutable())
            ->setUpdatedAt(new \DatetimeImmutable())
            ->setUser($this->getReference('user_1', User::class))
            ->setVisibility(["Friends"]);          
        $manager->persist($fin);
        
        $fin = new Fin(); 
        $fin->setBrand("MS VIPER")
            ->setSize('ML')
            ->setDescription("This model is more flexible than the MS Viper Classic for optimal comfort. Fins are 100% natural rubber, so they float!
            Shorter and wider for optimal acceleration.
            Drainage holes allow sand and stones to escape.")
            ->setColors(["Red","Blue"]) 
            ->setPrice(75.5)
            ->setPhoto("https://www.ogm-bodyboard-shop.com/4690-large_default/palmes-ms-viper-blue-red.jpg")
            ->setCreatedAt(new \DatetimeImmutable())
            ->setUpdatedAt(new \DatetimeImmutable())
            ->setUser($this->getReference('user_0', User::class))
            ->setVisibility(["Friends"]);
        $manager->persist($fin); 
        
        $fin = new Fin(); 
        $fin->setBrand("POD 2")
            ->setSize('M')
            ->setDescription("These fins are comfortable and more powerful than the POD 1 thanks to their more pronounced edges. Sand and stone evacuation is very functional. Short and aggressive, they will delight drop knee riders as well as prone riders!")
            ->setColors(["White","Black"]) 
            ->setPrice(75)
            ->setPhoto("https://www.ogm-bodyboard-shop.com/4914-large_default/palmes-pod-2.jpg")
            ->setCreatedAt(new \DatetimeImmutable())
            ->setUpdatedAt(new \DatetimeImmutable())
            ->setUser($this->getReference('user_2', User::class))
            ->setVisibility(["Friends"]);           
        $manager->persist($fin);
        
        $manager->flush(); 
    
    }
    
    public function getDependencies(): array
    {
        return [
            UserFixtures::class
        ]; 
    }
}