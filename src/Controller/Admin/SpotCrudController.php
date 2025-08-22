<?php

namespace App\Controller\Admin;

use App\Entity\Spot;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Field\Field;
use EasyCorp\Bundle\EasyAdminBundle\Config\Action;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Config\Actions;
use EasyCorp\Bundle\EasyAdminBundle\Field\DateField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use EasyCorp\Bundle\EasyAdminBundle\Field\ArrayField;
use EasyCorp\Bundle\EasyAdminBundle\Field\EmailField;
use EasyCorp\Bundle\EasyAdminBundle\Field\NumberField;
use EasyCorp\Bundle\EasyAdminBundle\Field\BooleanField;
use EasyCorp\Bundle\EasyAdminBundle\Field\IntegerField;
use EasyCorp\Bundle\EasyAdminBundle\Field\CollectionField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextEditorField;
use EasyCorp\Bundle\EasyAdminBundle\Field\AssociationField;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;

class SpotCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Spot::class;
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
            TextField::new('name'),            
            NumberField::new('lat'),
            NumberField::new('lon'),
            TextField::new('location'),
            TextEditorField::new('description'),
            TextField::new('wave_type'),
            TextField::new('best_conditions'),
            IntegerField::new('difficulty_level'),
            AssociationField::new('user'),
            CollectionField::new('visibility'),
            CollectionField::new('visible_to_groups'), 
            CollectionField::new('users'),
            CollectionField::new('sessions'),
            CollectionField::new('comments'),
            CollectionField::new('likes'),
            CollectionField::new('medias'),
            DateField::new('created_at'),
            DateField::new('updated_at'),
        ];
    }    
}