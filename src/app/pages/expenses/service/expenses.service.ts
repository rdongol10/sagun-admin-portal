import {Injectable} from '@angular/core';
import {GenericService} from '../../../@core/service/generic.service';
import {ExpensesModel} from '../model/expenses-model';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {configApiUrl} from '../../../app-config';
import {Observable} from 'rxjs';
import {catchError, map} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class ExpensesService extends GenericService<ExpensesModel> {

    constructor(http: HttpClient, protected router: Router) {
        super(http, configApiUrl.EXPENSES_API, router);
    }

    public updateSales(id: number, data: ExpensesModel): Observable<ExpensesModel> {
        return this.http.put(this.baseUrl + '/updateExpenses/' + id, data).pipe(
            map((res: ExpensesModel) => {
                return res;
            }),
            catchError((error) => this.handleError(error))
        );
    }
}
