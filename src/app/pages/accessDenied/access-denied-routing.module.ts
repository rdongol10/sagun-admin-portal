import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from '../../@core/guard/auth.guard';
import {AccessDeniedComponent} from './access-denied.component';

const routes: Routes = [{
    path: '', component: AccessDeniedComponent, data: {
        extraParameter: 'access denied', title: 'access denied',
        headerDisplay: 'none'
    },
    canActivate: [AuthGuard]
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AccessDeniedRoutingModule {
}
