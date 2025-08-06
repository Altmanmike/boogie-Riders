<?php

namespace App\DataFixtures;

use App\Entity\Chat;
use App\Entity\User;
use App\Entity\Message;
use Doctrine\Persistence\ObjectManager;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;

class MessageFixtures extends Fixture implements DependentFixtureInterface
{    
    public function load(ObjectManager $manager): void
    {    
        $message = new Message(); 
        $message->setContent("Hi there!")
            ->setIsRead(true)
            ->setCreatedAt(new \DatetimeImmutable())
            ->setUpdatedAt(new \DatetimeImmutable())
            ->setUser($this->getReference('user_0', User::class))
            ->setChat($this->getReference('chat_0', Chat::class));
        $this->addReference('message_0', $message);                  
        $manager->persist($message);       
        
        $message = new Message(); 
        $message->setContent("hello dude!!!")
            ->setIsRead(true)
            ->setCreatedAt(new \DatetimeImmutable())
            ->setUpdatedAt(new \DatetimeImmutable())
            ->setUser($this->getReference('user_1', User::class))
            ->setChat($this->getReference('chat_0', Chat::class));
        $this->addReference('message_1', $message);
        $manager->persist($message);
        
        $message = new Message(); 
        $message->setContent("How are you ?")
            ->setIsRead(false)
            ->setCreatedAt(new \DatetimeImmutable())
            ->setUpdatedAt(new \DatetimeImmutable())
            ->setUser($this->getReference('user_0', User::class))
            ->setChat($this->getReference('chat_0', Chat::class));
        $this->addReference('message_2', $message);        
        $manager->persist($message);

        
        $manager->flush(); 
    
    }
    
    public function getDependencies(): array
    {
        return [
            UserFixtures::class,
            ChatFixtures::class
        ]; 
    }
}