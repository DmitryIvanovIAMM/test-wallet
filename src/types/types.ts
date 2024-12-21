export interface TransactionType {
  Payment: 'Payment';
  Credit: 'Credit';
}

export interface Transaction {
  _id: string;
  transactionType: TransactionType;
  amount: number;
  currency: string;
  transactionName: string;
  transactionDescription: string;
  date: Date | string;
}