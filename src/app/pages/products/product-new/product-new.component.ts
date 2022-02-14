import {Component, OnInit} from '@angular/core';
import {ProductModel} from '../model/product-model';
import {ProductService} from '../service/product.service';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {NgxImageCompressService} from 'ngx-image-compress';

@Component({
    selector: 'app-product-new',
    templateUrl: './product-new.component.html',
    styleUrls: ['./product-new.component.sass']
})
export class ProductNewComponent implements OnInit {

    model: ProductModel = new ProductModel();

    constructor(private service: ProductService,
                private router: Router, private notify: ToastrService, private imageCompress: NgxImageCompressService) {

    }

    ngOnInit(): void {
    }

    onSubmit() {
        this.service.save(this.model)
            .subscribe((data: any) => {
                this.notify.success(data.message, 'Success');
                this.router.navigate(['/product/list']);
            }, error => {
                this.notify.error(error.error.message, 'Error');
            });
    }

    fileLoad(event) {
        // this.removeImage();
        const file = event.target.files[0];


        if (file.type === 'image/jpeg' || file.type === 'image/png') {

            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                let base64 = reader.result;
                console.log(this.imageCompress.byteCount(base64));
                const clearLoop = setInterval(() => {
                    if (this.imageCompress.byteCount(base64) > 100000) {

                        this.imageCompress.compressFile(base64.toString(), 1, 50, 50).then((result) => {
                            base64 = result;
                            console.log(this.imageCompress.byteCount(base64));
                        });
                    } else {
                        this.model.image = base64.toString();
                        clearInterval(clearLoop);
                    }
                }, 100);
            };
        } else {
            this.notify.error('Only accepts image');
        }
    }

    removeImage() {
        this.model.image = null;
    }
}
