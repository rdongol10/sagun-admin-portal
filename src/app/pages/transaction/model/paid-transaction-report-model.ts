import {ClosingBalanceModel} from './closing-balance-model';
import {TransactionModel} from './transaction-model';

export class PaidTransactionReportModel {
    startClosingBalance: ClosingBalanceModel;
    endClosingBalance: ClosingBalanceModel;
    currentBalance: number;
    data: TransactionModel[] = [];
    totalCount: number;
    pateSize: number;
    pageNumber: number;
}
