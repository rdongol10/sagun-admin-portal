import {Component, Input, OnInit} from '@angular/core';
import {ProductModel} from '../model/product-model';
import {faFileAlt, faPen} from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-product-card',
    templateUrl: './product-card.component.html',
    styleUrls: ['./product-card.component.sass']
})
export class ProductCardComponent implements OnInit {

    @Input()
    productModel: ProductModel = new ProductModel();
    editIcon = faPen;
    fileArchive = faFileAlt;

    constructor() {
    }

    ngOnInit(): void {
    }

}
