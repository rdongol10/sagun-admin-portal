import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {IncomeListComponent} from './income-list/income-list.component';
import {IncomeNewComponent} from './income-new/income-new.component';

const routes: Routes = [
    {
        path: 'new',
        component: IncomeNewComponent,
        data: {extraParameter: 'Income New', title: 'Income New'}
    },
    {
        path: 'list',
        component: IncomeListComponent,
        data: {extraParameter: 'Income List', title: 'Income List'}
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class IncomeRoutingModule {
}
