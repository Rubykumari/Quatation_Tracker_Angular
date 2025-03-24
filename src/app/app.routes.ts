import { Routes } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { LoginComponent } from './pages/login/login.component';
import { CreateRfqComponent } from './pages/create-rfq/create-rfq.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: LandingComponent,
        title: 'Home'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'createRfq',
        component: CreateRfqComponent
    }
];
