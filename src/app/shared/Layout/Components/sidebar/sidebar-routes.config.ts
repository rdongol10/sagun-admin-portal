import {SideMenuInterface} from '../../../../@core/class/sidemenu.interface';

export const sideMenuList: SideMenuInterface[] = [
    {
        id: 'dashboard',
        url: 'dashboard',
        label: 'Dashboard',
        icon: 'graph2',
        childMenu: [],
    },
    {
        id: 'user',
        label: 'User',
        icon: 'user',
        childMenu: [
            {
                url: 'user/new',
                label: 'New',
                childMenu: [],
            },
            {
                url: 'user/list',
                label: 'List',
                childMenu: [],
            }
        ],
    },
    {
        id: 'product',
        label: 'Product',
        icon: 'gift',
        childMenu: [
            {
                url: 'product/new',
                label: 'New',
                childMenu: [],
            },
            {
                url: 'product/list',
                label: 'List',
                childMenu: [],
            }
        ],
    },
    {
        id: 'lot',
        label: 'Lot',
        icon: 'note',
        childMenu: [
            {
                url: 'lot/new',
                label: 'New',
                childMenu: [],
            },
            {
                url: 'lot/list',
                label: 'List',
                childMenu: [],
            }
        ],
    },
    {
        id: 'lothistory',
        label: 'Lot History',
        icon: 'news-paper',
        childMenu: [
            {
                url: 'lothistory/new',
                label: 'New',
                childMenu: [],
            },
            {
                url: 'lothistory/list',
                label: 'List',
                childMenu: [],
            }
        ],
    },
    {
        id: 'sales',
        label: 'Sales',
        icon: 'junk',
        childMenu: [
            {
                url: 'sales/new',
                label: 'New',
                childMenu: [],
            },
            {
                url: 'sales/list',
                label: 'List',
                childMenu: [],
            }
        ],
    }
];
