import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {BaseLayoutComponent} from './shared/Layout/base-layout/base-layout.component';
import {PagesLayoutComponent} from './shared/Layout/pages-layout/pages-layout.component';


const routes: Routes = [
  {
    path: '',
    component: BaseLayoutComponent,
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
