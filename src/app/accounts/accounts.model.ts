export interface BankDetails {
  bank_name: string;
  account_number: string;
  branch_code: string;
  account_type: string;
}

export interface Account {
  account_name: string;
  balance: number;
  bank_details: BankDetails;
}
