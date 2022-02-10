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
import {ngxLoadingAnimationTypes, NgxLoadingModule} from 'ngx-loading';


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
        SearchGenericComponent],
    imports: [
        CommonModule,
        ToastrModule.forRoot(),
        NgxLoadingModule.forRoot({
        }),
        FormsModule,
        PerfectScrollbarModule,
        NgbModule,

        FontAwesomeModule,
        LoadingBarRouterModule,
    ],
    exports: [
        CommonModule,
        FormsModule,
        ToastrModule,
        NgxLoadingModule,
        PerfectScrollbarModule,
        NgbModule,
        LoadingBarRouterModule,

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
        SearchGenericComponent
    ]
})
export class SharedModule {
}
