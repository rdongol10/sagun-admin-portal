import {Component, OnInit} from '@angular/core';
import {SalesModel} from '../model/sales-model';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {SalesService} from '../service/sales.service';
import {SalesDetailModel} from '../model/sales-detail-model';
import {SelectSearchRequest} from '../../../@core/class/select-search-request';
import {LotService} from '../../lots/service/lot.service';
import {LotSelectableValue} from '../../lots/model/lot-selectable-value';
import {SelectableValue} from '../../../@core/class/selectable-value';
import {UserService} from '../../users/service/user.service';
import {ORDER_STATUS, OrderStatusEnum, PAYMENT_STATUS, PaymentStatusEnum} from '../../../app-config';

@Component({
    selector: 'app-sales-new',
    templateUrl: './sales-new.component.html',
    styleUrls: ['./sales-new.component.sass']
})
export class SalesNewComponent implements OnInit {

    model: SalesModel = new SalesModel();
    lots: LotSelectableValue[] = [];
    users: SelectableValue[] = [];
    orderStatus: SelectableValue[] = ORDER_STATUS;
    paymentStatus: SelectableValue[] = PAYMENT_STATUS;
    routeId;
    oldPaidAmount = 0;
    orderEnum = OrderStatusEnum;
    paymentStatusEnum = PaymentStatusEnum;

    constructor(private userService: UserService, private service: SalesService, private lotService: LotService,
                private router: Router, private notify: ToastrService,
                private route: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.route.params.subscribe(params => {
            this.routeId = (params['id']);
        });

        this.service.display(true);
        if (this.routeId) {
            this.service.getById(this.routeId)
                .subscribe((data: any) => {
                    this.model = data.data;
                    this.oldPaidAmount = this.model.paidAmount;
                    this.model.paidAmount = 0;
                    if (this.model.orderStatus === 1) {
                        this.users.push({code: this.model.deliveredBy, title: this.model.deliveredBy});
                    }
                    this.service.display(false);
                }, error => {
                    this.service.display(false);
                    this.notify.error(error.error.message);
                });
        } else {
            this.service.display(false);
            this.addSalesDetails();
        }
    }

    searchUser(event) {
        if (event.term.trim() === '') {
            this.users = [];
            return;
        }

        const query: SelectSearchRequest = new SelectSearchRequest();
        query.searchQuery = event.term;
        this.userService.search(query).subscribe(
            (data: any) => {
                this.users = data.data;
            }, error => {
                this.notify.error(error.error.message, 'Error');
            }
        );
    }

    changeUser(event) {
        if (event === undefined) {
            this.model.deliveredBy = null;
        } else {
            this.model.deliveredBy = event.code;
        }
    }

    searchLot(event) {
        if (event.term.trim() === '') {
            this.lots = [];
            return;
        }
        const query: SelectSearchRequest = new SelectSearchRequest();
        query.searchQuery = event.term;
        this.lotService.search(query).subscribe(
            (data: any) => {
                this.lots = data.data;
            }, error => {
                this.notify.error(error.error.message, 'Error');
            }
        );
    }

    changeLot(event, index) {
        if (event === undefined) {
            this.model.salesDetails[index].lotId = 0;
            this.model.salesDetails[index].costPrice = 0;
            this.model.salesDetails[index].remainingQuantity = 0;
        } else {
            this.model.salesDetails[index].lotId = event.code;
            this.model.salesDetails[index].costPrice = event.details.costPrice;
            this.model.salesDetails[index].remainingQuantity = event.details.quantity;
        }
        this.calculateDetailsTotal(index);
        this.calculateTotal();
    }

    addSalesDetails() {
        const dtl = new SalesDetailModel();
        dtl.uniqueId = new Date().toString();
        this.model.salesDetails.push(dtl);
        setTimeout(() => {
            this.model.salesDetails = [...this.model.salesDetails];
        }, 0);
    }

    removeSaleDetails(index) {
        this.model.salesDetails.splice(index, 1);
        setTimeout(() => {
            this.model.salesDetails = [...this.model.salesDetails];
        }, 0);
    }

    quantityChanged(event, index) {
        this.calculateDetailsTotal(index);
        this.calculateTotal();
    }

    calculateDetailsTotal(index) {
        this.model.salesDetails[index].totalCostPrice
            = !this.model.salesDetails[index].costPrice || !this.model.salesDetails[index].quantity
            ? 0 :
            this.model.salesDetails[index].costPrice * this.model.salesDetails[index].quantity;
    }

    calculateTotal() {
        let totalCostPrice = 0;
        this.model.salesDetails.forEach((detail) => {
            if (detail.totalCostPrice) {
                totalCostPrice += detail.totalCostPrice;
            }
        });

        this.model.costPrice = totalCostPrice;

        this.calculateTotalCostPrice();
    }

    calculateTotalCostPrice() {
        if (!this.model.costPrice) {
            this.model.totalCostPrice = 0;
            return;
        }

        if (!this.model.additionalCharges) {
            this.model.totalCostPrice = this.model.costPrice;
            return;
        }

        this.model.totalCostPrice = this.model.costPrice + this.model.additionalCharges;

    }

    changeAdditionalCharge() {
        this.calculateTotalCostPrice();
    }

    paidAmountChange(event) {
        this.calculateRemainingAmount();
    }

    calculateRemainingAmount() {
        let sellingPrice: number;
        let paidAmount: number;
        if (!this.model.sellingPrice) {
            this.model.remainingAmount = 0;
            return;
        }
        if (!this.model.paidAmount) {
            sellingPrice = this.model.netSellingPrice;
            paidAmount = 0;
        } else {
            sellingPrice = this.model.netSellingPrice;
            paidAmount = this.model.paidAmount;
        }
        console.log(sellingPrice);
        console.log(paidAmount);

        this.model.remainingAmount = sellingPrice - paidAmount - this.oldPaidAmount;

    }

    calculateNetSellingPrice() {
        if (!this.model.sellingPrice) {
            this.model.netSellingPrice = 0;
        } else {
            this.model.netSellingPrice = this.model.sellingPrice - (this.model.discount ? this.model.discount : 0);
        }
        this.calculateRemainingAmount();
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
        this.router.navigate(['/sales/list']);
    }

    onError(error) {
        this.service.display(false);
        this.notify.error(error.error.message, 'Error');
    }

    customTB(index, item) {
        return `${index}-${item.uniqueId}`;
    }
}
