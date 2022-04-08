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

    @Output()
    emitDates: EventEmitter<any> = new EventEmitter<any>();

    constructor(public formatter: NgbDateParserFormatter) {
    }

    ngOnInit(): void {
    }

    onFromDateSelection(date: NgbDate) {
        this.fromDate = date;
    }

    onToDateSelection(date: NgbDate) {
        this.toDate = date;
    }

    search() {
        this.emitDates.emit({fromDate: this.fromDate, toDate: this.toDate});
    }

}
