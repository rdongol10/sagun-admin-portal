import {LotSelectableValue} from '../../lots/model/lot-selectable-value';

export class PurchaseDetailsModel {
    id: number;
    productId: number;
    productName: string;
    lotId: number;
    lotName: string;
    quantity: number;
    costPrice: number;
    markPrice: number;
    total: number;
    stockStatus: number;
    receivedQuantity: number;
    remaining: number;
    uniqueId;
    selectLots: LotSelectableValue[] = [];
}
