import {Component, OnInit} from '@angular/core';
import {SearchCriteriaModel} from '../../../@core/class/search-criteria-model';
import {ToastrService} from 'ngx-toastr';
import {LotHistoryService} from '../service/lot-history.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'app-lot-history-list',
    templateUrl: './lot-history-list.component.html',
    styleUrls: ['./lot-history-list.component.sass']
})
export class LotHistoryListComponent implements OnInit {
    list = [];
    searchModel = new SearchCriteriaModel();
    searchField = [];
    searchFieldCondition = [];
    searchFieldValues = [];
    fieldName;
    fieldCondition;
    productId;
    lotId;
    totalCount;

    constructor(private service: LotHistoryService,
                private router: Router, private notify: ToastrService, private route: ActivatedRoute) {
    }


    ngOnInit(): void {
        this.route.params.subscribe(params => {
            this.productId = (params['productId']);
        });

        this.route.params.subscribe(params => {
            this.lotId = (params['lotId']);
        });

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
        if (this.lotId) {
            this.service.getAllByEntity(this.searchModel, 'lotId', this.lotId)
                .subscribe((data: any) => {
                    this.onSuccess(data);
                }, error => {
                    this.onError(error);
                });
        } else if (this.productId) {
            this.service.getAllByEntity(this.searchModel, 'productId', this.productId)
                .subscribe((data: any) => {
                    this.onSuccess(data);
                }, error => {
                    this.onError(error);
                });
        } else {
            this.service.getAll(this.searchModel)
                .subscribe((data: any) => {
                    this.onSuccess(data);
                }, error => {
                    this.onError(error);
                });
        }

    }

    onSuccess(data) {
        this.list = data.data.data;
        this.totalCount = data.data.totalCount;
        this.service.display(false);
    }

    onError(error) {
        this.notify.error(error.error, 'Error');
        this.service.display(false);
        console.log(error);
    }

    sort(sort: { key: string; value: string }): void {
        this.searchModel.sortField = sort.key;
        if (sort.value == 'asc') {
            this.searchModel.sortOrder = 'asc';
        }
        if (sort.value == 'desc') {
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


    search(data) {
        this.searchModel.pageNumber = 1;
        this.getList(false, data);
    }
}
