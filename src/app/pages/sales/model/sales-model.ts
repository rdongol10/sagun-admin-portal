import {SalesDetailModel} from './sales-detail-model';

export class SalesModel {
    id;
    costPrice: number;
    totalCostPrice: number;
    additionalCharges: number;
    sellingPrice: number;
    status: string;
    paidAmount: number;
    remainingAmount: number;
    deliverBy: string;
    deliveredTo: string;
    salesDetails: SalesDetailModel[] = [];
}
