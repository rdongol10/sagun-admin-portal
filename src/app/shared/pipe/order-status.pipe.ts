import {Pipe, PipeTransform} from '@angular/core';
import {SelectableValue} from '../../@core/class/selectable-value';
import {ORDER_STATUS} from '../../app-config';

@Pipe({
    name: 'orderStatus'
})
export class OrderStatusPipe implements PipeTransform {

    orderStatus: SelectableValue[] = ORDER_STATUS;

    transform(value: number): string {

      return this.orderStatus.find((status) => status.code === value).title;

    }

}
