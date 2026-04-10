import { Pipe, PipeTransform } from '@angular/core';
import { Currency, exchangeRates } from '../app/accounts/accounts.model';

@Pipe({
  name: 'balance',
})
export class BalancePipe implements PipeTransform {
  transform(value: number, currency: Currency = 'ZAR'): string {
    if (value === null || value === undefined || isNaN(value)) return '';

    const convertedBalance = value * exchangeRates[currency];

    const currencyFormatOptions = {
      ZAR: { locale: 'en-ZA', symbol: 'R' },
      USD: { locale: 'en-US', symbol: '$' },
      EUR: { locale: 'de-DE', symbol: '€' },
    };

    const balanceConfig = currencyFormatOptions[currency];
    // Note : If format for balance was not specified,could use toLocaleString to add currency symbol.
    return `${balanceConfig.symbol} ${convertedBalance.toLocaleString(balanceConfig.locale, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`;
  }
}
