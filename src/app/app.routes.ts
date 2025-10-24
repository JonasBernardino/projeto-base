import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Projetos } from './pages/projetos/projetos';

export const routes: Routes = [
    {
        path:'', component:Home
    },
    {
        path:'projetos', component:Projetos
    }
];
