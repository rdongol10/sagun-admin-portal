import {Injectable} from '@angular/core';
import {GenericService} from '../../../@core/service/generic.service';
import {LotModel} from '../model/lot-model';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {configApiUrl} from '../../../app-config';
import {Observable} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {SelectSearchRequest} from '../../../@core/class/select-search-request';

@Injectable({
    providedIn: 'root'
})
export class LotService extends GenericService<LotModel> {

    constructor(http: HttpClient, protected router: Router) {
        super(http, configApiUrl.LOT_API, router);
    }

    public inStock(id: number, data: LotModel): Observable<LotModel> {
        return this.http.put(this.baseUrl + '/inStock/' + id, data, { observe: 'response'}).pipe(
            map((res: any) => {
                this.setUpdatedHeader(res);
                return res.body;
            }),
            catchError((error) => this.handleError(error))
        );
    }


    public searchByProduct(productId: number) {
        return this.http.post(this.baseUrl + '/searchByProductId/' + productId, null, { observe: 'response'}).pipe(
            map((res: any) => {
                this.setUpdatedHeader(res);
                return res.body;
            }),
            catchError((error) => this.handleError(error))
        );
    }

    public searchByProductName(query: SelectSearchRequest) {
        return this.http.post(this.baseUrl + '/searchByProduct', query, {observe: 'response'}).pipe(
            map((res: any) => {
                this.setUpdatedHeader(res);
                return res.body;
            }),
            catchError((error) => this.handleError(error))
        );
    }
}
