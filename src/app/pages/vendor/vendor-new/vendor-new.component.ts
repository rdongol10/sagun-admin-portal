import {Component, OnInit} from '@angular/core';
import {VendorModel} from '../model/vendor-model';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {VendorService} from '../service/vendor.service';

@Component({
    selector: 'app-vendor-new',
    templateUrl: './vendor-new.component.html',
    styleUrls: ['./vendor-new.component.sass']
})
export class VendorNewComponent implements OnInit {

    model: VendorModel = new VendorModel();
    routeId;

    constructor(private service: VendorService, private router: Router, private notify: ToastrService,
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

                    this.service.display(false);
                }, error => {
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
                    this.service.display(false);
                    this.notify.success(data.message, 'Success');
                    this.router.navigate(['/vendor/list']);
                }, error => {
                    this.service.display(false);
                    this.notify.error(error.error.message, 'Error');
                });
        } else {
            this.service.update(this.routeId, this.model)
                .subscribe((data: any) => {
                    this.service.display(false);
                    this.notify.success(data.message, 'Success');
                    this.router.navigate(['/vendor/list']);
                }, error => {
                    this.service.display(false);
                    this.notify.error(error.error.message, 'Error');
                });
        }

    }

}
