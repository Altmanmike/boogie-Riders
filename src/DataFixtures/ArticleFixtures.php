<?php

namespace App\DataFixtures;

use App\Entity\User;
use App\Entity\Article;
use Doctrine\Persistence\ObjectManager;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;

class ArticleFixtures extends Fixture implements DependentFixtureInterface
{    
    public function load(ObjectManager $manager): void
    {     
        $article = new Article(); 
        $article->setTitle("Id incididunt esse aute dolore nostrud culpa ut culpa ea eiusmod minim non mollit.")
            ->setCover("https://www.sports.gouv.fr/sites/default/files/2022-08/bodyboard-ffsurf-wecreative-jpg-490.jpg")                      
            ->setContent("Aliquip veniam ad nisi quis consequat consectetur do quis occaecat pariatur. Cupidatat non proident aute ea. Mollit anim reprehenderit officia veniam ea nostrud.

            Culpa deserunt adipisicing anim elit laborum cillum duis sunt voluptate adipisicing do aliqua eiusmod. Sunt est ullamco culpa exercitation ex tempor officia nulla minim cillum cillum minim. Proident voluptate sunt anim eiusmod consequat consectetur laboris aute ea ipsum laboris. Incididunt in consequat non esse in cillum enim exercitation.

            Fugiat reprehenderit nulla et dolore enim aliquip occaecat. Dolore Lorem veniam cillum do enim officia duis. Eu nisi enim in minim deserunt veniam magna voluptate voluptate veniam incididunt. Eiusmod et sit tempor anim ea consectetur dolore est veniam adipisicing veniam aute. Consequat consectetur proident officia sint officia id sint pariatur.")
            ->setDescription("Fugiat pariatur enim mollit reprehenderit elit eiusmod est qui sit. Id magna consequat officia laborum. Aliqua elit ipsum anim esse mollit consectetur laborum duis velit pariatur consectetur tempor. Reprehenderit proident deserunt sit veniam labore fugiat fugiat. Non magna commodo sit labore nisi veniam ut. Quis Lorem do laboris ipsum ex voluptate non.")
            ->setCreatedAt(new \DatetimeImmutable())
            ->setUpdatedAt(new \DatetimeImmutable())
            ->setUser($this->getReference('user_0', User::class));
        $this->addReference('article_0', $article);          
        $manager->persist($article);
        
        $article = new Article(); 
        $article->setTitle("Enim anim aliquip qui sint laboris labore eiusmod.")
            ->setCover("https://www.sports.gouv.fr/sites/default/files/2022-08/bodyboard-ffsurf-wecreative-jpg-490.jpg")                      
            ->setContent("Aute qui sunt proident labore ut velit enim eu exercitation dolore. Anim officia proident ea in enim pariatur laborum in qui est dolor proident. Nostrud ad velit nulla quis nisi. Incididunt esse aliquip officia magna mollit sint labore eiusmod. Laborum nostrud aute Lorem fugiat deserunt pariatur sint non proident velit nulla fugiat cillum irure.

            Fugiat dolor excepteur qui reprehenderit. Quis proident laborum ut occaecat nostrud tempor pariatur labore sit. Laboris pariatur fugiat nisi irure commodo nisi dolore. Quis magna fugiat voluptate velit nisi veniam. Ex voluptate fugiat labore aliquip exercitation sint tempor esse ullamco laboris. Mollit ullamco velit veniam incididunt cupidatat sunt aute dolor cupidatat.

            Proident commodo aliqua culpa consectetur nulla in duis tempor. Duis deserunt id exercitation magna sunt sunt. Sit et est officia tempor id nulla aliquip ea nulla. Amet cupidatat aliquip enim fugiat nisi dolore. Sint laborum duis cupidatat dolor. Irure labore ut nostrud nostrud voluptate enim qui laboris aliqua culpa.

            In ea sunt consequat est nisi ea sunt laborum eiusmod ullamco eu do reprehenderit. Voluptate officia dolor est mollit voluptate anim aute ea sint esse eiusmod. Aute et nisi exercitation tempor consectetur aute enim nostrud occaecat adipisicing anim. In mollit duis laborum nulla fugiat nostrud aute anim ex et nisi. Aliqua dolore sit ea consequat labore nulla ullamco sunt aliquip. Exercitation duis elit deserunt et reprehenderit esse eiusmod excepteur. Officia duis amet enim officia quis dolore minim consectetur amet.

            Nulla ullamco officia elit dolor aute aute culpa elit culpa eu minim sint minim cillum. Fugiat officia nisi exercitation aliquip excepteur Lorem minim. Sunt dolor consequat occaecat enim.")
            ->setDescription("Voluptate culpa dolor consectetur amet voluptate eu. Dolor eiusmod adipisicing pariatur velit veniam commodo consectetur dolore eu excepteur proident aliqua dolor eiusmod. Exercitation tempor officia eu Lorem non nulla in est reprehenderit aliqua velit.")
            ->setCreatedAt(new \DatetimeImmutable())
            ->setUpdatedAt(new \DatetimeImmutable())
            ->setUser($this->getReference('user_1', User::class));
        $this->addReference('article_1', $article);
        $manager->persist($article); 
        
        $article = new Article(); 
        $article->setTitle("Proident commodo incididunt dolore deserunt eu sunt proident mollit velit enim enim incididunt et.")
            ->setCover("https://www.sports.gouv.fr/sites/default/files/2022-08/bodyboard-ffsurf-wecreative-jpg-490.jpg")                      
            ->setContent("Cillum cupidatat tempor quis magna qui tempor officia labore eiusmod eiusmod anim voluptate pariatur aliqua. Laboris dolore mollit ipsum voluptate fugiat eiusmod amet laboris elit tempor id labore. Voluptate commodo id nulla veniam. Dolore incididunt eu aute sit laborum est. Duis sit aliqua esse ullamco nostrud magna non occaecat sit ipsum.

            Ut dolore officia sint veniam in. Esse consequat duis consectetur incididunt laborum deserunt magna proident culpa voluptate excepteur. Id nisi occaecat consequat nisi esse cupidatat irure dolore minim dolor aliqua sunt. Id nostrud eiusmod incididunt qui dolor ea ad. Ea magna eu irure occaecat esse irure cillum exercitation aliqua est quis. Proident ad exercitation veniam laborum eiusmod ut eiusmod.")
            ->setDescription("Eu duis mollit voluptate aute qui sint ullamco nisi. Velit dolore cillum est ut amet anim id ad ad. Adipisicing sunt est ad mollit pariatur nulla labore officia. Enim sit aliqua Lorem deserunt mollit deserunt culpa ut magna aliqua anim mollit. Excepteur velit dolor sit nulla sit duis excepteur non ullamco consectetur ad adipisicing in dolor. Quis cillum ad pariatur eu laborum eu. Qui adipisicing aliqua pariatur exercitation.")
            ->setCreatedAt(new \DatetimeImmutable())
            ->setUpdatedAt(new \DatetimeImmutable())
            ->setUser($this->getReference('user_2', User::class)); 
        $this->addReference('article_2', $article);          
        $manager->persist($article);
        
        $manager->flush(); 
    
    }
    
    public function getDependencies(): array
    {
        return [
            UserFixtures::class
        ]; 
    }
}