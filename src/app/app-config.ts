import {SelectableValue} from './@core/class/selectable-value';

export const MainUrl = 'https://sagun-baakas-admin.herokuapp.com/';

export const configApiUrl = {
    USER_API: MainUrl + 'user',
    PRODUCT_API: MainUrl + 'product',
    LOT_API: MainUrl + 'lot',
    LOT_HISTORY_API: MainUrl + 'lotHistory',
    SALES_API: MainUrl + 'sales'
};

export const ORDER_STATUS: SelectableValue[] = [
    {code: 0, title: 'Booked'},
    {code: 1, title: 'Delivered'}
];

export const PAYMENT_STATUS: SelectableValue[] = [
    {code: 0, title: 'Unpaid'},
    {code: 1, title: 'Partial payment'},
    {code: 2, title: 'Paid'}
];
