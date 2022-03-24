import {Component, OnInit} from '@angular/core';
import {LoginModel} from '../model/login-model';
import {AuthService} from '../service/auth.service';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
    model = new LoginModel();

    constructor(private service: AuthService, private router: Router, private notify: ToastrService) {
    }

    ngOnInit(): void {
    }

    submit() {
        this.service.display(true);
        this.service.login(this.model)
            .subscribe(data => {
                console.log(data);
                this.service.display(false);
                this.notify.success('User Login Success', 'Success');
                this.router.navigate(['/dashboard']);
            }, error => {
                this.service.display(false);
                this.notify.error(error.error.message, 'Error');
            });
    }

}
