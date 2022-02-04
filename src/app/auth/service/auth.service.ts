import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';

import {catchError, delay, map} from 'rxjs/operators';
import {GenericService} from '../../@core/service/generic.service';
import {MainUrl} from '../../app-config';
import {Observable, throwError} from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class AuthService extends GenericService<any>{

    constructor(http: HttpClient, protected router: Router) {
        super(http, MainUrl, router);
    }

    public login(data): Observable<any> {
        return this.http.post<any>(this.baseUrl + 'public/login' , (data), {headers: this.getHttpHeaders(),
            observe: "response"})
            .pipe( map((response) => {
                // TODO: check if successful login, if not then throw error
                const theBody = (response.body);
                console.log(response.headers.get('Authorization'));
                if (theBody) {
                    sessionStorage.setItem('token', JSON.stringify(response.headers.get('Authorization')));
                    sessionStorage.setItem('userDetails', JSON.stringify(theBody));
                    return true;
                }else {
                    return false;
                }
            }), catchError((error: any) => {
                    return throwError(error);
                }
            ));
    }

}
