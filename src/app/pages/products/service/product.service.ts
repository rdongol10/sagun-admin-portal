import { Injectable } from '@angular/core';
import { GenericService } from 'src/app/@core/service/generic.service';
import { ProductModel } from '../model/product-model';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { configApiUrl } from '../../../app-config';

@Injectable({
  providedIn: 'root'
})
export class ProductService extends GenericService<ProductModel>{

  constructor(http: HttpClient, protected router: Router) {
    super(http, configApiUrl.PRODUCT_API, router);
  }
}
