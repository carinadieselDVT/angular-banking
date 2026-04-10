export interface BankDetails {
  bank_name: string;
  account_number: string;
  branch_code: string;
  account_type: string;
}

export interface Account {
  account_name: string;
  balance: number;
  status: string;
  bank_details: BankDetails;
}

export type Currency = 'ZAR' | 'USD' | 'EUR';

// Exchange rate generated with AI to be able to provide a basic currency switch functionality
export const exchangeRates: Record<Currency, number> = {
  ZAR: 1,
  USD: 0.055,
  EUR: 0.051,
};
