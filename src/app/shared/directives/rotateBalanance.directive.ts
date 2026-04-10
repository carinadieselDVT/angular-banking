import { ChangeDetectorRef, Directive, Input, OnDestroy, OnInit } from '@angular/core';
import { Account } from '../../accounts/accounts.model';

@Directive({
  selector: '[appRotateBalance]',
  standalone: true,
})
export class RotateBalanceDirective implements OnInit, OnDestroy {
  @Input('appRotateBalance') accounts!: Account[];

  private index = 0;
  private intervalId: any;

  constructor(private readonly changeDetector: ChangeDetectorRef) {}

  ngOnInit() {
    // Use interval because useTimeout only runs once after specified time
    this.intervalId = setInterval(() => {
      if (!this.accounts || this.accounts.length === 0) return;

      // Add R10 to account balance at current index
      this.accounts[this.index].balance += 10;

      this.changeDetector.detectChanges();

      this.index = (this.index + 1) % this.accounts.length;
    }, 10000);
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }
}
