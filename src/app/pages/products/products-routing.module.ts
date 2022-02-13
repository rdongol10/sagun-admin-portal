import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductNewComponent } from './product-new/product-new.component';


const routes: Routes = [
    { path: 'new', component: ProductNewComponent, data: { extraParameter: 'Product New' } },
    { path: 'list', component: ProductListComponent, data: { extraParameter: 'Product List' } },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProductsRoutingModule { }