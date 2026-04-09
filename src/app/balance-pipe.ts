import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'balance',
})
export class BalancePipe implements PipeTransform {
  transform(value: number): string {
    if (value === null || isNaN(value)) return '';

    return (
      'R ' + value.toLocaleString('en-ZA', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
    );
  }
}
