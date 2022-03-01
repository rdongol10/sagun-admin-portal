import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';

import {GenericService} from '../../../@core/service/generic.service';
import {UserModel} from '../model/user-model';
import {configApiUrl} from '../../../app-config';
import {Observable} from 'rxjs';
import {catchError, map} from 'rxjs/operators';


@Injectable({
    providedIn: 'root'
})
export class UserService extends GenericService<UserModel> {

    constructor(http: HttpClient, protected router: Router) {
        super(http, configApiUrl.USER_API, router);
    }

    public getUserProfile(): Observable<UserModel> {
        return this.http.get(this.baseUrl + '/profile').pipe(
            map((res: UserModel) => {
                return res;
            }),
            catchError((error) => this.handleError(error))
        );
    }

    public updateUserProfile(data: UserModel): Observable<UserModel> {
        return this.http.put(this.baseUrl, data).pipe(
            map((res: UserModel) => {
                return res;
            }),
            catchError((error) => this.handleError(error))
        );
    }


}
