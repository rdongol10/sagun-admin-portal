import {PermissionInfo} from './permission-info-model';

export class Role {
    id: number;
    title: string;
    permissionInfo: PermissionInfo[] = [];
}
