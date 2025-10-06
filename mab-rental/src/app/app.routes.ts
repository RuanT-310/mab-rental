import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/sing-up/sing-up.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';
import { AddRentalComponent } from './pages/add-rental/add-rental.component';
import { AgentsComponent } from './pages/agents/agents.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { RentalInfoComponent } from './components/rental-info/rental-info.component';
import { RentalListPageComponent } from './pages/rental-list-page/rental-list-page.component';
import { RentalTypesPageComponent } from './pages/rental-types-page/rental-types-page.component';
import { TestimonialListComponent } from './pages/testimonial-list/testimonial-list.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { AppLayoutComponent } from './layouts/app-layout/app-layout.component';
import { authGuard } from './auth/auth.guard';
import { publicGuard } from './auth/public.guard';

export const routes: Routes = [
    // Rotas de Autenticação (fora da proteção)
    { 
        path: 'auth',
        component: AuthLayoutComponent, // Usa o layout minimalista
        canActivate: [publicGuard],
        children: [
            { path: 'singup', component: SignupComponent, title: 'Cadastro' },
            { path: 'login', component: LoginComponent, title: 'Login' },
        ]
    },
    { 
        path: '', 
        component: AppLayoutComponent, 
        canActivate: [authGuard], 
        children: [
            // Rota Index (Home Page)
            { path: '', component: HomePageComponent, pathMatch: 'full' }, 

            // Rotas de Conteúdo
            { path: 'contact', component: ContactComponent },
            { path: 'about', component: AboutComponent },
            { path: 'agents', component: AgentsComponent },
            { path: 'rentals', component: RentalListPageComponent },
            { path: 'types', component: RentalTypesPageComponent },
            { path: 'testimonials', component: TestimonialListComponent },
            { path: 'newrental', component: AddRentalComponent },
            { path: 'rental/:id', component: RentalInfoComponent },
        ]
    },

    // Rota Catch-all (Not Found)
    { path: '**', component: NotFoundComponent },
];