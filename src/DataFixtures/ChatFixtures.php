<?php

namespace App\DataFixtures;

use App\Entity\Chat;
use App\Entity\User;
use Doctrine\Persistence\ObjectManager;
use Doctrine\Bundle\FixturesBundle\Fixture;

class ChatFixtures extends Fixture
{    
    public function load(ObjectManager $manager): void
    {    
        $chat = new Chat(); 
        $chat->setCreatedAt(new \DatetimeImmutable())
            ->setUpdatedAt(new \DatetimeImmutable())
            ->addUser($this->getReference('user_0', User::class))            
            ->addUser($this->getReference('user_1', User::class));
        $this->addReference('chat_0', $chat);           
        $manager->persist($chat);       
        
        $manager->flush();     
    }  
}