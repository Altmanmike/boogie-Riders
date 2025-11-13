<?php

namespace App\Controller\Admin;

use App\Entity\User;
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
use EasyCorp\Bundle\EasyAdminBundle\Field\CollectionField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextEditorField;
use EasyCorp\Bundle\EasyAdminBundle\Field\AssociationField;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

class UserCrudController extends AbstractCrudController
{
    private UserPasswordHasherInterface $passwordEncoder;

    public function __construct(UserPasswordHasherInterface $passwordEncoder)
    {
        $this->passwordEncoder = $passwordEncoder;
    }
    
    private function hashUserPassword(User $user): void
    {        
        $plainPassword = $user->getPassword();
        
        if (!empty($plainPassword)) { 
            $hashedPassword = $this->passwordEncoder->hashPassword(
                $user,
                $plainPassword
            );
            $user->setPassword($hashedPassword);
        }
    }

    public function persistEntity(EntityManagerInterface $entityManager, $entityInstance): void
    {        
        if ($entityInstance instanceof User) { 
            $this->hashUserPassword($entityInstance);
        }

        parent::persistEntity($entityManager, $entityInstance);
    }

    public function updateEntity(EntityManagerInterface $entityManager, $entityInstance): void
    {
        if ($entityInstance instanceof User) {            
            $this->hashUserPassword($entityInstance);
        }
        
        parent::updateEntity($entityManager, $entityInstance);
    }

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
            IdField::new('id')->onlyOnIndex()->setFormTypeOption('attr', ['readonly' => true]),
            EmailField::new('email'),
            ArrayField::new('roles'),
            TextField::new('firstname'),
            TextField::new('lastname'),
            TextField::new('password')->setRequired(false)->onlyOnForms(),
            TextField::new('pseudo'),
            TextEditorField::new('about'),
            TextField::new('photo'),
            TextField::new('cover'),    
            AssociationField::new('boards')->onlyOnIndex()->setFormTypeOption('disabled', true),
            AssociationField::new('fins')->onlyOnIndex()->setFormTypeOption('disabled', true),
            AssociationField::new('spots')->onlyOnIndex()->setFormTypeOption('disabled', true),
            AssociationField::new('club'),
            ArrayField::new('tricks'),
            TextField::new('style'),
            TextField::new('facebook'),
            TextField::new('instagram'),
            TextField::new('youtube'),
            TextField::new('country'),
            TextField::new('street_address'),
            TextField::new('city'),
            TextField::new('region'),
            TextField::new('postal_code'),
            DateField::new('created_at'),
            DateField::new('updated_at'),
        ];
    }    
}