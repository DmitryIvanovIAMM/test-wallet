import { TransactionType } from '@/types/types';

export const moneyFormatter = (
  amount: number,
  currency: string,
  transactionType: TransactionType
) => {
  const formattedAmount = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency
  }).format(amount);

  if (transactionType === TransactionType.Payment) {
    return `+${formattedAmount}`;
  } else {
    return formattedAmount;
  }
};
