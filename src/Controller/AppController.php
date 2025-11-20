<?php

namespace App\Controller;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

final class AppController extends AbstractController
{          
    #[Route('/', name: 'app')]
    public function index(): Response
    {
        $apiUrl = $this->getParameter('api_base_url');
        $jwtUrl = $this->getParameter('jwt_base_url');
        $userRolesId = null;
        if($this->getUser()) {
            $userRolesId = [
                $this->getUser()->getId(),
                $this->getUser()->getRoles()
            ];
        }        
        
        return $this->render('index.html.twig', [
            'react_component' => 'Home',
            'userRolesId' => $userRolesId,
            'api_url' => $apiUrl,
            'jwt_url' => $jwtUrl,
        ]);
    } 

    #[Route('/user', name: 'user')]
    public function user(): Response
    {
        $apiUrl = $this->getParameter('api_base_url');
        $jwtUrl = $this->getParameter('jwt_base_url');
        $userRolesId = null;
        if($this->getUser()) {
            $userRolesId = [
                $this->getUser()->getId(),
                $this->getUser()->getRoles()
            ];
        }
        
        return $this->render('index.html.twig', [
            'react_component' => 'User',
            'userRolesId' => $userRolesId,
            'api_url' => $apiUrl,
            'jwt_url' => $jwtUrl,
        ]);
    }
      
    private const COMPONENTS_LIST = [
        'home', 'about', 'links', 'profile', 'user', 'settings', 'board', 'boardNew', 'fin', 
        'leash', 'wetsuit', 'accessory', 'article', 'session', 'event', 'spot', 'media', 'club', 'friends', 'groups', 'articlesFeed', 'clubsFeed', 'groupsFeed', 'eventsFeed', 'spotsFeed', 'articleNew', 'clubNew', 'eventNew', 'groupNew', 'mediaNew', 'sessionNew', 'spotNew', 'accessoryNew', 'boardNew', 'finNew', 'leashNew', 'wetsuitNew'
    ];
    
    #[Route('/{name}', name: 'app_dynamic_page', requirements: ['name' => 'home|about|links|profile|user|settings|board|boardNew|fin|leash|wetsuit|accessory|article|session|event|spot|media|club|friends|groups|articlesFeed|clubsFeed|groupsFeed|eventsFeed|spotsFeed|articleNew|clubNew|eventNew|groupNew|mediaNew|sessionNew|spotNew|accessoryNew|boardNew|finNew|leashNew|wetsuitNew'])]
    public function dynamicPage(string $name): Response
    {
        $apiUrl = $this->getParameter('api_base_url');
        $jwtUrl = $this->getParameter('jwt_base_url');
        $userRolesId = null;
        if($this->getUser()) {
            $userRolesId = [
                $this->getUser()->getId(),
                $this->getUser()->getRoles()
            ];
        }

        if (!in_array($name, self::COMPONENTS_LIST)) {
            
            return $this->render('index.html.twig', [
                'react_component' => 'error'                
            ]);
        }
        
        return $this->render('index.html.twig', [
            'react_component' => ucFirst($name),
            'userRolesId' => $userRolesId,
            'api_url' => $apiUrl,
            'jwt_url' => $jwtUrl,
        ]);
    }
}