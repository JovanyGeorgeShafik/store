import { Routes } from '@angular/router';
import { Home } from './home/home';

export const routes: Routes = [
    {
        component:Home,
        path:"",
        pathMatch:"full",
        title:"JS",
    }
];
