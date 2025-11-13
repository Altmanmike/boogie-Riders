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
        $admin->setEmail("adm@aol.com")
            ->setRoles(["ROLE_ADMIN","ROLE_USER"])
            ->setLastname("ADMIN")
            ->setFirstname("admin")
            ->setPseudo("BOB")
            ->setPhoto("https://img.daisyui.com/images/profile/demo/2@94.webp")
            ->setPassword($this->passwordEncoder->hashPassword($admin, "admin"))
            ->setStyle("prone/dropknee 70/30")
            ->setFacebook("https://facebook.com/adminmoreyboogie")
            ->setIsVerified(false)
            ->setCreatedAt(new \DatetimeImmutable())
            ->setUpdatedAt(new \DatetimeImmutable());        
        $this->addReference('user_0', $admin);
        
        $manager->persist($admin);

        $user = new User();
        $user->setEmail("jck@aol.com")
            ->setRoles(["ROLE_USER"])
            ->setLastname("Sparrow")
            ->setFirstname("Jack")
            ->setPseudo("jck")
            ->setPhoto("https://img.daisyui.com/images/profile/demo/2@94.webp")
            ->setPassword($this->passwordEncoder->hashPassword($user, "yT_hjJ9"))
            ->setCountry("England")
            ->setStyle("prone/dropknee 100/0")
            ->setIsVerified(true)
            ->setCreatedAt(new \DatetimeImmutable())
            ->setUpdatedAt(new \DatetimeImmutable());       
        $this->addReference('user_1', $user);
        
        $manager->persist($user);

        $user = new User();
        $user->setEmail("btk74@hotmail.com")
            ->setRoles(["ROLE_USER"])
            ->setLastname("TheKid")
            ->setFirstname("Billy")
            ->setPseudo("btk")    
            ->setPhoto("https://img.daisyui.com/images/profile/demo/2@94.webp")    
            ->setPassword($this->passwordEncoder->hashPassword($user, "gH7-875p"))
            ->setStyle("prone/dropknee 60/40")
            ->setYoutube("https://youtube.com/btkbodyboard")
            ->setIsVerified(true)
            ->setCreatedAt(new \DatetimeImmutable())
            ->setUpdatedAt(new \DatetimeImmutable());        
        $this->addReference('user_2', $user);
        
        $manager->persist($user);
        
        $user = new User();
        $user->setEmail("jiji@yahoo.com")
            ->setRoles(["ROLE_USER"])
            ->setLastname("Doe")
            ->setFirstname("John")
            ->setPseudo("jiji")
            ->setPhoto("https://img.daisyui.com/images/profile/demo/2@94.webp")
            ->setPassword($this->passwordEncoder->hashPassword($user, "wXc-Rt712gj56"))
            ->setStyle("prone/dropknee 80/20")
            ->setIsVerified(true)
            ->setCreatedAt(new \DatetimeImmutable())
            ->setUpdatedAt(new \DatetimeImmutable());        
        $this->addReference('user_3', $user);
        
        $manager->persist($user);
        

        $manager->flush();
    }
}