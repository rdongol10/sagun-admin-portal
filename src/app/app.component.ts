import {Component, ViewChild} from '@angular/core';
import {NgxLoadingComponent} from 'ngx-loading';
import { ngxLoadingAnimationTypes } from 'ngx-loading';
import {GenericService} from './@core/service/generic.service';

const PrimaryWhite = '#ffffff';
const SecondaryGrey = '#ccc';
const PrimaryRed = '#dd0031';
const SecondaryBlue = '#1976d2';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
})

export class AppComponent {
    title = 'ArchitectUI - Angular 7 Bootstrap 5 & Material Design Admin Dashboard Template';
    loading = false;
    @ViewChild('ngxLoading', {static: false})
    ngxLoadingComponent!: NgxLoadingComponent;

    constructor() {
        GenericService.status.subscribe((val: boolean) => {
            setTimeout(() => {
                this.loading = val;
            }, 10);
        });
    }
}
