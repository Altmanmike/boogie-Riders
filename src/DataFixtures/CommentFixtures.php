<?php

namespace App\DataFixtures;

use App\Entity\Club;
use App\Entity\Spot;
use App\Entity\User;
use App\Entity\Event;
use App\Entity\Article;
use App\Entity\Comment;
use App\Entity\Session;
use Doctrine\Persistence\ObjectManager;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;

class CommentFixtures extends Fixture implements DependentFixtureInterface
{    
    public function load(ObjectManager $manager): void
    {
        // ARTICLE   
        $comment = new Comment(); 
        $comment->setContent("Enim incididunt officia consectetur esse proident.")
            ->setCreatedAt(new \DatetimeImmutable())
            ->setUpdatedAt(new \DatetimeImmutable())
            ->setUser($this->getReference('user_0', User::class))
            ->setArticle($this->getReference('article_0', Article::class));               
        $this->addReference('comment_0', $comment);                  
        $manager->persist($comment);       
        
        $comment = new Comment(); 
        $comment->setContent("Est ea nulla excepteur Lorem tempor veniam exercitation. Labore esse fugiat non cillum. Qui dolore consectetur consectetur mollit ipsum aliquip fugiat non anim qui.")
            ->setCreatedAt(new \DatetimeImmutable())
            ->setUpdatedAt(new \DatetimeImmutable())
            ->setUser($this->getReference('user_1', User::class))
            ->setArticle($this->getReference('article_0', Article::class));         
        $this->addReference('comment_1', $comment);                  
        $manager->persist($comment);  
        
        // SESSION
        $comment = new Comment(); 
        $comment->setContent("Nisi magna do occaecat aliqua eiusmod ullamco non duis nulla culpa magna sint. Officia labore commodo amet labore sit. Incididunt excepteur commodo quis ullamco velit esse quis occaecat adipisicing tempor esse fugiat voluptate enim.")
            ->setCreatedAt(new \DatetimeImmutable())
            ->setUpdatedAt(new \DatetimeImmutable())
            ->setUser($this->getReference('user_0', User::class))
            ->setSession($this->getReference('session_0', Session::class));           
        $this->addReference('comment_2', $comment);                  
        $manager->persist($comment);
        
        // SPOT
        $comment = new Comment(); 
        $comment->setContent("Cillum incididunt ullamco occaecat irure quis aliquip veniam sunt elit.")
            ->setCreatedAt(new \DatetimeImmutable())
            ->setUpdatedAt(new \DatetimeImmutable())
            ->setUser($this->getReference('user_2', User::class))
            ->setSpot($this->getReference('spot_1', Spot::class));           
        $this->addReference('comment_3', $comment);                  
        $manager->persist($comment);
        
        $comment = new Comment(); 
        $comment->setContent("Anim adipisicing deserunt dolor Lorem proident officia nostrud sint.")
            ->setCreatedAt(new \DatetimeImmutable())
            ->setUpdatedAt(new \DatetimeImmutable())
            ->setUser($this->getReference('user_1', User::class))
            ->setSpot($this->getReference('spot_1', Spot::class));           
        $this->addReference('comment_4', $comment);                  
        $manager->persist($comment);

        $comment = new Comment(); 
        $comment->setContent("Laboris ea ea aliqua pariatur consectetur do nostrud sit officia ipsum.")
            ->setCreatedAt(new \DatetimeImmutable())
            ->setUpdatedAt(new \DatetimeImmutable())
            ->setUser($this->getReference('user_3', User::class))
            ->setSpot($this->getReference('spot_1', Spot::class));           
        $this->addReference('comment_5', $comment);                  
        $manager->persist($comment);

        $comment = new Comment(); 
        $comment->setContent("Velit eiusmod ad non ea cupidatat. Enim ullamco cupidatat excepteur deserunt laboris consectetur dolor dolore dolore. Fugiat in reprehenderit nulla voluptate do nulla culpa nisi cillum. Id amet Lorem ipsum anim nostrud ex sit veniam sint. Do deserunt esse voluptate laborum sint non eu Lorem occaecat aute elit amet eiusmod. Ea ea veniam ex officia nisi laborum nisi sit tempor eiusmod enim ullamco do.")
            ->setCreatedAt(new \DatetimeImmutable())
            ->setUpdatedAt(new \DatetimeImmutable())
            ->setUser($this->getReference('user_2', User::class))
            ->setSpot($this->getReference('spot_2', Spot::class));           
        $this->addReference('comment_6', $comment);                  
        $manager->persist($comment);

        $comment = new Comment(); 
        $comment->setContent("Nisi anim tempor ea eu irure voluptate voluptate excepteur.")
            ->setCreatedAt(new \DatetimeImmutable())
            ->setUpdatedAt(new \DatetimeImmutable())
            ->setUser($this->getReference('user_0', User::class))
            ->setSpot($this->getReference('spot_3', Spot::class));           
        $this->addReference('comment_7', $comment);                  
        $manager->persist($comment);

        // EVENT
        $comment = new Comment(); 
        $comment->setContent("In qui aliqua nisi fugiat ad Lorem. Sunt reprehenderit nulla cillum amet aliqua. Nulla sunt commodo ut amet consequat aliquip eu ea ex. Sit nostrud ullamco sit id veniam qui laborum nisi. Ex proident reprehenderit dolor anim eiusmod labore. Esse eiusmod velit Lorem proident dolore. Quis consectetur in ad consectetur adipisicing esse culpa est consectetur enim proident ex pariatur.")
            ->setCreatedAt(new \DatetimeImmutable())
            ->setUpdatedAt(new \DatetimeImmutable())
            ->setUser($this->getReference('user_0', User::class))
            ->setEvent($this->getReference('event_0', Event::class));           
        $this->addReference('comment_8', $comment);                  
        $manager->persist($comment);

        $comment = new Comment(); 
        $comment->setContent("Aliqua aliqua deserunt voluptate eu veniam est minim non sint voluptate duis occaecat do aliqua.")
            ->setCreatedAt(new \DatetimeImmutable())
            ->setUpdatedAt(new \DatetimeImmutable())
            ->setUser($this->getReference('user_1', User::class))
            ->setEvent($this->getReference('event_1', Event::class));           
        $this->addReference('comment_9', $comment);                  
        $manager->persist($comment);

        $comment = new Comment(); 
        $comment->setContent("Ullamco officia qui exercitation dolor enim nisi enim consectetur labore veniam est enim ad.")
            ->setCreatedAt(new \DatetimeImmutable())
            ->setUpdatedAt(new \DatetimeImmutable())
            ->setUser($this->getReference('user_2', User::class))
            ->setEvent($this->getReference('event_2', Event::class));           
        $this->addReference('comment_10', $comment);                  
        $manager->persist($comment);

        $comment = new Comment(); 
        $comment->setContent("Cupidatat enim qui laboris incididunt. Velit nostrud consectetur minim reprehenderit ipsum amet amet pariatur dolore deserunt ad. Deserunt id aliqua ipsum magna aliqua aliqua quis nostrud. Lorem proident commodo nostrud ut.")
            ->setCreatedAt(new \DatetimeImmutable())
            ->setUpdatedAt(new \DatetimeImmutable())
            ->setUser($this->getReference('user_3', User::class))
            ->setEvent($this->getReference('event_3', Event::class));           
        $this->addReference('comment_11', $comment);                  
        $manager->persist($comment);

        $comment = new Comment(); 
        $comment->setContent("Tempor voluptate mollit cupidatat esse pariatur cupidatat.")
            ->setCreatedAt(new \DatetimeImmutable())
            ->setUpdatedAt(new \DatetimeImmutable())
            ->setUser($this->getReference('user_2', User::class))
            ->setEvent($this->getReference('event_4', Event::class));           
        $this->addReference('comment_12', $comment);                  
        $manager->persist($comment);
        
        // CLUB
        $comment = new Comment(); 
        $comment->setContent("Minim irure excepteur ut laboris consequat mollit incididunt laboris aliquip voluptate officia duis. Reprehenderit qui aliquip amet enim id. Exercitation minim ipsum Lorem nulla deserunt ea fugiat. Sit non ullamco nisi reprehenderit labore. Ea aliquip commodo eu non ad. In voluptate ex aute est nostrud quis aliquip ut deserunt aliqua amet do consequat labore. Velit esse aute id do nisi ad aute et.")
            ->setCreatedAt(new \DatetimeImmutable())
            ->setUpdatedAt(new \DatetimeImmutable())
            ->setUser($this->getReference('user_0', User::class))
            ->setClub($this->getReference('club_0', Club::class));           
        $this->addReference('comment_13', $comment);                  
        $manager->persist($comment);

        $manager->flush();
    
    }
    
    public function getDependencies(): array
    {
        return [
            UserFixtures::class,
            ArticleFixtures::class,
            SessionFixtures::class,
            SpotFixtures::class,
            EventFixtures::class,
            ClubFixtures::class,
        ]; 
    }
}