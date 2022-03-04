import {Injectable} from '@angular/core';
import {GenericService} from '../../../@core/service/generic.service';
import {ExpensesModel} from '../model/expenses-model';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {configApiUrl} from '../../../app-config';

@Injectable({
    providedIn: 'root'
})
export class ExpensesService extends GenericService<ExpensesModel> {

    constructor(http: HttpClient, protected router: Router) {
        super(http, configApiUrl.EXPENSES_API, router);
    }
}
