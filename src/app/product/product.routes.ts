import { LoginGuard } from './../login.guard';
import { ProductDetailComponent } from './product-detail.component';
import { ProductListComponent } from './product-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

const routes: Routes = [
    {   
        path:"productList",
        component:ProductListComponent,
        canActivate:[LoginGuard]
    },
    {
        path:"productDetail/:pid",
        component:ProductDetailComponent,
        canActivate:[LoginGuard]
    },
    
];

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProductRoutingModule {}
