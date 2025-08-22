<?php

namespace App\Controller\Admin;

use App\Entity\Board;
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

class BoardCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Board::class;
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
            TextField::new('brand'),
            TextField::new('model'),
            TextField::new('size'),
            TextEditorField::new('description'),
            ArrayField::new('colors'),            
            TextField::new('core'),
            TextField::new('tail'),
            TextField::new('stringer'),
            TextField::new('mesh'),
            TextField::new('slick'),
            IntegerField::new('price'), 
            AssociationField::new('user'),
            CollectionField::new('visibility'),
            CollectionField::new('visible_to_groups'),
            DateField::new('created_at'),
            DateField::new('updated_at'),
        ];
    }    
}