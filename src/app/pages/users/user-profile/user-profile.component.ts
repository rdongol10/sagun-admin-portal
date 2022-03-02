import {Component, OnInit} from '@angular/core';
import {UserService} from '../service/user.service';
import {ToastrService} from 'ngx-toastr';
import {UserModel} from '../model/user-model';

@Component({
    selector: 'app-user-profile',
    templateUrl: './user-profile.component.html',
    styleUrls: ['./user-profile.component.sass']
})
export class UserProfileComponent implements OnInit {
    model: UserModel = new UserModel();
    edit = false;

    constructor(private service: UserService, private notify: ToastrService) {
    }

    ngOnInit(): void {
        this.service.display(true);
        this.service.getUserProfile()
            .subscribe((data: any) => {
                this.model = data.data;

                this.service.display(false);
            }, error => {
                this.service.display(false);
            });
    }

    onEdit(): void {
        this.edit = true;
    }

    onCancel(): void {
        this.edit = false;
    }

    onSubmit(): void {
        this.service.display(true);
        this.service.updateUserProfile(this.model)
            .subscribe((data: any) => {
                this.model = data.data;
                this.edit = false;
                this.service.display(false);
            }, error => {
                this.service.display(false);
                this.notify.error(error.error.message, 'Error');
            });
    }


}
