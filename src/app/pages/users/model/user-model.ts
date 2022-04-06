import {PermissionInfo} from '../../role/model/permission-info-model';

export class UserModel {
    id;
    emailAddress: string;
    firstName: string;
    lastName: string;
    middleName: string;
    mobileNumber: string;
    password: string;
    rePassword: string;
    userId: string;
    roleId: number;
    roleTitle: string;
    permissionInfo: PermissionInfo[] = [];
}
