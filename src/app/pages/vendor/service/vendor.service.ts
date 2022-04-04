import {Injectable} from '@angular/core';
import {GenericService} from '../../../@core/service/generic.service';
import {VendorModel} from '../model/vendor-model';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {configApiUrl} from '../../../app-config';

@Injectable({
    providedIn: 'root'
})
export class VendorService extends GenericService<VendorModel> {

    constructor(http: HttpClient, protected router: Router) {
        super(http, configApiUrl.VENDOR_API, router);
    }
}
