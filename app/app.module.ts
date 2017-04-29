import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { AppRoutingModule } from "./app.routing";
import { AppComponent } from "./app.component";

import { ItemsComponent } from "./item/items.component";
import { HomeComponent } from "./components/home/home.component";
import { SalesComponent } from "./components/best sales/sales.component";
import { CheckoutComponent } from "./components/checkout/checkout.component";
import { ContactComponent } from "./components/contact/contact.component";
import { LatestComponent } from "./components/latest products/latest.component";
import { ShopComponent } from "./components/shop/shop.component";
import { SignupComponent } from "./components/user/signup/signup.component";
import { LoginComponent } from "./components/user/login/login.component";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        ItemsComponent,
        HomeComponent,
        SalesComponent,
        CheckoutComponent,
        ContactComponent,
        LatestComponent,
        ShopComponent,
        SignupComponent,
        LoginComponent,
    ],
    providers: [
        
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
