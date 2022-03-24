import {Component, OnInit} from '@angular/core';
import {SearchCriteriaModel} from '../../../@core/class/search-criteria-model';
import {ProductService} from '../service/product.service';
import {ToastrService} from 'ngx-toastr';
import {faFileAlt, faPen} from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.sass']
})
export class ProductListComponent implements OnInit {

    list = [];
    searchModel = new SearchCriteriaModel();
    searchField = [];
    searchFieldCondition = [];
    searchFieldValues = [];
    fieldName;
    fieldCondition;
    fieldValue;
    totalCount;
    editIcon = faPen;
    fileArchive = faFileAlt;
    allowedGrants = JSON.parse(localStorage.getItem('allowedGrants'));

    constructor(private service: ProductService, private notify: ToastrService) {
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
