<?php

namespace App\Controller\Admin;

use App\Entity\User;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Config\Action;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Config\Actions;
use EasyCorp\Bundle\EasyAdminBundle\Field\DateField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use EasyCorp\Bundle\EasyAdminBundle\Field\ArrayField;
use EasyCorp\Bundle\EasyAdminBundle\Field\EmailField;
use EasyCorp\Bundle\EasyAdminBundle\Field\BooleanField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextEditorField;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;

class UserCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return User::class;
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
            EmailField::new('email'),
            ArrayField::new('roles'),
            TextField::new('firstname'),
            TextField::new('lastname'),
            TextField::new('password'),
            TextField::new('username'),
            TextEditorField::new('about'),
            TextField::new('photo'),
            TextField::new('cover'),    
            ArrayField::new('boards'),
            ArrayField::new('fins'),
            ArrayField::new('spots'),
            ArrayField::new('tricks'),
            TextField::new('style'),
            TextField::new('facebook'),
            TextField::new('instagram'),
            TextField::new('youtube'),
            TextField::new('country'),
            TextField::new('street_address'),
            TextField::new('city'),
            TextField::new('region'),
            TextField::new('postalCode'),
            DateField::new('created_at'),
            DateField::new('updated_at'),
        ];
    }    
}