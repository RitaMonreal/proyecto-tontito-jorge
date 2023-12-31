import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarModule } from './navbar/navbar.module';
import { ProductsPages } from './products/products.pages';
import { ProductsModule } from "./products/products.module";





@NgModule({
    declarations: [
        AppComponent,
        ProductsPages
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NavbarModule,
        ProductsModule
    ]
})
export class AppModule { }
