import { Component } from '@angular/core';
import bankdata from '../mockData.json';
import { NgForOf } from '../../../node_modules/@angular/common/types/_common_module-chunk';

@Component({
  selector: 'app-accounts',
  imports: [NgForOf],
  templateUrl: './accounts.html',
  styleUrl: './accounts.css',
})
export class Accounts {
  accounts = bankdata;
}
