import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {BaseLayoutComponent} from './shared/Layout/base-layout/base-layout.component';
import {PagesLayoutComponent} from './shared/Layout/pages-layout/pages-layout.component';
import {AuthGuard} from './@core/guard/auth.guard';


const routes: Routes = [
    {
        path: '',
        component: BaseLayoutComponent,
        canActivate: [AuthGuard],
        children: [
            {
                path: 'user',
                data: {extraParameter: 'userMenu'},
                loadChildren: () => import('./pages/users/users.module').then(m => m.UsersModule)

            }

        ]

    },
    {
        path: '',
        component: BaseLayoutComponent,
        canActivate: [AuthGuard],
        children: [
            {
                path: 'product',
                data: {extraParameter: 'productMenu'},
                loadChildren: () => import('./pages/products/product.module').then(m => m.ProductModule)

            }

        ]

    },
    {
        path: '',
        component: BaseLayoutComponent,
        canActivate: [AuthGuard],
        children: [
            {
                path: 'lot',
                data: {extraParameter: 'lotMenu'},
                loadChildren: () => import('./pages/lots/lot.module').then(m => m.LotModule)

            }

        ]

    },
    {
        path: '',
        component: BaseLayoutComponent,
        canActivate: [AuthGuard],
        children: [
            {
                path: 'lotHistory',
                data: {extraParameter: 'lotHistoryMenu'},
                loadChildren: () => import('./pages/lotHistory/lot-history.module').then(m => m.LotHistoryModule)

            }

        ]

    },
    {
        path: '',
        component: PagesLayoutComponent,
        children: [
            {
                path: 'auth',
                loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)

            },
        ]
    },

    {path: '**', redirectTo: ''}
];

@NgModule({
    imports: [RouterModule.forRoot(routes,
        {
            scrollPositionRestoration: 'enabled',
            anchorScrolling: 'enabled',
            relativeLinkResolution: 'legacy'
        })],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
