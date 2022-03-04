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
        id: 'purchase',
        label: 'Purchase',
        icon: 'shopbag',
        childMenu: [
            {
                url: 'purchase/new',
                label: 'New',
                childMenu: [],
            },
            {
                url: 'purchase/list',
                label: 'List',
                childMenu: [],
            }
        ],
    },
    {
        id: 'sales',
        label: 'Sales',
        icon: 'cart',
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
    },
    {
        id: 'expenses',
        label: 'Expenses',
        icon: 'calculator',
        childMenu: [
            {
                url: 'expenses/new',
                label: 'New',
                childMenu: [],
            },
            {
                url: 'expenses/list',
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
                url: 'lot/list',
                label: 'List',
                childMenu: [],
            }
        ],
    },
    {
        id: 'lotHistory',
        label: 'Lot History',
        icon: 'news-paper',
        childMenu: [
            {
                url: 'lotHistory/list',
                label: 'List',
                childMenu: [],
            }
        ],
    }
];
