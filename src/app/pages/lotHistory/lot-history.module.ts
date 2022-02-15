import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LotHistoryRoutingModule} from './lot-history-routing.module';
import {LotHistoryListComponent} from './lot-history-list/lot-history-list.component';
import {SharedModule} from '../../shared/shared.module';


@NgModule({
    declarations: [
        LotHistoryListComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        LotHistoryRoutingModule
    ]
})
export class LotHistoryModule {
}
