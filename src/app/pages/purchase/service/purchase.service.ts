import {Injectable} from '@angular/core';
import {GenericService} from '../../../@core/service/generic.service';
import {PurchaseModel} from '../model/purchase-model';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {configApiUrl} from '../../../app-config';
import {Observable} from 'rxjs';
import {catchError, map} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class PurchaseService extends GenericService <PurchaseModel> {

    constructor(http: HttpClient, protected router: Router) {
        super(http, configApiUrl.PURCHASE_API, router);
    }

    public updatePurchase(id: number, data: PurchaseModel): Observable<PurchaseModel> {
        return this.http.put(this.baseUrl + '/updatePurchase/' + id, data).pipe(
            map((res: PurchaseModel) => {
                return res;
            }),
            catchError((error) => this.handleError(error))
        );
    }
}
