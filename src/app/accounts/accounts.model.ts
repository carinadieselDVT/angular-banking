export type AccountStatus = 'active' | 'inactive';

export interface BankDetails {
  bank_name: string;
  account_number: string;
  branch_code: string;
  account_type: string;
}

export interface BankAccount {
  account_name: string;
  balance: number;
  status: AccountStatus;
  bank_details: BankDetails;
}
