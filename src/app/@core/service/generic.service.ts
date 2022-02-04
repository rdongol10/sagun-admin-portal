import {HttpClient, HttpHeaders} from '@angular/common/http';

import {catchError, map} from 'rxjs/operators';
import {Observable, throwError} from 'rxjs';
import {Router} from '@angular/router';

export class GenericService<T> {
    protected http: HttpClient;
    protected baseUrl: string;

    public constructor(http: HttpClient, baseUrl: string, router: Router) {
        this.http = http;
        this.baseUrl = baseUrl;
    }

    public save(data: T): Observable<T> {
        return this.http.post(this.baseUrl + 'create', data).pipe(
            map((data: T) => {
                return data;
            }),
            catchError((error) => this.handleError(error))
        );
    }

    public get(id: number): Observable<T> {
        return this.http.get(this.baseUrl + id).pipe(
            map((data: T) => {
                return data;
            }),
            catchError((error) => this.handleError(error))
        );
    }

    public getAll(data): Observable<T> {
        return this.http.post(this.baseUrl + '/findAll', data).pipe(
            map((data: T) => {
                return data;
            }),
            catchError((error) => this.handleError(error))
        );
    }

    public update(id: number, data: T): Observable<T> {
        return this.http.put(this.baseUrl + 'update/' + id, data).pipe(
            map((data: T) => {
                return data;
            }),
            catchError((error) => this.handleError(error))
        );
    }

    public delete(id: number): Observable<T> {
        return this.http.delete(this.baseUrl + 'delete/' + id).pipe(
            map((data: T) => {
                return data;
            }),
            catchError((error) => this.handleError(error))
        );
    }

    public getHttpHeaders(): HttpHeaders {
        let headers = new HttpHeaders();
        headers = headers.set('Content-Type', 'application/json');
        headers = headers.set('Accept', 'application/json');
        // var cookie = this.getCookie('XSRF-TOKEN');
        // if (cookie) {
        //     headers = headers.set('X-XSRF-TOKEN', cookie);
        // }
        return headers;
    }


    protected handleError(error: any) {
        console.log('err=>', error);
        return throwError(error);
    }
}
