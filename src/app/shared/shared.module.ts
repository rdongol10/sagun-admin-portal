import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {FormsModule} from '@angular/forms';
import {ToastrModule} from 'ngx-toastr';
import {BaseLayoutComponent} from './Layout/base-layout/base-layout.component';
import {PagesLayoutComponent} from './Layout/pages-layout/pages-layout.component';
import {PageTitleComponent} from './Layout/Components/page-title/page-title.component';
import {HeaderComponent} from './Layout/Components/header/header.component';
import {SearchBoxComponent} from './Layout/Components/header/elements/search-box/search-box.component';
import {UserBoxComponent} from './Layout/Components/header/elements/user-box/user-box.component';
import {SidebarComponent} from './Layout/Components/sidebar/sidebar.component';
import {LogoComponent} from './Layout/Components/sidebar/elements/logo/logo.component';
import {FooterComponent} from './Layout/Components/footer/footer.component';
import {LoadingBarRouterModule} from '@ngx-loading-bar/router';
import {PerfectScrollbarModule} from 'ngx-perfect-scrollbar';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {SearchGenericComponent} from './component/search-generic/search-generic.component';
import {NgxLoadingModule} from 'ngx-loading';
import {GenericTableModule} from '../../../projects/generic-table/src/lib/generic-table.module';
import {GenericImageUploaderComponent} from './component/generic-image-uploader/generic-image-uploader.component';
import {NgSelectModule} from '@ng-select/ng-select';
import {OrderStatusPipe} from './pipe/order-status.pipe';
import {PaymentStatusPipe} from './pipe/payment-status.pipe';
import {MinMaxValidatorDirective} from './Directive/validator/min-max-validator.directive';
import {ShoppingDetailsComponent} from './component/shopping-details/shopping-details.component';
import { DateSearchComponent } from './component/date-search/date-search.component';


@NgModule({
    declarations: [BaseLayoutComponent,
        PagesLayoutComponent, PageTitleComponent,

        // HEADER

        HeaderComponent,
        SearchBoxComponent,
        UserBoxComponent, SidebarComponent,
        LogoComponent,

        // FOOTER

        FooterComponent,
        SearchGenericComponent,
        GenericImageUploaderComponent,
        OrderStatusPipe,
        PaymentStatusPipe,
        MinMaxValidatorDirective,
        ShoppingDetailsComponent,
        DateSearchComponent,
    ],
    imports: [
        CommonModule,
        ToastrModule.forRoot(),
        NgxLoadingModule.forRoot({}),
        FormsModule,
        PerfectScrollbarModule,
        NgbModule,
        GenericTableModule,
        FontAwesomeModule,
        LoadingBarRouterModule,
        NgSelectModule,
    ],
    exports: [
        CommonModule,
        FormsModule,
        ToastrModule,
        NgxLoadingModule,
        PerfectScrollbarModule,
        NgbModule,
        LoadingBarRouterModule,
        GenericTableModule,
        FontAwesomeModule,
        BaseLayoutComponent,
        PagesLayoutComponent, PageTitleComponent,

        // HEADER

        HeaderComponent,
        SearchBoxComponent,
        UserBoxComponent, SidebarComponent,
        LogoComponent,

        // FOOTER

        FooterComponent,
        SearchGenericComponent, GenericImageUploaderComponent,
        NgSelectModule,
        OrderStatusPipe,
        PaymentStatusPipe,
        MinMaxValidatorDirective,
        ShoppingDetailsComponent, DateSearchComponent
    ]
})
export class SharedModule {
}
