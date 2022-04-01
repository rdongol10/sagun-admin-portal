import {Component, OnInit} from '@angular/core';
import {TransactionService} from '../service/transaction.service';
import {ToastrService} from 'ngx-toastr';
import {TransactionSearchRequestModel} from '../model/transaction-search-request-model';
import {NgbDate, NgbDateParserFormatter} from '@ng-bootstrap/ng-bootstrap';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import {PaidTransactionReportModel} from '../model/paid-transaction-report-model';


@Component({
    selector: 'app-paid-transaction',
    templateUrl: './paid-transaction.component.html',
    styleUrls: ['./paid-transaction.component.sass']
})
export class PaidTransactionComponent implements OnInit {
    fromDate;
    toDate;
    searchModel: TransactionSearchRequestModel = new TransactionSearchRequestModel();
    searchIcon = faSearch;
    transactionData: PaidTransactionReportModel = new PaidTransactionReportModel();

    constructor(private service: TransactionService, private notify: ToastrService,
                public formatter: NgbDateParserFormatter) {
        const currentDate = new Date();
        const lastWeekDate = new Date(currentDate.getTime() - (7 * 24 * 60 * 60 * 1000));
        this.fromDate = new NgbDate(lastWeekDate.getFullYear(), lastWeekDate.getMonth() + 1, lastWeekDate.getDate());
        this.toDate = new NgbDate(currentDate.getFullYear(), currentDate.getMonth() + 1, currentDate.getDate());
    }

    ngOnInit(): void {
        this.getList(true);
    }

    searchTransaction() {
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
