<?php

namespace App\DataFixtures;

use App\Entity\User;
use App\Entity\Event;
use Doctrine\Persistence\ObjectManager;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;

class EventFixtures extends Fixture implements DependentFixtureInterface
{    
    public function load(ObjectManager $manager): void
    {     
        $event = new Event(); 
        $event->setName("Sintra Bodyboard Pro Fest 2025")
            ->setCover("https://ibcworldtour.com/wp-content/uploads/2025/08/COVER.jpg")
            ->setDescription("This year, the festival will elevate the competition to a new level with the Men Rising Series and Women Rising Series categories. The world’s top riders will compete for substantial prize money: a total of $30,000 USD for the men’s category and $15,000 USD for the women’s. Prepare for a spectacle of impossible spins, perfect tubes, and gravity-defying maneuvers on one of Europe’s most iconic beaches.")
            ->setDateStart(new \DateTimeImmutable("2025-09-03 09:00:00"))            
            ->setDateEnd(new \DateTimeImmutable("2025-09-07 18:00:00"))
            ->setLat(38.8141377)
            ->setLon(-9.4770121)   
            ->setLocation("Avenida Alfredo Coelho, Colares, Portugal")
            ->setUrl("https://ibcworldtour.com/events/sintra-bodyboard-pro-fest-2025/")
            ->setRewards(45000)
            ->setCreatedAt(new \DatetimeImmutable())
            ->setUpdatedAt(new \DatetimeImmutable())
            ->setUser($this->getReference('user_0', User::class))
            ->addUser($this->getReference('user_0', User::class))            
            ->addUser($this->getReference('user_1', User::class));           
        $manager->persist($event);
        
        $event = new Event(); 
        $event->setName("EVERYDAY MEHDYA Rising Series 2025 in Morocco")
            ->setCover("https://ibcworldtour.com/wp-content/uploads/2025/06/Affiche-horizontale-.jpg")
            ->setDescription("We are thrilled to announce that Everyday Mehdya, in proud partnership with the Royal Moroccan Surfing Federation (FRMS), will be hosting the 2025 IBC Bodyboarding World Tour Junior Men Rising Series.")
            ->setDateStart(new \DateTimeImmutable("2025-08-11 09:00:00"))            
            ->setDateEnd(new \DateTimeImmutable("2025-08-17 17:00:00"))
            ->setLat(34.25949933897172)
            ->setLon(-6.681251411181536)   
            ->setLocation("Mehdya Beach, Kenitra, Morocco")
            ->setUrl("https://ibcworldtour.com/events/everyday-mehdya-rising-series-2025-in-morocco/")
            ->setRewards(2500)
            ->setCreatedAt(new \DatetimeImmutable())
            ->setUpdatedAt(new \DatetimeImmutable())
            ->setUser($this->getReference('user_0', User::class))
            ->addUser($this->getReference('user_1', User::class))            
            ->addUser($this->getReference('user_2', User::class));
        $manager->persist($event); 
        
        $event = new Event(); 
        $event->setName("Iquique Bodyboard Pro 2025 – Men & Women Prime Series Spots")
            ->setCover("https://ibcworldtour.com/wp-content/uploads/2025/06/afiche-horizontal-1920x1080.jpg")
            ->setDescription("Register page for this event. The world’s top riders will compete for substantial prize money: a total of $35,000 USD for the men’s category and $25,000 USD for the women’s")
            ->setDateStart(new \DateTimeImmutable("2025-08-11 09:00:00"))           
            ->setDateEnd(new \DateTimeImmutable("2025-08-17 17:00:00"))
            ->setLat(-20.217092139498753)
            ->setLon(-70.1562238338118)   
            ->setLocation("Punta Dos, Bellavista Beach in El Morro, Iquique, Chile")
            ->setUrl("https://ibcworldtour.com/events/2025/iquique-bodyboard-pro-2025/2025/register-now-ijunior-men-quique-bodyboard-pro-2025-rising-series-spots-open/")
            ->setRewards(60000)
            ->setCreatedAt(new \DatetimeImmutable())
            ->setUpdatedAt(new \DatetimeImmutable())
            ->setUser($this->getReference('user_0', User::class))
            ->addUser($this->getReference('user_0', User::class))            
            ->addUser($this->getReference('user_1', User::class))            
            ->addUser($this->getReference('user_2', User::class));            
        $manager->persist($event);

        $event = new Event(); 
        $event->setName("Gran Canaria Frontón King 2025 – Men & Women Prime Series Spots")
            ->setCover("https://ibcworldtour.com/wp-content/uploads/2024/08/REGISTRATIONS-OPEN-1600x1000-IBC.jpg")
            ->setDescription("Register page for this event. The world’s top riders will compete for substantial prize money: a total of $35,000 USD for the men’s category and $25,000 USD for the women’s")
            ->setDateStart(new \DateTimeImmutable("2025-10-11 09:00:00"))           
            ->setDateEnd(new \DateTimeImmutable("2025-10-25 17:00:00"))
            ->setLat(28.158315034015455)
            ->setLon(-15.665381432593936)   
            ->setLocation("Playa Boca Barranco, Gran Canaria, Spain")
            ->setUrl("https://ibcworldtour.com/")
            ->setRewards(60000)
            ->setCreatedAt(new \DatetimeImmutable())
            ->setUpdatedAt(new \DatetimeImmutable())
            ->setUser($this->getReference('user_0', User::class))
            ->addUser($this->getReference('user_0', User::class))            
            ->addUser($this->getReference('user_1', User::class))            
            ->addUser($this->getReference('user_2', User::class));            
        $manager->persist($event);
        
        $manager->flush(); 
    
    }
    
    public function getDependencies(): array
    {
        return [
            UserFixtures::class
        ]; 
    }
}