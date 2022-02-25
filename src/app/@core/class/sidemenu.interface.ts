export interface SideMenuInterface {
    id?: string;
    url?: string;
    label: string;
    icon?: string;
    childMenu: SideMenuInterface[] | [];
}
