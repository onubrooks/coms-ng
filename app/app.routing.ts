import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { ItemsComponent } from "./item/items.component";
import { HomeComponent } from "./components/home/home.component";
import { SalesComponent } from "./components/best sales/sales.component";
import { CheckoutComponent } from "./components/checkout/checkout.component";
import { ContactComponent } from "./components/contact/contact.component";
import { LatestComponent } from "./components/latest products/latest.component";
import { ShopComponent } from "./components/shop/shop.component";
import { SignupComponent } from "./components/user/signup/signup.component";
import { LoginComponent } from "./components/user/login/login.component";

const routes: Routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "home", component: HomeComponent },
    { path: "best sales", component: SalesComponent },
    { path: "checkout", component: CheckoutComponent },
    { path: "contact", component: ContactComponent },
    { path: "latest", component: LatestComponent },
    { path: "user/login", component: LoginComponent },
    { path: "users/signup", component: SignupComponent },
    { path: "items", component: ItemsComponent },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }