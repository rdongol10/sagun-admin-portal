import {HttpClient, HttpHeaders} from '@angular/common/http';

import {catchError, map} from 'rxjs/operators';
import {BehaviorSubject, Observable, throwError} from 'rxjs';
import {Router} from '@angular/router';

export class GenericService<T> {
    protected http: HttpClient;
    protected baseUrl: string;
    static status: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);


    public constructor(http: HttpClient, baseUrl: string, router: Router) {
        this.http = http;
        this.baseUrl = baseUrl;
    }

    public save(data: T): Observable<T> {
        return this.http.post(this.baseUrl + 'create', data).pipe(
            map((res: T) => {
                return res;
            }),
            catchError((error) => this.handleError(error))
        );
    }

    public get(id: number): Observable<T> {
        return this.http.get(this.baseUrl + id).pipe(
            map((res: T) => {
                return res;
            }),
            catchError((error) => this.handleError(error))
        );
    }

    public getAll(data): Observable<T> {
        return this.http.post(this.baseUrl + '/findAll', data).pipe(
            map((res: T) => {
                return res;
            }),
            catchError((error) => this.handleError(error))
        );
    }

    public getSearchField(): Observable<T> {
        return this.http.get(this.baseUrl + '/searchFields').pipe(
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
    public display(value: boolean) {
        GenericService.status.next(value);
    }
    formattedDate(date: Date): string {
        if (date) {
            const datePart = date.getDate();
            const monthPart = date.getMonth() + 1;
            const yearPart = date.getFullYear();

            return (yearPart) + '-' + (monthPart < 10 ? '0' + monthPart : monthPart) + '-' + (datePart < 10 ? '0' + datePart : datePart);

        }
    }
    protected handleError(error: any) {
        console.log('err=>', error);
        return throwError(error);
    }
}
