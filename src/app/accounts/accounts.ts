import { Component } from '@angular/core';
import bankdata from '../mockData.json';
import { BalancePipe } from '../balance-pipe';
import { NgFor, NgIf } from '@angular/common';
import { Account } from './accounts.model';
import { DetailsComponent } from '../details/details';
import { RotateBalanceDirective } from '../shared/directives/rotateBalanance.directive';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-accounts',
  imports: [
    DetailsComponent,
    BalancePipe,
    RotateBalanceDirective,
    MatProgressSpinnerModule,
    MatRadioModule,
    ReactiveFormsModule,
  ],
  templateUrl: './accounts.html',
  styleUrl: './accounts.css',
})
export class Accounts {
  // Seperate copy of data so original data is not overwritten/mutated when balance changes
  accounts = bankdata.map((account) => ({
    ...account,
    bank_details: { ...account.bank_details },
  }));

  selectedAccount: Account | null = null;

  selectedCurrency = new FormControl<'ZAR' | 'USD' | 'EUR'>('ZAR');

  viewDetails(account: Account) {
    this.selectedAccount = account;
  }
}
