<?php

namespace App\DataFixtures;

use App\Entity\Chat;
use Doctrine\Persistence\ObjectManager;
use Doctrine\Bundle\FixturesBundle\Fixture;

class ChatFixtures extends Fixture
{    
    public function load(ObjectManager $manager): void
    {    
        $chat = new Chat(); 
        $chat->setCreatedAt(new \DatetimeImmutable())
            ->setUpdatedAt(new \DatetimeImmutable());
        $this->addReference('chat_0', $chat);           
        $manager->persist($chat);       
        
        $manager->flush();     
    }  
}