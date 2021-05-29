import { DisplayCartComponent } from './display-cart.component';
import { CartRoutingModule } from './cart.routes';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [DisplayCartComponent],
    imports: [ CommonModule , CartRoutingModule],
    exports: [],
    providers: [],
})
export class CartModule {}