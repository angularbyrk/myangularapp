import { LoginGuard } from './login.guard';
import { UserInfoService } from './userinfo.service';
import { SharedModule } from './shared/shared.module';
import { ProductModule } from './product/product.module';
import { Error404Component } from './error-404.component';
import { ContactComponent } from './contact.component';
import { AboutComponent } from './about.component';
import { HomeComponent } from './home.component';
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { UserModule } from './users/user.module';
import { OrderModule } from './orders/order.module';
import { CartModule } from './cart/cart.module';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
let appRules = [
    {"path":"","component":HomeComponent},
    {"path":"home","component":HomeComponent},
    {"path":"about","component":AboutComponent},
    {"path":"contact","component":ContactComponent},
    {"path":"**","component":Error404Component},
];

@NgModule({
    imports:[
            BrowserModule,
            FormsModule,
            SharedModule,
            UserModule,
            ProductModule,
            OrderModule,
            CartModule,
            RouterModule.forRoot(appRules),
            RouterModule,
            BrowserAnimationsModule,
            ToastrModule.forRoot()
        ],
    declarations:[AppComponent,HomeComponent,AboutComponent,
                ContactComponent,Error404Component],
    providers:[UserInfoService,LoginGuard],
    bootstrap:[AppComponent]
})
export class AppModule{

}