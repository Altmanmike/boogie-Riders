<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Attribute\Route;
use Lexik\Bundle\JWTAuthenticationBundle\Services\JWTTokenManagerInterface;
use Symfony\Component\Security\Http\Attribute\IsGranted;

final class TokenController extends AbstractController
{
    #[Route('/token/get', name: 'api_token_get' , methods: ['POST'])]
    #[IsGranted('ROLE_USER')]
    public function getToken(JWTTokenManagerInterface $JWTManager): JsonResponse
    {
        /** @var \App\Entity\User $user */
        $user = $this->getUser();

        if (!$user) {            
            return new JsonResponse(['message' => 'Not authenticated'], 401);
        }
        
        $token = $JWTManager->create($user);
        
        return new JsonResponse([
            'token' => $token
        ]);
    }
}