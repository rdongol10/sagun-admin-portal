import {Component, OnInit} from '@angular/core';
import {ExpensesModel} from '../model/expenses-model';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {ExpensesService} from '../service/expenses.service';
import {SelectableValue} from '../../../@core/class/selectable-value';
import {PAYMENT_STATUS, PaymentStatusEnum} from '../../../app-config';
import {NgbDate} from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-expenses-new',
    templateUrl: './expenses-new.component.html',
    styleUrls: ['./expenses-new.component.sass']
})
export class ExpensesNewComponent implements OnInit {

    model: ExpensesModel = new ExpensesModel();
    routeId;
    paymentStatus: SelectableValue[] = PAYMENT_STATUS;
    paymentStatusEnum = PaymentStatusEnum;
    oldPaidAmount = 0;

    constructor(private service: ExpensesService,
                private router: Router, private notify: ToastrService,
                private route: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.route.params.subscribe(params => {
            this.routeId = (params.id);
        });
        this.service.display(true);
        if (this.routeId) {
            this.service.display(true);
            this.service.getById(this.routeId)
                .subscribe((data: any) => {
                    this.model = data.data;
                    this.oldPaidAmount = this.model.paidAmount;
                    this.model.paidAmount = 0;
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
        if (!this.routeId) {
            this.service.save(this.model)
                .subscribe((data: any) => {
                    this.onSuccess(data);
                }, error => {
                    this.onError(error);
                });
        } else {
            this.service.updateSales(this.routeId, this.model)
                .subscribe((data: any) => {
                    this.onSuccess(data);
                }, error => {
                    this.onError(error);
                });
        }
    }

    onSuccess(data: any) {
        this.service.display(false);
        this.notify.success(data.message, 'Success');
        this.router.navigate(['/expenses/list']);
    }

    onError(error) {
        this.service.display(false);
        this.notify.error(error.error.message, 'Error');
    }

    paidAmountChange(event) {
        if (!this.model.amount) {
            this.model.remaining = 0;
            return;
        }

        this.model.remaining = this.model.amount - this.model.paidAmount - this.oldPaidAmount;


    }

    onDateSelection(date: NgbDate) {
        this.model.expenseDate = this.service.formattedDate(date);
    }
}
