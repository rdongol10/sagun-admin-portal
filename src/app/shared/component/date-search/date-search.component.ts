import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import {NgbDate, NgbDateParserFormatter} from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-date-search',
    templateUrl: './date-search.component.html',
    styleUrls: ['./date-search.component.sass']
})
export class DateSearchComponent implements OnInit {
    @Input()
    fromDate;
    @Input()
    toDate;
    searchIcon = faSearch;
    fromDateAfterToDate = false;

    @Output()
    emitDates: EventEmitter<any> = new EventEmitter<any>();

    constructor(public formatter: NgbDateParserFormatter) {
    }

    ngOnInit(): void {
    }

    onFromDateSelection(date: NgbDate) {
        this.fromDate = date;
        this.fromDateAfterToDate = this.isFromDateAfterToDate();
    }

    onToDateSelection(date: NgbDate) {
        this.toDate = date;
        this.fromDateAfterToDate = this.isFromDateAfterToDate();
    }

    isFromDateAfterToDate() {
        return this.fromDate.after(this.toDate);
    }

    search() {
        console.log(this.fromDate.after(this.toDate));
        if (this.isFromDateAfterToDate()) {
            this.fromDateAfterToDate = true;
        } else {
            this.fromDateAfterToDate = false;
            this.emitDates.emit({fromDate: this.fromDate, toDate: this.toDate});
        }
    }

}
