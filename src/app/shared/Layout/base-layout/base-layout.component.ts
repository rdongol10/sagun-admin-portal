import {Component} from '@angular/core';
import {select} from '@angular-redux/store';
import {Observable} from 'rxjs';
import {ConfigActions} from '../../../ThemeOptions/store/config.actions';
import {ThemeOptions} from '../../../theme-options';
import {animate, query, style, transition, trigger} from '@angular/animations';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {distinctUntilChanged, filter, map, startWith} from 'rxjs/operators';

@Component({
    selector: 'app-base-layout',
    templateUrl: './base-layout.component.html',
    animations: [

        trigger('architectUIAnimation', [
            transition('* <=> *', [
                query(':enter, :leave', [
                    style({
                        opacity: 0,
                        display: 'flex',
                        flex: '1',
                        transform: 'translateY(-20px)',
                        flexDirection: 'column'

                    }),
                ],),
                query(':enter', [
                    animate('200ms ease', style({opacity: 1, transform: 'translateY(0)'})),
                ], {optional: true}),

                query(':leave', [
                    animate('200ms ease', style({opacity: 0, transform: 'translateY(-20px)'})),
                ], {optional: true})
            ]),
        ])
    ]
})

export class BaseLayoutComponent {
    heading = 'Form Layouts';
    subheading = 'Build whatever layout you need with our ArchitectUI framework.';
    icon = 'pe-7s-home';
    breadcrumbs$: Observable<any[]>;
    @select('config') public config$: Observable<any>;

    constructor(public globals: ThemeOptions, private router: Router, private activatedRoute: ActivatedRoute, public configActions: ConfigActions) {
    }

    toggleSidebarMobile() {
        this.globals.toggleSidebarMobile = !this.globals.toggleSidebarMobile;
    }

    getState(outlet) {
        return outlet.activatedRouteData.extraParameter;
    }

    ngOnInit() {

        this.breadcrumbs$ = this.router.events.pipe(
            startWith(new NavigationEnd(0, '/', '/')),
            filter(event => event instanceof NavigationEnd), distinctUntilChanged(),
            map(data => this.buildBreadCrumb(this.activatedRoute.root))
        );
    }

    private buildBreadCrumb(route: ActivatedRoute, url: string = '', breadcrumbs = []): any[] {
        let label = '', path = '', display = null;
        if (route.routeConfig) {
            if (route.routeConfig.data) {
                console.log(route.routeConfig.data);
                label = route.routeConfig.data['title'];
                path += '/' + route.routeConfig.path;
            }
        } else {
            label = 'Dashboard';
            path += 'dashboard';
        }

        const nextUrl = path && path !== '/dashboard' ? `${url}${path.replace('dashboard', '')}` : url;
        console.log(nextUrl);
        const breadcrumb = <any>{
            label: label, url: nextUrl
        };


        const newBreadcrumbs = label ? [...breadcrumbs, breadcrumb] : [...breadcrumbs];
        if (route.firstChild) {
            return this.buildBreadCrumb(route.firstChild, nextUrl, newBreadcrumbs);
        }
        return newBreadcrumbs;
    }
}



