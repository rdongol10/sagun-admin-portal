import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';

import {GenericService} from '../../../@core/service/generic.service';
import {UserModel} from '../model/user-model';
import {configApiUrl} from '../../../app-config';


@Injectable({
    providedIn: 'root'
})
export class UserService extends GenericService<UserModel>{

    constructor(http: HttpClient, protected router: Router) {
        super(http, configApiUrl.USER_API, router);
    }


}
