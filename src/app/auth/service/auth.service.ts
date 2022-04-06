import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

import {catchError, map} from 'rxjs/operators';
import {GenericService} from '../../@core/service/generic.service';
import {MainUrl} from '../../app-config';
import {Observable, throwError} from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class AuthService extends GenericService<any> {

    constructor(http: HttpClient, protected router: Router) {
        super(http, MainUrl, router);
    }

    public login(data): Observable<any> {
        return this.http.post<any>(this.baseUrl + 'public/login', (data), {
            headers: this.getHttpHeaders(),
            observe: 'response'
        })
            .pipe(map((response) => {
                const theBody = (response.body);
                if (theBody) {
                    localStorage.setItem('token', JSON.stringify(response.headers.get('Authorization')));
                    localStorage.setItem('userDetails', JSON.stringify(theBody));
                    localStorage.setItem('expires', response.headers.get('Expires'));
                    localStorage.setItem('allowedModels', JSON.stringify(theBody.data.allowedModels));
                    localStorage.setItem('allowedGrants', JSON.stringify(theBody.data.allowedGrants));
                    return true;
                } else {
                    return false;
                }
            }), catchError((error: any) => {
                    return throwError(error);
                }
            ));
    }

    logout() {
        localStorage.clear();
        this.router.navigate(['/auth/login']);
    }

}
