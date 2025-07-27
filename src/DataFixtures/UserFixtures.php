<?php

namespace App\DataFixtures;

use App\Entity\User;
use Doctrine\Persistence\ObjectManager;
use Doctrine\Bundle\FixturesBundle\Fixture;

class UserFixtures extends Fixture
{
    public function load(ObjectManager $manager): void
    {
        $admin = new User();
        $admin->setEmail("adm@admin.com");
        $admin->setRoles(['ROLE_ADMIN']);
        $admin->setLastname("ADMIN");
        $admin->setFirstname("admin");
        $admin->setUsername("adm");
        $admin->setPassword("admin");
        $admin->setBoards(['Sniper','Science']);
        $admin->setFins(['Viper','Option']);
        $admin->setStyle('prone/dropknee 70/30');
        $admin->setFacebook("https://facebook.com/adminmoreyboogie");
        
        $manager->persist($admin);

        $user = new User();
        $user->setEmail("jck@aol.com");
        $user->setRoles(['ROLE_USER']);
        $user->setLastname("Sparrow");
        $user->setFirstname("Jack");
        $user->setUsername("jck");
        $user->setPassword("yT_hjJ9");
        $user->setBoards(['NMD']);
        $user->setFins(['Churchill']);
        $user->setStyle('prone/dropknee 100/0');
        
        $manager->persist($user);

        $user = new User();
        $user->setEmail("btk74@hotmail.com");
        $user->setRoles(['ROLE_USER']);
        $user->setLastname("TheKid");
        $user->setFirstname("Billy");
        $user->setUsername("btk");
        $user->setPassword("gH7-875p");
        $user->setBoards(['Empire']);
        $user->setFins(['Churchill']);
        $user->setStyle('prone/dropknee 60/40');
        $user->setYoutube("https://youtube.com/btkbodyboard");
        
        $manager->persist($user);
        
        $user = new User();
        $user->setEmail("jiji@yahoo.com");
        $user->setRoles(['ROLE_USER']);
        $user->setLastname("Doe");
        $user->setFirstname("John");
        $user->setUsername("jiji");
        $user->setPassword("wXc-Rt712gj56");
        $user->setBoards(['Pride']);
        $user->setFins(['Hydro']);
        $user->setStyle('prone/dropknee 80/20');
        
        $manager->persist($user);
        

        $manager->flush();
    }
}