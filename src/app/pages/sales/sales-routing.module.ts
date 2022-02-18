import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SalesNewComponent} from './sales-new/sales-new.component';

const routes: Routes = [
    {path: 'new', component: SalesNewComponent, data: {extraParameter: 'sales New'}},

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SalesRoutingModule {
}
