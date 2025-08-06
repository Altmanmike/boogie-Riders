<?php

namespace App\DataFixtures;

use App\Entity\User;
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
        
        $comment = new Comment(); 
        $comment->setContent("Nisi magna do occaecat aliqua eiusmod ullamco non duis nulla culpa magna sint. Officia labore commodo amet labore sit. Incididunt excepteur commodo quis ullamco velit esse quis occaecat adipisicing tempor esse fugiat voluptate enim.")
            ->setCreatedAt(new \DatetimeImmutable())
            ->setUpdatedAt(new \DatetimeImmutable())
            ->setUser($this->getReference('user_0', User::class))
            ->setSession($this->getReference('session_0', Session::class));           
        $this->addReference('comment_2', $comment);                  
        $manager->persist($comment); 
        
        $manager->flush(); 
    
    }
    
    public function getDependencies(): array
    {
        return [
            UserFixtures::class,
            ArticleFixtures::class,
            SessionFixtures::class
        ]; 
    }
}