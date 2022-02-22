import {Pipe, PipeTransform} from '@angular/core';
import {SelectableValue} from '../../@core/class/selectable-value';
import {PAYMENT_STATUS} from '../../app-config';

@Pipe({
    name: 'paymentStatus'
})
export class PaymentStatusPipe implements PipeTransform {

    paymentStatus: SelectableValue[] = PAYMENT_STATUS;

    transform(value: number): string {
        return this.paymentStatus.find((status) => status.code === value).title;
    }

}
