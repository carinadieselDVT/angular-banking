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
    this.intervalId = setInterval(() => {
      if (!this.accounts || this.accounts.length === 0) return;

      // Add R10 to account balance at current index
      this.accounts[this.index].balance += 10;

      console.log(
        'Updated account :',
        this.accounts[this.index].account_name,
        this.accounts[this.index].balance,
      );

      this.changeDetector.detectChanges();

      this.index = (this.index + 1) % this.accounts.length;
    }, 10000);
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }
}

// ChangeDetectorRef notes
// From docs
// Base class that provides change detection functionality. A change-detection tree collects all views that are to be checked for changes. Use the methods to add and remove views from the tree, initiate change-detection, and explicitly mark views as dirty, meaning that they have changed and need to be re-rendered.

// AI Summary
// Why it’s needed:
// Your setInterval updates data in a way Angular might not automatically detect, so the UI wouldn’t refresh on its own.

// What it does:
// ChangeDetectorRef.detectChanges() manually tells Angular to run change detection and update the view immediately so the new balance is shown.
