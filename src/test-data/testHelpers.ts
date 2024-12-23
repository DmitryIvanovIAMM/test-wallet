import { Transaction, TransactionType, User } from '@/types/types';

export const authorizesUser: User = {
  _id: '5f5f3b3b9b1f3b0017f3',
  name: 'John Doe',
  email: 'test.email1@email.com'
};
export const testPaymentTransaction: Transaction = {
  _id: '5f5f3b3b9b1f3b0017f3',
  transactionType: TransactionType.Payment,
  amount: 100,
  currency: 'USD',
  transactionName: 'Payment',
  transactionDescription: 'Test transaction 1',
  isPending: false,
  authorizedUser: authorizesUser,
  date: new Date('2020-09-14T00:00:00.000Z')
};
export const testCreditTransaction: Transaction = {
  _id: '5f5f3b3b9b1f3b0017f3',
  transactionType: TransactionType.Credit,
  amount: 100,
  currency: 'USD',
  transactionName: 'Credit',
  transactionDescription: 'Test transaction 2',
  isPending: false,
  authorizedUser: authorizesUser,
  date: new Date('2020-09-15T00:00:00.000Z')
};
