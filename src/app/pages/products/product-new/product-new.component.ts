import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../model/product-model';
import { ProductService } from '../service/product.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-product-new',
  templateUrl: './product-new.component.html',
  styleUrls: ['./product-new.component.sass']
})
export class ProductNewComponent implements OnInit {

  model: ProductModel = new ProductModel();
  constructor(private service: ProductService, private router: Router, private notify: ToastrService) {
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
    this.removeImage();
    const file = event.target.files[0];
    if (file.type == "image/jpeg" || file.type == "image/png") {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        console.log(reader.result);
        this.model.image=reader.result.toString();
      };
    } else {
      console.log("Only images are allowed");
    }
  }

  removeImage(){
    this.model.image=null;
  }

}
