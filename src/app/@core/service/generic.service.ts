import {HttpClient, HttpHeaders} from '@angular/common/http';

import {catchError, map} from 'rxjs/operators';
import {BehaviorSubject, Observable, throwError} from 'rxjs';
import {Router} from '@angular/router';
import {SelectSearchRequest} from '../class/select-search-request';

export class GenericService<T> {
    protected http: HttpClient;
    protected baseUrl: string;
    protected router: Router;
    static status: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);


    public constructor(http: HttpClient, baseUrl: string, router: Router) {
        this.http = http;
        this.baseUrl = baseUrl;
        this.router = router;
    }

    public save(data: T): Observable<T> {
        return this.http.post(this.baseUrl, data, { observe: 'response'}).pipe(
            map((res: any) => {
              this.setUpdatedHeader(res);
              return res.body;
            }),
            catchError((error) => this.handleError(error))
        );
    }

    public getById(id: number): Observable<T> {
        return this.http.get(this.baseUrl + '/' + id,{ observe: 'response'}).pipe(
            map((res: any) => {
                this.setUpdatedHeader(res);
                return res.body;
            }),
            catchError((error) => this.handleError(error))
        );
    }

    public getAll(data): Observable<T> {
        return this.http.post(this.baseUrl + '/findAll', data, { observe: 'response'}).pipe(
            map((res: any) => {
                this.setUpdatedHeader(res);
                return res.body;
            }),
            catchError((error) => this.handleError(error))
        );
    }

    public getSearchField(): Observable<T> {
        return this.http.get(this.baseUrl + '/searchFields', { observe: 'response'}).pipe(
            map((res: any) => {
                this.setUpdatedHeader(res);
                return res.body;
            }),
            catchError((error) => this.handleError(error))
        );
    }

    public update(id: number, data: T): Observable<T> {
        return this.http.put(this.baseUrl + '/' + id, data, { observe: 'response'}).pipe(
            map((res: any) => {
                this.setUpdatedHeader(res);
                return res.body;
            }),
            catchError((error) => this.handleError(error))
        );
    }

    public search(query: SelectSearchRequest) {
        return this.http.post(this.baseUrl + '/search', query, { observe: 'response'}).pipe(
            map((res: any) => {
                this.setUpdatedHeader(res);
                return res.body;
            }),
            catchError((error) => this.handleError(error))
        );
    }

    public delete(id: number): Observable<T> {
        return this.http.delete(this.baseUrl + 'delete/' + id, { observe: 'response'}).pipe(
            map((res: any) => {
                this.setUpdatedHeader(res);
                return res.body;
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

    setUpdatedHeader(res) {
        localStorage.setItem('token', JSON.stringify(res.headers.get('Authorization')));
        localStorage.setItem('expires', JSON.stringify(res.headers.get('Expires')));
    }

    public display(value: boolean) {
        GenericService.status.next(value);
    }

    formattedDate(date): string {
        if (date) {
            const datePart = date.day;
            const monthPart = date.month;
            const yearPart = date.year;

            return (yearPart) + '-' + (monthPart < 10 ? '0' + monthPart : monthPart) + '-' + (datePart < 10 ? '0' + datePart : datePart);

        }
    }

    protected handleError(error: any) {
        if (error.status == 401) {
            this.router.navigateByUrl('/auth/login').then(r => this.display(false));
        }else{

            console.log('err=>', error);
            return throwError(error);
        }
    }


}
