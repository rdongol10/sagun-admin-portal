import {Injectable} from '@angular/core';
import {GenericService} from '../../../@core/service/generic.service';
import {LotHistoryModel} from '../model/lot-history-model';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {configApiUrl} from '../../../app-config';
import {Observable} from 'rxjs';
import {catchError, map} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class LotHistoryService extends GenericService<LotHistoryModel> {

    constructor(http: HttpClient, protected router: Router) {
        super(http, configApiUrl.LOT_HISTORY_API, router);
    }

    public getAllByEntity(data, entity: string, entityId): Observable<LotHistoryModel> {
        return this.http.post(this.baseUrl + '/findAll/' + entity + '/' + entityId, data).pipe(
            map((res: LotHistoryModel) => {
                return res;
            }),
            catchError((error) => this.handleError(error))
        );
    }

}
