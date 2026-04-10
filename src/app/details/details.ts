import { Attribute, Component, EventEmitter, Input, Output } from '@angular/core';
import { Account } from '../accounts/accounts.model';
import {
  MatCard,
  MatCardHeader,
  MatCardTitle,
  MatCardSubtitle,
  MatCardActions,
} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [MatCard, MatCardHeader, MatCardTitle, MatCardSubtitle, MatCardActions, MatButtonModule],
  template: `
    <mat-card appearance="outlined">
      <mat-card-header>
        <mat-card-title>{{ accountName }}</mat-card-title>
        <mat-card-subtitle>Bank: {{ account.bank_details.bank_name }}</mat-card-subtitle>
        <mat-card-subtitle>Account #: {{ account.bank_details.account_number }}</mat-card-subtitle>
        <mat-card-subtitle>Branch: {{ account.bank_details.branch_code }}</mat-card-subtitle>
        <mat-card-subtitle>Type: {{ account.bank_details.account_type }}</mat-card-subtitle>
      </mat-card-header>
      <mat-card-actions>
        <button mat-button (click)="closeDetails()">Close Details</button>
      </mat-card-actions>
    </mat-card>
  `,
  styles: `
    mat-card {
      min-height: 100px;
      width: 500px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  `,
})
export class DetailsComponent {
  // Account will always have a value. ! is a "pinky- promise" to typescript
  @Input() account!: Account;
  //   Retrieves the HTML attribute value directly from the component's host element.
  constructor(@Attribute('account-name') public accountName: string) {}

  @Output() closed = new EventEmitter<void>();

  @Input() currency: 'ZAR' | 'USD' | 'EUR' = 'ZAR';

  closeDetails() {
    this.closed.emit();
  }
}
