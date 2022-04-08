import {Injectable} from '@angular/core';
import {GenericService} from '../../../@core/service/generic.service';
import {TransactionModel} from '../model/transaction-model';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {configApiUrl} from '../../../app-config';
import {TransactionSearchRequestModel} from '../model/transaction-search-request-model';
import {Observable} from 'rxjs';
import {TransactionReportModel} from '../model/transaction-report-model';
import {catchError, map} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class TransactionService extends GenericService<TransactionModel> {

    constructor(http: HttpClient, protected router: Router) {
        super(http, configApiUrl.TRANSACTION_API, router);
    }

    public paidTransaction(data: TransactionSearchRequestModel): Observable<TransactionReportModel> {
        return this.http.post(this.baseUrl + '/paidTransaction/', data, {observe: 'response'}).pipe(
            map((res: any) => {
                this.setUpdatedHeader(res);
                return res.body;
            }),
            catchError((error) => this.handleError(error))
        );
    }

    public allTransaction(data: TransactionSearchRequestModel): Observable<TransactionReportModel> {
        return this.http.post(this.baseUrl + '/allTransaction/', data, {observe: 'response'}).pipe(
            map((res: any) => {
                this.setUpdatedHeader(res);
                return res.body;
            }),
            catchError((error) => this.handleError(error))
        );
    }

    public last30DaysTransaction(): Observable<any> {
        return this.http.get(this.baseUrl + '/last30Days', {observe: 'response'}).pipe(
            map((res: any) => {
                this.setUpdatedHeader(res);
                return res.body;
            }),
            catchError((error) => this.handleError(error))
        );
    }

}
