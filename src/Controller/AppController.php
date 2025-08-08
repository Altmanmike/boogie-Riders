<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

final class AppController extends AbstractController
{       
    #[Route('/', name: 'home')]
    public function index(): Response
    {
        $userRolesId = null;
        if($this->getUser()) {            
            $userRolesId = [
                $this->getUser()->getId(),
                $this->getUser()->getRoles()
            ];            
        }
            
        return $this->render('index.html.twig', [
            'react_component' => 'Home',
            'userRolesId' => $userRolesId
        ]);
    }

    #[Route('/about', name: 'about')]
    public function about(): Response
    {
        $userRolesId = null;
        if($this->getUser()) {
            $userRolesId = [
                $this->getUser()->getId(),
                $this->getUser()->getRoles()
            ];
        }
        
        return $this->render('index.html.twig', [
            'react_component' => 'About',
            'userRolesId' => $userRolesId 
        ]);
    }

    #[Route('/links', name: 'links')]
    public function links(): Response
    {
        $userRolesId = null;
        if($this->getUser()) {
            $userRolesId = [
                $this->getUser()->getId(),
                $this->getUser()->getRoles()
            ];
        }
        
        return $this->render('index.html.twig', [
            'react_component' => 'Links',
            'userRolesId' => $userRolesId
        ]);
    } 
    
    #[Route('/profile', name: 'profile')]
    public function profile(): Response
    {
        $userRolesId = null;
        if($this->getUser()) {
            $userRolesId = [
                $this->getUser()->getId(),
                $this->getUser()->getRoles()
            ];
        }
        
        return $this->render('index.html.twig', [
            'react_component' => 'Profile',
            'userRolesId' => $userRolesId
        ]);
    }

    #[Route('/user', name: 'user')]
    public function user(): Response
    {
        $userRolesId = null;
        if($this->getUser()) {
            $userRolesId = [
                $this->getUser()->getId(),
                $this->getUser()->getRoles()
            ];                   
        }
        
        return $this->render('index.html.twig', [
            'react_component' => 'User',
            'userRolesId' => $userRolesId
        ]);
    } 
    
    #[Route('/settings', name: 'settings')]
    public function settings(): Response
    {
        $userRolesId = null;
        if($this->getUser()) {
            $userRolesId = [
                $this->getUser()->getId(),
                $this->getUser()->getRoles()
            ];
        }
        
        return $this->render('index.html.twig', [
            'react_component' => 'Settings',
            'userRolesId' => $userRolesId
        ]);
    }
    
    #[Route('/spot', name: 'spot')]
    public function spot(): Response
    {
        $userRolesId = null;
        if($this->getUser()) {
            $userRolesId = [
                $this->getUser()->getId(),
                $this->getUser()->getRoles()
            ];
        }
        
        return $this->render('index.html.twig', [
            'react_component' => 'Spot',
            'userRolesId' => $userRolesId
        ]);
    }
}