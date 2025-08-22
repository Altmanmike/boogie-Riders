<?php

namespace App\DataFixtures;

use App\Entity\User;
use App\Entity\Board;
use Doctrine\Persistence\ObjectManager;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;

class BoardFixtures extends Fixture implements DependentFixtureInterface
{    
    public function load(ObjectManager $manager): void
    {     
        $board = new Board(); 
        $board->setBrand("SCIENCE")
            ->setModel("MSCX- The Warp")
            ->setColors(["Dark green","Blue marine","Black"]) 
            ->setSize('41.5"')
            ->setDescription("The concept: A board that maintains maximum speed through turns.
            Experience full-throttle speed during long arcing turns or rail-to-rail transitions. The outer and inner rails work together, or as we call it, the Dual Delta tail, combined with the Deep Quad Vent channel system to provide maximum hold and control. This new tail allows for the smoothest turn transitions.
            Discover it now!")
            ->setCore("1.9PP Kinetic Polypro Core (PP)")
            ->setTail("Dual Delta")
            ->setStringer("1x Stringer")
            ->setMesh("Wavecushion Air 8lb PE Deck")
            ->setSlick("Surlyn Slick Skin")
            ->setPrice(419.5)
            ->setPhotoFront("https://www.ogm-bodyboard-shop.com/5109-large_default/bodyboard-science-mscx-the-warp.jpg")
            ->setPhotoBack("https://www.ogm-bodyboard-shop.com/5105-large_default/bodyboard-science-mscx-the-warp.jpg")
            ->setCreatedAt(new \DatetimeImmutable())
            ->setUpdatedAt(new \DatetimeImmutable())
            ->setUser($this->getReference('user_2', User::class))
            ->setVisibility(["Friends"]);           
        $manager->persist($board);
        
        $board = new Board(); 
        $board->setBrand("QCD")
            ->setModel("Ultra 4X Concaves")
            ->setColors(["Cyan","Blue azur","White"]) 
            ->setSize('41.5"')
            ->setDescription("The brand's highest-end model with its concave for optimal grip in hollow waves")
            ->setCore("PP")
            ->setTail("Dual Delta")
            ->setStringer("1x Carbonfibre")
            ->setMesh("NXLPE")
            ->setSlick("SURLYN")
            ->setPrice(329)
            ->setPhotoFront("https://www.ogm-bodyboard-shop.com/5149-large_default/bodyboard-qcd-ultra-4x-concaves.jpg")
            ->setPhotoBack("https://www.ogm-bodyboard-shop.com/5151-large_default/bodyboard-qcd-ultra-4x-concaves.jpg")
            ->setCreatedAt(new \DatetimeImmutable())
            ->setUpdatedAt(new \DatetimeImmutable())
            ->setUser($this->getReference('user_0', User::class))
            ->setVisibility(["Friends"]);
        $manager->persist($board); 
        
        $board = new Board(); 
        $board->setBrand("MOREY")
            ->setModel("Mach 7-7 Pierre Louis Costes")
            ->setColors(["Black","Yellow"]) 
            ->setSize('41"')
            ->setDescription("Two-time World Champion and native Pierre Louis Costes unveils his Morey Mach 7-7 model. It features the champion's fast and taut shape for maximum speed and projection!")
            ->setCore("PP")
            ->setTail("Crescent Tail")
            ->setStringer("1x Carbonfibre")
            ->setMesh("MESH")
            ->setSlick("Surlyn Slick Skin")
            ->setPrice(379)
            ->setPhotoFront("https://www.ogm-bodyboard-shop.com/5139-large_default/bodyboard-morey-mach-7-7-pierre-louis-costes.jpg")
            ->setPhotoBack("https://www.ogm-bodyboard-shop.com/5219-large_default/bodyboard-morey-mach-7-7-pierre-louis-costes.jpg")
            ->setCreatedAt(new \DatetimeImmutable())
            ->setUpdatedAt(new \DatetimeImmutable())
            ->setUser($this->getReference('user_1', User::class))
            ->setVisibility(["Friends"]);           
        $manager->persist($board);
        
        $manager->flush(); 
    
    }
    
    public function getDependencies(): array
    {
        return [
            UserFixtures::class
        ]; 
    }
}