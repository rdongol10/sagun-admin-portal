import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {windowCount} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    constructor(private router: Router) {
    }

    canActivate(next: ActivatedRouteSnapshot,
                state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        var auth = localStorage.getItem('token');
        if (auth) {
            return true;
        } else {
            sessionStorage.clear();
            this.router.navigate(['/auth/login']);
            return false;
        }

    }
}

