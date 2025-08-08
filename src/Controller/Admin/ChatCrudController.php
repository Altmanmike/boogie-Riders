<?php

namespace App\Controller\Admin;

use App\Entity\Chat;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Config\Action;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Config\Actions;
use EasyCorp\Bundle\EasyAdminBundle\Field\DateField;
use EasyCorp\Bundle\EasyAdminBundle\Field\CollectionField;

use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;

class ChatCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Chat::class;
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
            IdField::new('id'),
            CollectionField::new('users'),
            CollectionField::new('messages'),
            DateField::new('created_at'),
            DateField::new('updated_at'),
        ];
    }    
}