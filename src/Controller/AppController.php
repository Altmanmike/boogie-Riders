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
        $isAdmin = null;
        if($this->getUser()) {
            $isAdmin = $this->getUser()->getRoles();            
        }
            
        return $this->render('index.html.twig', [
            'react_component' => 'Home',
            'isAdmin' => $isAdmin
        ]);
    }

    #[Route('/about', name: 'about')]
    public function about(): Response
    {
        $isAdmin = null;
        if($this->getUser()) {
            $isAdmin = $this->getUser()->getRoles();
        }
        
        return $this->render('index.html.twig', [
            'react_component' => 'About',
            'isAdmin' => $isAdmin 
        ]);
    }

    #[Route('/links', name: 'links')]
    public function links(): Response
    {
        $isAdmin = null;
        if($this->getUser()) {
            $isAdmin = $this->getUser()->getRoles();
        }
        
        return $this->render('index.html.twig', [
            'react_component' => 'Links',
            'isAdmin' => $isAdmin
        ]);
    } 
    
    #[Route('/profile', name: 'profile')]
    public function profile(): Response
    {
        $isAdmin = null;
        if($this->getUser()) {
            $isAdmin = $this->getUser()->getRoles();
        }
        
        return $this->render('index.html.twig', [
            'react_component' => 'Profile',
            'isAdmin' => $isAdmin
        ]);
    }

    #[Route('/user', name: 'user')]
    public function user(): Response
    {
        $isAdmin = null;
        if($this->getUser()) {            
            $isAdmin = $this->getUser()->getRoles();                   
        }
        
        return $this->render('index.html.twig', [
            'react_component' => 'User',
            'isAdmin' => $isAdmin
        ]);
    }
    
    #[Route('/register', name: 'register')]
    public function register(): Response
    {
        $isAdmin = null;
        if($this->getUser()) {
            $isAdmin = $this->getUser()->getRoles();
        }
        
        return $this->render('index.html.twig', [
            'react_component' => 'Register',
            'isAdmin' => $isAdmin
        ]);
    }
    
    #[Route('/settings', name: 'settings')]
    public function settings(): Response
    {
        $isAdmin = null;
        if($this->getUser()) {
            $isAdmin = $this->getUser()->getRoles();
        }
        
        return $this->render('index.html.twig', [
            'react_component' => 'Settings',
            'isAdmin' => $isAdmin
        ]);
    }
    
    #[Route('/spot', name: 'spot')]
    public function spot(): Response
    {
        $isAdmin = null;
        if($this->getUser()) {
            $isAdmin = $this->getUser()->getRoles();
        }
        
        return $this->render('index.html.twig', [
            'react_component' => 'Spot',
            'isAdmin' => $isAdmin
        ]);
    }
}