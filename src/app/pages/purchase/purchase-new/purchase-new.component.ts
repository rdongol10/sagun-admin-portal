import {Component, OnInit} from '@angular/core';
import {PurchaseModel} from '../model/purchase-model';
import {PurchaseDetailsModel} from '../model/purchase-details-model';
import {SelectableValue} from '../../../@core/class/selectable-value';
import {LotService} from '../../lots/service/lot.service';
import {ProductService} from '../../products/service/product.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {PurchaseService} from '../service/purchase.service';
import {SelectSearchRequest} from '../../../@core/class/select-search-request';
import {LotSelectableValue} from '../../lots/model/lot-selectable-value';
import {PAYMENT_STATUS, PaymentStatusEnum} from '../../../app-config';

@Component({
    selector: 'app-purchase-new',
    templateUrl: './purchase-new.component.html',
    styleUrls: ['./purchase-new.component.sass']
})
export class PurchaseNewComponent implements OnInit {
    model: PurchaseModel = new PurchaseModel();
    products: SelectableValue[] = [];
    paymentStatus: SelectableValue[] = PAYMENT_STATUS;
    paymentStatusEnum = PaymentStatusEnum;
    oldPaidAmount = 0;
    routeId;

    constructor(private service: PurchaseService, private lotService: LotService, private productService: ProductService,
                private router: Router, private notify: ToastrService, private route: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.route.params.subscribe(params => {
            this.routeId = (params['id']);
        });
        if (this.routeId) {
            this.service.display(true);
            this.service.getById(this.routeId)
                .subscribe((data: any) => {
                    this.model = data.data;
                    this.model.paidAmount = 0;
                    this.service.display(false);
                }, error => {
                    this.service.display(false);
                    this.notify.error(error.error.message);
                });
        } else {
            this.addPurchaseDetails();
        }
    }

    addPurchaseDetails() {
        const purchaseDetailsModel = new PurchaseDetailsModel();
        purchaseDetailsModel.uniqueId = new Date().toString();
        this.model.purchaseDetails.push(purchaseDetailsModel);
        setTimeout(() => {
            this.model.purchaseDetails = [...this.model.purchaseDetails];
        }, 0);
    }

    removePurchaseDetails(index) {
        this.model.purchaseDetails.splice(index, 1);
        setTimeout(() => {
            this.model.purchaseDetails = [...this.model.purchaseDetails];
        }, 0);
    }

    customTB(index, item) {
        return `${index}-${item.uniqueId}`;
    }

    searchProduct(event) {
        if (event.term.trim() === '') {
            this.products = [];
            return;
        }
        const query: SelectSearchRequest = new SelectSearchRequest();
        query.searchQuery = event.term;
        this.productService.search(query).subscribe(
            (data: any) => {
                this.products = data.data;
            }, error => {
                this.notify.error(error.error.message, 'Error');
            }
        );
    }

    changeLot(event, index) {
        if (event === undefined) {
            this.model.purchaseDetails[index].lotId = null;
            this.model.purchaseDetails[index].costPrice = null;
            this.model.purchaseDetails[index].markPrice = null;
        } else {
            this.model.purchaseDetails[index].lotId = event.code;
            this.model.purchaseDetails[index].costPrice = event.details?.costPrice;
            this.model.purchaseDetails[index].markPrice = event.details?.markPrice;
        }
        this.calculateDetailsTotal(index);
    }

    changeProduct(event, index) {
        let selectLots: LotSelectableValue[] = [];

        if (event === undefined) {
            this.model.purchaseDetails[index].selectLots = selectLots;
            this.model.purchaseDetails[index].lotId = null;
            this.model.purchaseDetails[index].costPrice = null;
            this.model.purchaseDetails[index].markPrice = null;
            return;
        }
        this.model.purchaseDetails[index].productId = event.code;
        this.lotService.searchByProduct(event.code).subscribe(
            (data: any) => {
                selectLots.push({details: undefined, displayValue: '', code: '0', title: 'New'});
                selectLots = selectLots.concat(data.data);
                this.model.purchaseDetails[index].selectLots = selectLots;
            }, error => {
                this.notify.error(error.error.message, 'Error');
            }
        );
        this.products = [];
    }

    calculateDetailsTotal(index) {
        this.model.purchaseDetails[index].total =
            !this.model.purchaseDetails[index].costPrice || !this.model.purchaseDetails[index].quantity ?
                0 :
                this.model.purchaseDetails[index].costPrice * this.model.purchaseDetails[index].quantity;
        this.calculateTotal();
    }

    calculateTotal() {
        let totalCostPrice = 0;
        this.model.purchaseDetails.forEach(details => {
            if (details.total) {
                totalCostPrice += details.total;
            }
        });

        this.model.totalCostPrice = totalCostPrice;
        this.calculateNetTotal();
    }

    changeDiscount() {
        this.calculateNetTotal();
    }

    calculateNetTotal() {
        if (!this.model.totalCostPrice) {
            this.model.netCostPrice = 0;
            return;
        }

        const discount = !this.model.discount ? 0 : this.model.discount;

        this.model.netCostPrice = this.model.totalCostPrice - discount;

    }

    calculateRemaining() {
        if (!this.model.netCostPrice) {
            this.model.remaining = 0;
        }

        this.model.remaining = this.model.netCostPrice - this.model.paidAmount - this.oldPaidAmount;
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
            this.service.updatePurchase(this.routeId, this.model)
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
        this.router.navigate(['/purchase/list']);
    }

    onError(error) {
        this.service.display(false);
        this.notify.error(error.error.message, 'Error');
    }

}
