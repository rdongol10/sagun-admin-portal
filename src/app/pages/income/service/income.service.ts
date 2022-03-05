import {Injectable} from '@angular/core';
import {GenericService} from '../../../@core/service/generic.service';
import {IncomeModel} from '../model/income-model';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {configApiUrl} from '../../../app-config';

@Injectable({
  providedIn: 'root'
})
export class IncomeService extends GenericService<IncomeModel>{

  constructor(http: HttpClient, protected router: Router) {
    super(http, configApiUrl.INCOME_API, router);
  }
}
