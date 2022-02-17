import {Component, ElementRef, EventEmitter, Input, OnInit, Output, QueryList, ViewChildren} from '@angular/core';

@Component({
    selector: 'lib-generic-table',
    templateUrl: './generic-table.component.html',
    styleUrls: ['./generic-table.component.scss']
})
export class GenericTableComponent implements OnInit {
    @Input() defaultClass;
    @Input() headers = [{title: '', width: '', sort: '', colValue: ''}];
    @Input() dataList = [];
    @Output() sortOrderChange = new EventEmitter<{ key: any; value: string | null }>();
    @Input() pageSize;
    @Input() pageNumber;
    @Input() totalCount;
    @Input() pageSizeOptions = [10, 25, 50, 100, 150];
    @Output() paginationChange = new EventEmitter<any>();


    constructor() {
    }

    ngOnInit(): void {
    }

    trackByFunc(_: number, key: string): string {
        return key;
    }

    sort(event) {
        this.sortOrderChange.emit(event);
    }

    pageSizeChange(event) {
        this.pageSize = event;
    }

    pageNumberChange(event) {
        setTimeout(()=>{
            this.paginationChange.emit({pageNumber: event, pageSize: this.pageSize});
        })
    }

}
