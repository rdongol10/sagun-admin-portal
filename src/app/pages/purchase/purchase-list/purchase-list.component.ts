import {Component, OnInit} from '@angular/core';
import {SearchCriteriaModel} from '../../../@core/class/search-criteria-model';
import {faEye, faPen} from '@fortawesome/free-solid-svg-icons';
import {ToastrService} from 'ngx-toastr';
import {PurchaseService} from '../service/purchase.service';
import {NgbModal, NgbModalConfig} from '@ng-bootstrap/ng-bootstrap';
import {PurchaseDetailsComponent} from '../purchase-details/purchase-details.component';

@Component({
    selector: 'app-purchase-list',
    templateUrl: './purchase-list.component.html',
    styleUrls: ['./purchase-list.component.sass']
})
export class PurchaseListComponent implements OnInit {

    list = [];
    searchModel = new SearchCriteriaModel();
    searchField = [];
    searchFieldCondition = [];
    searchFieldValues = [];
    fieldName;
    fieldCondition;
    totalCount;
    editIcon = faPen;
    viewIcon = faEye;
    allowedGrants = JSON.parse(localStorage.getItem('allowedGrants'));

    constructor(private service: PurchaseService, private notify: ToastrService,
                private config: NgbModalConfig, private modalService: NgbModal) {
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
                this.totalCount = data.data.totalCount;
                this.service.display(false);
            }, error => {
                this.notify.error(error.error, 'Error');
                this.service.display(false);
            });
    }

    sort(sort: { key: string; value: string }): void {
        console.log(sort);
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

    viewDetails(id) {
        this.service.display(true);
        this.service.getById(id)
            .subscribe((data: any) => {
                this.service.display(false);
                this.modalService.open(PurchaseDetailsComponent, { size: 'xl' }).componentInstance.purchaseModel = data.data;
            }, error => {
                this.notify.error(error.error, 'Error');
                this.service.display(false);
            });
    }

}
