import {Component, OnInit} from '@angular/core';
import {UserService} from '../service/user.service';
import {UserModel} from '../model/user-model';
import {ToastrService} from 'ngx-toastr';
import {SearchCriteriaModel} from '../../../@core/class/search-criteria-model';

@Component({
    selector: 'app-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.sass']
})
export class UserListComponent implements OnInit {
    list: UserModel[] = [];
    searchModel = new SearchCriteriaModel();
    constructor(private service: UserService, private notify: ToastrService) {
    }

    ngOnInit(): void {
        this.getList();
    }

    getList() {
        this.service.getAll(this.searchModel)
            .subscribe((data: any) => {
                this.list = data.data;
            }, error => {
                this.notify.error(error.error.message, 'Error');
            });
    }

}
