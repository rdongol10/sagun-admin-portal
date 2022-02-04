import {Component, OnInit} from '@angular/core';
import {UserService} from '../service/user.service';
import {UserModel} from '../model/user-model';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

@Component({
    selector: 'app-user-new',
    templateUrl: './user-new.component.html',
    styleUrls: ['./user-new.component.sass']
})
export class UserNewComponent implements OnInit {
    model: UserModel = new UserModel();

    constructor(private service: UserService, private router: Router, private notify: ToastrService) {
    }

    ngOnInit(): void {
    }

    onSubmit() {
        this.service.save(this.model)
            .subscribe((data: any) => {
                this.notify.success(data.message, 'Success');
                this.router.navigate(['/user/list']);
            }, error => {
                this.notify.error(error.error.message, 'Error');
            });
    }
}
