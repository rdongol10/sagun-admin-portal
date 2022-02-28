import {Directive, Input} from '@angular/core';
import {FormControl, NG_VALIDATORS, Validator} from '@angular/forms';

@Directive({
    selector: '[appMinMaxValidator][formControlName],[appMinMaxValidator][formControl],[appMinMaxValidator][ngModel]',
    providers: [{provide: NG_VALIDATORS, useExisting: MinMaxValidatorDirective, multi: true}]

})
export class MinMaxValidatorDirective implements Validator {
    @Input()
    min: number;

    @Input()
    max: number;

    constructor() {
    }

    validate(c: FormControl): { [key: string]: any } {
        const value = c.value;
        return (value < this.min) ? {min: true} : (value > this.max) ? {max: true} : null;
    }

}
