import {Component, OnInit, ViewChild} from '@angular/core';
import {ChangePasswordModel} from '../model/change-password-model';
import {UserService} from '../service/user.service';
import {ToastrService} from 'ngx-toastr';
import {NgForm} from '@angular/forms';

@Component({
    selector: 'app-change-password',
    templateUrl: './change-password.component.html',
    styleUrls: ['./change-password.component.sass']
})
export class ChangePasswordComponent implements OnInit {
    model: ChangePasswordModel = new ChangePasswordModel();

    @ViewChild('form', {static: false})
    form: NgForm;

    constructor(private service: UserService, private notify: ToastrService) {
    }

    ngOnInit(): void {
    }

    onSubmit() {
        this.service.display(true);
        this.service.updatePassword(this.model)
            .subscribe((data: any) => {
                this.service.display(false);
                this.notify.success('Password updated');
                this.form.resetForm();
            }, error => {
                this.service.display(false);
                this.notify.error(error.error.message, 'Error');
            });
    }

}
