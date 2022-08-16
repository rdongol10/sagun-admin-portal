export class ExpensesModel {
    id: number;
    detail: string;
    amount: number;
    paymentStatus = 0;
    paidAmount: number;
    remaining: number;
    paidBy: string;
    creationDate: string;
    expenseDate: string;
}
