import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './components/product/product.component';
import { FiltersComponent } from './components/filters/filters.component';



@NgModule({
  declarations: [
   ProductComponent,
   FiltersComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ProductComponent,
  ],
})
export class ProductsModule { }
