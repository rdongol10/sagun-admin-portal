import {ClosingBalanceModel} from './closing-balance-model';
import {TransactionModel} from './transaction-model';

export class TransactionReportModel {
    startClosingBalance: ClosingBalanceModel = new ClosingBalanceModel();
    endClosingBalance: ClosingBalanceModel = new ClosingBalanceModel();
    currentBalance: number;
    data: TransactionModel[] = [];
    totalCount: number;
    pateSize: number;
    pageNumber: number;
}
