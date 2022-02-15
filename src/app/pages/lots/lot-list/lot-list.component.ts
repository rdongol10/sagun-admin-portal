import {Component, OnInit} from '@angular/core';
import {SearchCriteriaModel} from '../../../@core/class/search-criteria-model';
import {ToastrService} from 'ngx-toastr';
import {LotService} from '../service/lot.service';

@Component({
    selector: 'app-lot-list',
    templateUrl: './lot-list.component.html',
    styleUrls: ['./lot-list.component.sass']
})
export class LotListComponent implements OnInit {

    list = [];
    searchModel = new SearchCriteriaModel();
    searchField = [];
    searchFieldCondition = [];
    searchFieldValues = [];
    fieldName;
    fieldCondition;

    constructor(private service: LotService, private notify: ToastrService) {
    }

    ngOnInit(): void {
        this.service.getSearchField()
            .subscribe((data: any) => {
                this.searchField = data.data;
                this.fieldName = this.searchField[0];
                this.changeField(this.searchField[0]);
                this.service.display(false);
            }, error => {
                this.service.display(false);
            });
        this.getList();
    }


    getList(reset: boolean = false, value?) {
        if (reset) {
            this.searchModel.pageNumber = 1;
        }
        if (value) {
            this.searchModel.searchCriteria = value;
        }
        this.service.display(true);
        this.service.getAll(this.searchModel)
            .subscribe((data: any) => {
                this.list = data.data.data;
                this.service.display(false);
            }, error => {
                this.notify.error(error.error, 'Error');
                this.service.display(false);
            });
    }

    sort(sort: { key: string; value: string }): void {
        this.searchModel.sortField = sort.key;
        if (sort.value == 'ascend') {
            this.searchModel.sortOrder = 'asc';
        }
        if (sort.value == 'descend') {
            this.searchModel.sortOrder = 'desc';
        }
        this.getList();
    }

    changeField(val) {
        this.fieldCondition = 'sw';
        this.searchFieldCondition = val.conditions;
        this.searchFieldValues = val.selectValues;
    }

    changeIndex(event) {
        this.searchModel.pageNumber = Number(event) + 1;
        if (event > this.searchModel.pageNumber) {
            this.searchModel.pageNumber++;
            this.getList();
        } else {
            this.searchModel.pageNumber--;
            this.getList();
        }

    }

    search(data) {
        this.searchModel.pageNumber = 1;
        this.getList(false, data);
    }

}
