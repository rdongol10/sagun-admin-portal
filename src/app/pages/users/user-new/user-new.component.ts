import {Component, OnInit} from '@angular/core';
import {UserService} from '../service/user.service';
import {UserModel} from '../model/user-model';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

@Component({
    selector: 'app-user-new',
    templateUrl: './user-new.component.html',
    styleUrls: ['./user-new.component.sass']
})
export class UserNewComponent implements OnInit {
    model: UserModel = new UserModel();
    routeId;

    constructor(private service: UserService, private router: Router, private notify: ToastrService, private route: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.route.params.subscribe(params => {
            this.routeId = (params['id']);
        });
        this.service.display(true);
        if (this.routeId) {
            this.service.display(true);
            this.service.getById(this.routeId)
                .subscribe((data: any) => {
                    this.model = data.data;

                    this.service.display(false);
                }, error1 => {
                    this.service.display(false);
                });
        } else {
            this.service.display(false);
        }
    }

    onSubmit() {
        this.service.display(true);
        if(!this.routeId){
            this.service.save(this.model)
                .subscribe((data: any) => {
                    this.service.display(false);
                    this.notify.success(data.message, 'Success');
                    this.router.navigate(['/user/list']);
                }, error => {
                    this.service.display(false);
                    this.notify.error(error.error.message, 'Error');
                });
        }else{
            this.service.update(this.routeId, this.model)
                .subscribe((data: any) => {
                    this.service.display(false);
                    this.notify.success(data.message, 'Success');
                    this.router.navigate(['/user/list']);
                }, error => {
                    this.service.display(false);
                    this.notify.error(error.error.message, 'Error');
                });
        }

    }
}
