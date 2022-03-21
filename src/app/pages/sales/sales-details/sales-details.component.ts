import {Component, Input, OnInit} from '@angular/core';
import {SalesModel} from '../model/sales-model';
import {PaymentStatusEnum} from '../../../app-config';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-sales-details',
    templateUrl: './sales-details.component.html',
    styleUrls: ['./sales-details.component.sass']
})
export class SalesDetailsComponent implements OnInit {

    @Input()
    salesModel: SalesModel = new SalesModel();
    paymentStatusEnum = PaymentStatusEnum;


    constructor(public activeModal: NgbActiveModal) {
    }

    ngOnInit(): void {
    }

}
