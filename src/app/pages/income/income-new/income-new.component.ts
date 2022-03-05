import {Component, OnInit} from '@angular/core';
import {IncomeModel} from '../model/income-model';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {IncomeService} from '../service/income.service';

@Component({
    selector: 'app-income-new',
    templateUrl: './income-new.component.html',
    styleUrls: ['./income-new.component.sass']
})
export class IncomeNewComponent implements OnInit {

    model: IncomeModel = new IncomeModel();

    constructor(private service: IncomeService,
                private router: Router, private notify: ToastrService,
    ) {
    }

    ngOnInit(): void {
    }

    onSubmit() {
        this.service.display(true);
        this.service.save(this.model)
            .subscribe((data: any) => {
                this.onSuccess(data);
            }, error => {
                this.onError(error);
            });
    }

    onSuccess(data: any) {
        this.service.display(false);
        this.notify.success(data.message, 'Success');
        this.router.navigate(['/income/list']);
    }

    onError(error) {
        this.service.display(false);
        this.notify.error(error.error.message, 'Error');
    }

}
