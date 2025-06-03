import { Routes } from '@angular/router';
import { Home } from './home/home';
import { ProductPage } from './product-page/product-page';

export const routes: Routes = [
    {
        component: Home,
        path: "",
        pathMatch: "full",
        title: "JS",
    }
    , {
        component: ProductPage,
        path: ":id",
        title: "Product"
    }
];
