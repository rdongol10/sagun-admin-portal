import {Injectable} from '@angular/core';
import {GenericService} from '../../../@core/service/generic.service';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {configApiUrl} from '../../../app-config';
import {SalesModel} from '../model/sales-model';

@Injectable({
    providedIn: 'root'
})
export class SalesService extends GenericService <SalesModel> {

    constructor(http: HttpClient, protected router: Router) {
        super(http, configApiUrl.SALES_API, router);
    }
}
