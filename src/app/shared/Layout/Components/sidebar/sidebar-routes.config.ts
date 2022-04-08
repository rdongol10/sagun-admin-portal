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
                id: 'user:create',
                url: 'user/new',
                label: 'New',
                childMenu: [],
            },
            {
                id: 'user:list',
                url: 'user/list',
                label: 'List',
                childMenu: [],
            }
        ],
    },
    {
        id: 'role',
        label: 'Role',
        icon: 'users',
        childMenu: [
            {
                id: 'role:create',
                url: 'role/new',
                label: 'New',
                childMenu: [],
            },
            {
                id: 'role:list',
                url: 'role/list',
                label: 'List',
                childMenu: [],
            }
        ],
    },
    {
        id: 'vendor',
        label: 'Vendor',
        icon: 'users',
        childMenu: [
            {
                id: 'vendor:create',
                url: 'vendor/new',
                label: 'New',
                childMenu: [],
            },
            {
                id: 'vendor:list',
                url: 'vendor/list',
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
                id: 'product:create',
                url: 'product/new',
                label: 'New',
                childMenu: [],
            },
            {
                id: 'product:list',
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
                id: 'purchase:create',
                url: 'purchase/new',
                label: 'New',
                childMenu: [],
            },
            {
                id: 'purchase:list',
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
                id: 'sales:create',
                url: 'sales/new',
                label: 'New',
                childMenu: [],
            },
            {
                id: 'sales:list',
                url: 'sales/list',
                label: 'List',
                childMenu: [],
            }
        ],
    },
    {
        id: 'income',
        label: 'Income',
        icon: 'cash',
        childMenu: [
            {
                id: 'income:create',
                url: 'income/new',
                label: 'New',
                childMenu: [],
            },
            {
                id: 'income:list',
                url: 'income/list',
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
                id: 'expenses:create',
                url: 'expenses/new',
                label: 'New',
                childMenu: [],
            },
            {
                id: 'expenses:list',
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
                id: 'lot:list',
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
                id: 'lotHistory:list',
                url: 'lotHistory/list',
                label: 'List',
                childMenu: [],
            }
        ],
    },
    {
        id: 'transaction',
        label: 'Transaction',
        icon: 'repeat',
        childMenu: [
            {
                url: 'transaction/paidTransaction',
                label: 'Paid transaction',
                childMenu: [],
            },
            {
                url: 'transaction/allTransaction',
                label: 'All transaction',
                childMenu: [],
            }
        ],
    }
];
