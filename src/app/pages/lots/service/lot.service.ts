import {Injectable} from '@angular/core';
import {GenericService} from '../../../@core/service/generic.service';
import {LotModel} from '../model/lot-model';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {configApiUrl} from '../../../app-config';
import {Observable} from 'rxjs';
import {catchError, map} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class LotService extends GenericService<LotModel> {

    constructor(http: HttpClient, protected router: Router) {
        super(http, configApiUrl.LOT_API, router);
    }

    public inStock(id: number, data: LotModel): Observable<LotModel> {
        return this.http.put(this.baseUrl + '/inStock/' + id, data).pipe(
            map((res: LotModel) => {
                return res;
            }),
            catchError((error) => this.handleError(error))
        );
    }

}
