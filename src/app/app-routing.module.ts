import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home/home.page';
import { LoginPage } from './login/login.page';
import { ProductsPages } from './products/products.pages';

const routes: Routes = [
  {path: "home", component: HomePage},
  {path: "login", component: LoginPage},
  {path: "products", component:ProductsPages},
  {path: "", redirectTo: "home", pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
