import {Injectable} from '@angular/core';
import {GenericService} from '../../../@core/service/generic.service';
import {Role} from '../model/role-model';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {configApiUrl} from '../../../app-config';
import {Observable} from 'rxjs';
import {catchError, map} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class RoleService extends GenericService<Role> {

    constructor(http: HttpClient, protected router: Router) {
        super(http, configApiUrl.ROLE_API, router);
    }


    public getPermissions(): Observable<any> {
        return this.http.get(this.baseUrl + '/permissions'  , {observe: 'response'}).pipe(
            map((res: any) => {
                this.setUpdatedHeader(res);
                return res.body;
            }),
            catchError((error) => this.handleError(error))
        );
    }

}
