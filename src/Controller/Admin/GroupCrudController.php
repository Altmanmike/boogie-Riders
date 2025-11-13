<?php

namespace App\Controller\Admin;

use App\Entity\Group;
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

class GroupCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Group::class;
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
            TextField::new('name'),
            TextEditorField::new('description'),
            AssociationField::new('user'),            
            CollectionField::new('members'),                           
            AssociationField::new('members')
                ->onlyOnForms()               
                ->setFormTypeOption('multiple', true)
                ->setFormTypeOption('expanded', true),
            BooleanField::new('is_joinable'),
            DateField::new('created_at'),
            DateField::new('updated_at'),
            AssociationField::new('accessories')->onlyOnIndex()->setFormTypeOption('disabled', true),           
            AssociationField::new('articles')->onlyOnIndex()->setFormTypeOption('disabled', true),
            AssociationField::new('boards')->onlyOnIndex()->setFormTypeOption('disabled', true),
            AssociationField::new('fins')->onlyOnIndex()->setFormTypeOption('disabled', true),
            AssociationField::new('leashes')->onlyOnIndex()->setFormTypeOption('disabled', true),
            AssociationField::new('medias')->onlyOnIndex()->setFormTypeOption('disabled', true),
            AssociationField::new('sessions')->onlyOnIndex()->setFormTypeOption('disabled', true),
            AssociationField::new('spots')->onlyOnIndex()->setFormTypeOption('disabled', true),
            AssociationField::new('wetsuits')->onlyOnIndex()->setFormTypeOption('disabled', true),
            AssociationField::new('clubs')->onlyOnIndex()->setFormTypeOption('disabled', true),            
            AssociationField::new('events')->onlyOnIndex()->setFormTypeOption('disabled', true),
        ];
    }    
}