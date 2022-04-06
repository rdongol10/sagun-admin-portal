import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {RoleService} from '../service/role.service';
import {Role} from '../model/role-model';
import {PermissionInfo} from '../model/permission-info-model';

@Component({
    selector: 'app-role-new',
    templateUrl: './role-new.component.html',
    styleUrls: ['./role-new.component.sass']
})
export class RoleNewComponent implements OnInit {

    model: Role = new Role();
    permissionInfos: PermissionInfo[];
    routeId;
    checked = [];

    constructor(private service: RoleService, private router: Router,
                private notify: ToastrService, private route: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.route.params.subscribe(params => {
            this.routeId = (params['id']);
        });
        this.service.display(true);
        this.service.getPermissions().subscribe((data: any) => {
            this.permissionInfos = data.data;
            this.service.getById(this.routeId).subscribe((role: any) => {
                this.service.display(false);
                this.model = role.data;
                const permissionInfo = this.model.permissionInfo;
                permissionInfo.forEach(value => value.permissions.forEach(p => this.checked.push(p.code)));
            }, error => {
                this.service.display(false);
            });

        }, error => {
            this.service.display(false);
        });
    }

    permissionChange(event, module, code, title) {
        if (event.target.checked) {
            this.addPermission(module, code, title);
        } else {
            this.removePermission(module, code, title);
        }
    }

    removePermission(module, code, title) {
        this.checked.slice(code);
        const permissionInfos = this.model.permissionInfo;
        const permissionInfo = permissionInfos.find(value => value.module === module);
        permissionInfo.permissions = permissionInfo.permissions.filter(value => value.code !== code);
        console.log(this.model);
    }

    addPermission(module, code, title) {
        this.checked.push(code);
        const permissionInfos = this.model.permissionInfo;
        let permissionInfo = permissionInfos.find(value => value.module === module);
        if (permissionInfo === undefined) {
            permissionInfo = new PermissionInfo();
            permissionInfo.module = module;
            permissionInfos.push(permissionInfo);
        }

        const permission = permissionInfo.permissions;
        permission.push({
            code,
            title
        });

    }

    onSubmit() {
        this.service.display(true);
        console.log("here");
        if (!this.routeId) {
            this.service.save(this.model)
                .subscribe((data: any) => {
                    this.service.display(false);
                    this.notify.success(data.message, 'Success');
                    this.router.navigate(['/role/list']);
                }, error => {
                    this.service.display(false);
                    this.notify.error(error.error.message, 'Error');
                });
        } else {
            console.log("here")
            this.service.update(this.routeId, this.model)
                .subscribe((data: any) => {
                    this.service.display(false);
                    this.notify.success(data.message, 'Success');
                    this.router.navigate(['/role/list']);
                }, error => {
                    this.service.display(false);
                    this.notify.error(error.error.message, 'Error');
                });
        }

    }

}
