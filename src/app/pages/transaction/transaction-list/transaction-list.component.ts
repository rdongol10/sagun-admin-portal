import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TransactionReportModel} from '../model/transaction-report-model';

@Component({
    selector: 'app-transaction-list',
    templateUrl: './transaction-list.component.html',
    styleUrls: ['./transaction-list.component.sass']
})
export class TransactionListComponent implements OnInit {

    @Input()
    transactionData: TransactionReportModel;
    @Input()
    growth;
    @Input()
    overallGrowth;
    @Input()
    pageSize;
    @Input()
    pageNumber;
    @Output() paginationChange = new EventEmitter<any>();

    pageSizeChange(event) {
        setTimeout(() => {
            this.paginationChange.emit({pageNumber: event.pageNumber, pageSize: event.pageSize});
        });
    }

    constructor() {
    }

    ngOnInit(): void {
    }

}
