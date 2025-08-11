<?php

namespace App\Controller\Admin;

use App\Entity\Fin;
use App\Entity\Chat;
use App\Entity\Spot;
use App\Entity\User;
use App\Entity\Board;
use App\Entity\Event;
use App\Entity\Leash;
use App\Entity\Media;
use App\Entity\Article;
use App\Entity\Comment;
use App\Entity\Message;
use App\Entity\Session;
use App\Entity\Wetsuit;
use App\Entity\Accessory;
use App\Controller\Admin\UserCrudController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use EasyCorp\Bundle\EasyAdminBundle\Config\MenuItem;
use EasyCorp\Bundle\EasyAdminBundle\Config\Dashboard;
use EasyCorp\Bundle\EasyAdminBundle\Attribute\AdminDashboard;
use EasyCorp\Bundle\EasyAdminBundle\Router\AdminUrlGenerator;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractDashboardController;

#[AdminDashboard(routePath: '/admin', routeName: 'admin')]
class DashboardController extends AbstractDashboardController
{
    #[Route('/admin', name: 'admin')]
    public function index(): Response
    {        
        if (!in_array("ROLE_ADMIN", $this->getUser()->getRoles())) {
            $this->redirectToRoute('user');
        }
        
        $adminUrlGenerator = $this->container->get(AdminUrlGenerator::class);

        return $this->redirect($adminUrlGenerator->setController(UserCrudController::class)->generateUrl());
    }

    public function configureDashboard(): Dashboard
    {
        return Dashboard::new()
            ->setTitle('Admin Dashboard');
                      
    }

    public function configureMenuItems(): iterable
    {
        yield MenuItem::linktoRoute('Back to the website', 'fas fa-home', 'user');
        yield MenuItem::section('USER & GEARS');
        yield MenuItem::linkToCrud('Users', 'fas fa-user', User::class);        
        yield MenuItem::linkToCrud('Board', 'fas fa-water', Board::class);
        yield MenuItem::linkToCrud('Fin', 'fas fa-wave-square', Fin::class);
        yield MenuItem::linkToCrud('Leash', 'fas fa-link', Leash::class);
        yield MenuItem::linkToCrud('Wetsuit', 'fas fa-wind', Wetsuit::class);
        yield MenuItem::linkToCrud('Accessory', 'fas fa-sun', Accessory::class);
        yield MenuItem::linkToCrud('Media', 'fas fa-image', Media::class);
        yield MenuItem::section('POSTS');
        yield MenuItem::linkToCrud('Article', 'fas fa-newspaper', Article::class);
        yield MenuItem::linkToCrud('Comment', 'fas fa-comment-dots', Comment::class);
        yield MenuItem::linkToCrud('Session', 'fas fa-clipboard-list', Session::class);
        yield MenuItem::linkToCrud('Spot', 'fas fa-map-marker-alt', Spot::class);
        yield MenuItem::linkToCrud('Event', 'fas fa-calendar-alt', Event::class);
        yield MenuItem::section('OTHERS');
        yield MenuItem::linkToCrud('Chat', 'fas fa-comments', Chat::class);
        yield MenuItem::linkToCrud('Message', 'fas fa-envelope-open-text', Message::class);
    }
}