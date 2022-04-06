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
        const auth = localStorage.getItem('token');
        const expires = localStorage.getItem('expires');
        if (auth && !this.isSessionExpired(expires) ) {
            return true;
        } else {
            localStorage.clear();
            this.router.navigate(['/auth/login']);
            return false;
        }
    }

    isSessionExpired(expires: string): boolean {
        if (!expires) {
            return true;
        }
        const currentTime = new Date().getTime();
        if (currentTime <= Number(expires)) {
            return false;
        }
        return true;
    }
}

