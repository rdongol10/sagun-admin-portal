import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IncomeRoutingModule } from './income-routing.module';
import { IncomeListComponent } from './income-list/income-list.component';
import {SharedModule} from '../../shared/shared.module';
import { IncomeNewComponent } from './income-new/income-new.component';


@NgModule({
  declarations: [
    IncomeListComponent,
    IncomeNewComponent
  ],
    imports: [
        CommonModule,
        IncomeRoutingModule,
        SharedModule
    ]
})
export class IncomeModule { }
