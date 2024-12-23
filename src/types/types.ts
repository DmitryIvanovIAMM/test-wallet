export enum TransactionType {
  Payment = 'Payment',
  Credit = 'Credit'
}

export interface Transaction {
  _id: string;
  transactionType: TransactionType;
  amount: number;
  currency: string;
  transactionName: string;
  transactionDescription: string;
  isPending: boolean;
  authorizedUser: User;
  date: Date | string;
}

export interface User {
  _id: string;
  name: string;
  email: string;
}
