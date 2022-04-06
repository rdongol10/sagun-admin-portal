import {Component, Input, OnInit} from '@angular/core';
import {PurchaseModel} from '../model/purchase-model';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {PaymentStatusEnum} from '../../../app-config';

@Component({
    selector: 'app-purchase-details',
    templateUrl: './purchase-details.component.html',
    styleUrls: ['./purchase-details.component.sass']
})
export class PurchaseDetailsComponent implements OnInit {

    @Input()
    purchaseModel: PurchaseModel = new PurchaseModel();
    paymentStatusEnum = PaymentStatusEnum;


    constructor(public activeModal: NgbActiveModal) {
    }

    ngOnInit(): void {
    }

}
