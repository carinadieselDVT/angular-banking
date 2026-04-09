import { Component } from '@angular/core';
import bankdata from '../mockData.json';
import { BalancePipe } from '../balance-pipe';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-accounts',
  imports: [NgFor, BalancePipe],
  templateUrl: './accounts.html',
  styleUrl: './accounts.css',
})
export class Accounts {
  accounts = bankdata;
}
