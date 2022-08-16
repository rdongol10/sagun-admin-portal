import {PurchaseDetailsModel} from './purchase-details-model';

export class PurchaseModel {

    id: number;
    purchaseDetails: PurchaseDetailsModel[] = [];
    vendorId: number;
    vendorName: string;
    totalCostPrice: number;
    tax: number;
    at: number;
    discount: number;
    netCostPrice: number;
    paymentStatus = 0;
    paidAmount: number;
    remaining: number;
    createdBy: string;
    creationDate: string;
    purchaseDate: string;
}
