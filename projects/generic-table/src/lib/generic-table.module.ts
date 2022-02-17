import {NgModule} from '@angular/core';
import {SortDirective} from './directives/sort.directive';
import {GenericTableComponent} from './generic-table.component';

import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {GenericPaginationComponent} from './generic-pagination.component';


@NgModule({
    declarations: [
        GenericTableComponent, GenericPaginationComponent, SortDirective
    ],
    imports: [
        CommonModule,
        FormsModule
    ],
    exports: [
        GenericTableComponent,
        GenericPaginationComponent,
        SortDirective
    ]
})
export class GenericTableModule {
}
