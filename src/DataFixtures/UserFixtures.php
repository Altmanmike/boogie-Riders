<?php

namespace App\DataFixtures;

use App\Entity\User;
use Doctrine\Persistence\ObjectManager;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

class UserFixtures extends Fixture
{
    public function __construct(private UserPasswordHasherInterface $passwordEncoder) {}
    
    public function load(ObjectManager $manager): void
    {     
        $admin = new User();
        $admin->setEmail("adm@aol.com");
        $admin->setRoles(["ROLE_ADMIN","ROLE_USER"]);
        $admin->setLastname("ADMIN");
        $admin->setFirstname("admin");
        $admin->setPseudo("BOB");
        $admin->setPhoto("https://img.daisyui.com/images/profile/demo/2@94.webp");
        $admin->setPassword("admin");
        $admin->setPassword($this->passwordEncoder->hashPassword($admin, "admin"));
        $admin->setStyle("prone/dropknee 70/30");
        $admin->setFacebook("https://facebook.com/adminmoreyboogie");
        $admin->setIsVerified(false);
        $admin->setCreatedAt(new \DatetimeImmutable());
        $admin->setUpdatedAt(new \DatetimeImmutable());        
        $this->addReference('user_0', $admin);
        
        $manager->persist($admin);

        $user = new User();
        $user->setEmail("jck@aol.com");
        $user->setRoles(["ROLE_USER"]);
        $user->setLastname("Sparrow");
        $user->setFirstname("Jack");
        $user->setPseudo("jck");
        $admin->setPhoto("https://img.daisyui.com/images/profile/demo/2@94.webp");
        $user->setPassword($this->passwordEncoder->hashPassword($user, "yT_hjJ9"));
        $user->setStyle("prone/dropknee 100/0");
        $user->setIsVerified(true);
        $user->setCreatedAt(new \DatetimeImmutable());
        $user->setUpdatedAt(new \DatetimeImmutable());        
        $this->addReference('user_1', $user);
        
        $manager->persist($user);

        $user = new User();
        $user->setEmail("btk74@hotmail.com");
        $user->setRoles(["ROLE_USER"]);
        $user->setLastname("TheKid");
        $user->setFirstname("Billy");
        $user->setPseudo("btk");    
        $admin->setPhoto("https://img.daisyui.com/images/profile/demo/2@94.webp");    
        $user->setPassword($this->passwordEncoder->hashPassword($user, "gH7-875p"));
        $user->setStyle("prone/dropknee 60/40");
        $user->setYoutube("https://youtube.com/btkbodyboard");
        $user->setIsVerified(true);
        $user->setCreatedAt(new \DatetimeImmutable());
        $user->setUpdatedAt(new \DatetimeImmutable());        
        $this->addReference('user_2', $user);
        
        $manager->persist($user);
        
        $user = new User();
        $user->setEmail("jiji@yahoo.com");
        $user->setRoles(["ROLE_USER"]);
        $user->setLastname("Doe");
        $user->setFirstname("John");
        $user->setPseudo("jiji");
        $admin->setPhoto("https://img.daisyui.com/images/profile/demo/2@94.webp");
        $user->setPassword($this->passwordEncoder->hashPassword($user, "wXc-Rt712gj56"));
        $user->setStyle("prone/dropknee 80/20");
        $user->setIsVerified(true);
        $user->setCreatedAt(new \DatetimeImmutable());
        $user->setUpdatedAt(new \DatetimeImmutable());        
        $this->addReference('user_3', $user);
        
        $manager->persist($user);
        

        $manager->flush();
    }
}