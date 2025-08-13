<?php

namespace App\DataFixtures;

use App\Entity\User;
use App\Entity\Wetsuit;
use Doctrine\Persistence\ObjectManager;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;

class WetsuitFixtures extends Fixture implements DependentFixtureInterface
{    
    public function load(ObjectManager $manager): void
    {     
        $wetsuit = new Wetsuit(); 
        $wetsuit->setBrand("GYROLL")
            ->setModel("SHIELD 4/3 ZIPPERLESS")
            ->setType("Integral")            
            ->setSize('M')
            ->setDescription("100% Super Stretch Eco Friendly Limestone Neoprene, Ultimate Flexibility and Form Fitting Comfort")
            ->setColors(["Black","Red","Grey"])
            ->setGender("man")
            ->setThickness("4/3")
            ->setPrice(319)
            ->setPhoto("https://www.ogm-bodyboard-shop.com/4594-large_default/combinaison-gyroll-shield-43-zipperless-black-grey.jpg")
            ->setCreatedAt(new \DatetimeImmutable())
            ->setUpdatedAt(new \DatetimeImmutable())
            ->setUser($this->getReference('user_0', User::class));            
        $manager->persist($wetsuit);
        
        $wetsuit = new Wetsuit(); 
        $wetsuit->setBrand("MDNS")
            ->setModel("MADNESS Superstretch Serie")
            ->setSize('S')
            ->setDescription("The PRIME top is my state-of-the-art Superstretch series.")
            ->setColors(["Black"])
            ->setGender("man and woman")
            ->setThickness("2/2")
            ->setPrice(45)
            ->setPhoto("https://www.ogm-bodyboard-shop.com/5204-large_default/top-neoprene-madness.jpg")
            ->setCreatedAt(new \DatetimeImmutable())
            ->setUpdatedAt(new \DatetimeImmutable())
            ->setUser($this->getReference('user_1', User::class));
        $manager->persist($wetsuit); 
        
        $wetsuit = new Wetsuit(); 
        $wetsuit->setBrand("WEST")
            ->setModel("ENFORCER-S SHORTY 2/2MM BACK ZIP")
            ->setSize('M')
            ->setDescription("The WEST Enforcer-S Flatlock Spring Suit 2/2 back zip wetsuit is specially designed for summer sessions.")
            ->setColors(["White","Black"])
            ->setGender("man")
            ->setThickness("2/2")
            ->setPrice(75.9)
            ->setPhoto("https://www.ogm-bodyboard-shop.com/5063-large_default/combinaison-west-enforcer-s-shorty-22mm-back-zip.jpg")
            ->setCreatedAt(new \DatetimeImmutable())
            ->setUpdatedAt(new \DatetimeImmutable())
            ->setUser($this->getReference('user_2', User::class));            
        $manager->persist($wetsuit);
        
        $manager->flush(); 
    
    }
    
    public function getDependencies(): array
    {
        return [
            UserFixtures::class
        ]; 
    }
}