<?php

namespace App\DataFixtures;

use App\Entity\User;
use App\Entity\Club;
use Doctrine\Persistence\ObjectManager;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;

class ClubFixtures extends Fixture implements DependentFixtureInterface
{    
    public function load(ObjectManager $manager): void
    {     
        $club = new Club(); 
        $club->setName("HCL OCEAN CLUB Ecole de surf et bodyboard")
            ->setCover("https://www.lacanausurfcamp.fr/wp-content/uploads/2021/03/Hcl-ECOLE-Club-blanc-ombre-web.png")
            ->setDescription("Venez surfer, dans une ambiance familiale, pour les kids, les ados, les adultes ! Créée en 2000 par Cédric Grèze, l’école HCL est un état d’esprit, une ambiance, une famille. C’est la HCL Family ! Nous offrons des cours adaptés à chacun, en fonction de sa personnalité, de son rythme, de son évolution. Initiation ou perfectionnement, en surf ou en bodyboard, Cédric et son équipe vous encadrent au plus près, dans les vagues, dans la recherche du plaisir, de la convivialité, sans oublier la sécurité. L’école et le surf camp sont ouverts à l’année (sauf fêtes de Noël). Nous organisons également plusieurs Surf Trips dans l’année, avec suivi vidéo et debriefs.")
            ->setLat(45.003735838938134)
            ->setLon(-1.200887841787397)   
            ->setLocation("1 Av. Pierre Loti, 33680 Lacanau")
            ->setUrl("https://www.lacanausurfcamp.fr/")
            ->setMail("hcl.ecolesurf@gmail.com")
            ->setPhone("0687579528")
            ->setCreatedAt(new \DatetimeImmutable())
            ->setUpdatedAt(new \DatetimeImmutable())
            ->setUser($this->getReference('user_0', User::class))            
            ->addMember($this->getReference('user_0', User::class))            
            ->addMember($this->getReference('user_1', User::class))
            ->addMember($this->getReference('user_2', User::class))
            ->setVisibility(["Public"]);
        $this->addReference('club_0', $club);               
        $manager->persist($club);
        
        $manager->flush(); 
    
    }
    
    public function getDependencies(): array
    {
        return [
            UserFixtures::class
        ]; 
    }
}