import {Component, OnInit} from '@angular/core';
import {TransactionService} from '../service/transaction.service';
import {ToastrService} from 'ngx-toastr';
import {TransactionSearchRequestModel} from '../model/transaction-search-request-model';
import {NgbDate} from '@ng-bootstrap/ng-bootstrap';
import {TransactionReportModel} from '../model/transaction-report-model';


@Component({
    selector: 'app-paid-transaction',
    templateUrl: './paid-transaction.component.html',
    styleUrls: ['./paid-transaction.component.sass']
})
export class PaidTransactionComponent implements OnInit {
    fromDate;
    toDate;
    searchModel: TransactionSearchRequestModel = new TransactionSearchRequestModel();
    transactionData: TransactionReportModel = new TransactionReportModel();
    growth = 0;
    overallGrowth = 0;

    constructor(private service: TransactionService, private notify: ToastrService) {
        const currentDate = new Date();
        const lastWeekDate = new Date(currentDate.getTime() - (7 * 24 * 60 * 60 * 1000));
        this.fromDate = new NgbDate(lastWeekDate.getFullYear(), lastWeekDate.getMonth() + 1, lastWeekDate.getDate());
        this.toDate = new NgbDate(currentDate.getFullYear(), currentDate.getMonth() + 1, currentDate.getDate());
    }

    ngOnInit(): void {
        this.getList(true);
    }

    searchTransaction(event) {
        this.fromDate = event.fromDate;
        this.toDate = event.toDate;
        this.getList(true);
    }

    getList(reset: boolean = false) {
        if (reset) {
            this.searchModel.pageNumber = 1;
        }
        this.service.display(true);
        this.searchModel.fromDate = this.service.formattedDate(this.fromDate);
        this.searchModel.toDate = this.service.formattedDate(this.toDate);
        this.service.paidTransaction(this.searchModel)
            .subscribe((data: any) => {
                this.transactionData = data.data;
                this.growth = this.transactionData.endClosingBalance.amount - this.transactionData.startClosingBalance.amount;
                this.overallGrowth = this.transactionData.currentBalance - this.transactionData.startClosingBalance.amount;
                this.service.display(false);
            }, error => {
                this.notify.error(error.error, 'Error');
                this.service.display(false);
            });
    }


    formatDate() {
        if (this.fromDate) {
            this.searchModel.fromDate = this.service.formattedDate(this.fromDate);
        }
        if (this.toDate) {
            this.searchModel.toDate = this.service.formattedDate(this.toDate);
        }
    }

    onFromDateSelection(date: NgbDate) {
        this.fromDate = date;
    }

    onToDateSelection(date: NgbDate) {
        this.toDate = date;
    }

    changeIndex(event) {
        const numb = event.pageNumber;
        this.searchModel.pageSize = event.pageSize;
        this.searchModel.pageNumber = Number(numb) + 1;
        if (numb > this.searchModel.pageNumber) {
            this.searchModel.pageNumber++;
            this.getList();
        } else {
            this.searchModel.pageNumber--;
            this.getList();
        }

    }
}
