import { Attribute, Component, EventEmitter, Input, Output } from '@angular/core';
import { Account } from '../accounts/accounts.model';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
  template: `
    <h3>Details</h3>
    <h3>{{ accountName }}</h3>
    <p>Bank: {{ account.bank_details.bank_name }}</p>
    <p>Account #: {{ account.bank_details.account_number }}</p>
    <p>Branch: {{ account.bank_details.branch_code }}</p>
    <p>Type: {{ account.bank_details.account_type }}</p>
    <button type="button" (click)="closeDetails()">Close</button>
  `,
  styles: [],
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
