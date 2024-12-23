import { TransactionType } from '@/types/types';

export const moneyFormatterWithTransactionType = (
  amount: number,
  currency: string,
  transactionType: TransactionType
) => {
  const formattedAmount = moneyFormatter(amount, currency);

  if (transactionType === TransactionType.Payment) {
    return `+${formattedAmount}`;
  } else {
    return formattedAmount;
  }
};

export const moneyFormatter = (amount: number, currency: string) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 2
  }).format(amount);
};

export const randomIntFromInterval = (min: number, max: number): number => {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
};
