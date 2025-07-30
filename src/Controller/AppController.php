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
        return $this->render('index.html.twig', [
            'react_component' => 'Home',
        ]);
    }

    #[Route('/about', name: 'about')]
    public function about(): Response
    {
        return $this->render('index.html.twig', [
            'react_component' => 'About', 
        ]);
    }

    #[Route('/links', name: 'links')]
    public function links(): Response
    {
        return $this->render('index.html.twig', [
            'react_component' => 'Links',
        ]);
    }
    
    #[Route('/login', name: 'login')]
    public function login(): Response
    {
        return $this->render('index.html.twig', [
            'react_component' => 'Login',
        ]);
    }
    
    #[Route('/profile', name: 'profile')]
    public function profile(): Response
    {
        return $this->render('index.html.twig', [
            'react_component' => 'Profile',
        ]);
    }
    
    #[Route('/register', name: 'register')]
    public function register(): Response
    {
        return $this->render('index.html.twig', [
            'react_component' => 'Register',
        ]);
    }
    
    #[Route('/settings', name: 'settings')]
    public function settings(): Response
    {
        return $this->render('index.html.twig', [
            'react_component' => 'Settings',
        ]);
    }
    
    #[Route('/spot', name: 'spot')]
    public function spot(): Response
    {
        return $this->render('index.html.twig', [
            'react_component' => 'Spot',
        ]);
    }
}