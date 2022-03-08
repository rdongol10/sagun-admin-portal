import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-shopping-details',
    templateUrl: './shopping-details.component.html',
    styleUrls: ['./shopping-details.component.sass']
})
export class ShoppingDetailsComponent implements OnInit {

    @Input() shoppingDetails: ShoppingDetails[] = [];

    constructor() {
    }

    ngOnInit(): void {
    }

}

export class ShoppingDetails {
    productName: string;
    quantity: number;
    costPrice: number;
}
