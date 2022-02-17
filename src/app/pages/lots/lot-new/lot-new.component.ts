import {Component, OnInit} from '@angular/core';
import {LotModel} from '../model/lot-model';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {LotService} from '../service/lot.service';
import {SelectSearchRequest} from '../../../@core/class/select-search-request';
import {SelectableValue} from '../../../@core/class/selectable-value';
import {ProductService} from '../../products/service/product.service';

@Component({
    selector: 'app-lot-new',
    templateUrl: './lot-new.component.html',
    styleUrls: ['./lot-new.component.sass']
})
export class LotNewComponent implements OnInit {
    model: LotModel = new LotModel();
    products: SelectableValue[] = [];
    routeId;

    constructor(private service: LotService, private productService: ProductService,
                private router: Router, private notify: ToastrService, private route: ActivatedRoute) {
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
                    this.model.quantity = 0;
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
            this.service.inStock(this.routeId, this.model)
                .subscribe((data: any) => {
                    this.onSuccess(data);
                }, error => {
                    this.onError(error);
                });
        }
    }

    changeProduct(event) {
        this.model.productId = event.code;
        this.model.productName = event.title;
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
        console.log(event);
    }

    onSuccess(data: any) {
        this.service.display(false);
        this.notify.success(data.message, 'Success');
        this.router.navigate(['/lot/list']);
    }

    onError(error) {
        this.service.display(false);
        this.notify.error(error.error.message, 'Error');
    }

}
