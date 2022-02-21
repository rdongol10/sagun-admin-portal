import {SalesDetailModel} from './sales-detail-model';

export class SalesModel {
    id;
    orderStatus = 0;
    deliveredBy: string;
    deliveredTo: string;

    salesDetails: SalesDetailModel[] = [];
    costPrice: number;
    additionalCharges: number;
    totalCostPrice: number;
    sellingPrice: number;
    discount: number;
    netSellingPrice: number;
    paymentStatus = 0;
    paidAmount: number;
    remainingAmount: number;
    bookedDate: number;

}
