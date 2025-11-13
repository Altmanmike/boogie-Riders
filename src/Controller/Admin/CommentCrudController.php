<?php

namespace App\Controller\Admin;

use App\Entity\Comment;
use Doctrine\ORM\EntityManagerInterface;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Field\Field;
use EasyCorp\Bundle\EasyAdminBundle\Config\Action;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Config\Actions;
use EasyCorp\Bundle\EasyAdminBundle\Field\DateField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use EasyCorp\Bundle\EasyAdminBundle\Field\ArrayField;
use EasyCorp\Bundle\EasyAdminBundle\Field\EmailField;
use EasyCorp\Bundle\EasyAdminBundle\Field\BooleanField;
use EasyCorp\Bundle\EasyAdminBundle\Field\IntegerField;
use EasyCorp\Bundle\EasyAdminBundle\Field\CollectionField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextEditorField;
use EasyCorp\Bundle\EasyAdminBundle\Field\AssociationField;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;

class CommentCrudController extends AbstractCrudController
{
    private function validateSingleAssociation(Comment $comment): void
    {
        $associations = [
            $comment->getArticle(),
            $comment->getSession(),
            $comment->getSpot(),
            $comment->getEvent(),
            $comment->getClub(),
        ];        
        
        $count = array_filter($associations, fn($assoc) => $assoc !== null);

        if (count($count) > 1) {            
            throw new \Exception('Un commentaire ne peut être lié qu\'à un seul Article, Session, Spot, Event ou Club.');
        }
    }

    public function persistEntity(EntityManagerInterface $entityManager, $entityInstance): void
    {
        if ($entityInstance instanceof Comment) {
            $this->validateSingleAssociation($entityInstance);
        }

        parent::persistEntity($entityManager, $entityInstance);
    }

    public function updateEntity(EntityManagerInterface $entityManager, $entityInstance): void
    {
        if ($entityInstance instanceof Comment) {
            $this->validateSingleAssociation($entityInstance);
        }

        parent::updateEntity($entityManager, $entityInstance);
    }
    
    public static function getEntityFqcn(): string
    {
        return Comment::class;
    }

    public function configureActions(Actions $actions): Actions
    {
        $actions->add(Crud::PAGE_INDEX, Action::DETAIL)
            ->setPermission(Action::NEW, 'ROLE_ADMIN')
            ->setPermission(Action::EDIT, 'ROLE_ADMIN')
            ->setPermission(Action::DELETE, 'ROLE_ADMIN');

        return $actions;
    }
        
    public function configureFields(string $pageName): iterable
    {
        return [
            IdField::new('id')->onlyOnIndex()->setFormTypeOption('attr', ['readonly' => true]),
            TextEditorField::new('content'),
            AssociationField::new('user'),
            AssociationField::new('article'),
            AssociationField::new('session'),
            AssociationField::new('spot'),
            AssociationField::new('event'),
            AssociationField::new('club'),
            DateField::new('created_at'),
            DateField::new('updated_at'),
        ];
    }    
}