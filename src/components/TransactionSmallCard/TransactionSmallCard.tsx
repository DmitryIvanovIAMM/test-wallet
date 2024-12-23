'use client';

import Link from 'next/link';
import { Transaction, User } from '@/types/types';
import { getIconDefinitionByBrand } from '@/test-data/icons-set';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { moneyFormatterWithTransactionType } from '@/utils/moneyFormatter';
import './transaction-small-card.css';
import { getDateString } from '@/types/dates';

export interface TransactionCardProps {
  user: User;
  transaction: Transaction;
}

export default function TransactionSmallCard({ user, transaction }: TransactionCardProps) {
  const getDateWithUserString = (date: Date | string, user: User) => {
    const dateString = getDateString(date);
    return transaction.authorizedUser._id === user._id
      ? dateString
      : `${transaction.authorizedUser.name} - ${dateString}`;
  };

  return (
    <div className="flex-row gap-1 p-1 bg-white grid grid-cols-10">
      <div className="col-span-2 gap-1 p-1">
        <FontAwesomeIcon
          icon={getIconDefinitionByBrand(transaction.transactionName)}
          color="black"
          className="w-full h-full"
          data-testid="transaction-icon"
        />
      </div>
      <div className="col-span-7 grid-rows-3">
        <div className="flex justify-between text-gray-600">
          <div className="text-sm font-bold align-middle" data-testid="transaction-name">
            {transaction.transactionType === 'Payment' ? 'Payment' : transaction.transactionName}
          </div>
          <div className="text-sm font-bold align-text-top" data-testid="transaction-amount">
            {moneyFormatterWithTransactionType(
              transaction.amount,
              transaction.currency,
              transaction.transactionType
            )}
          </div>
        </div>
        <div
          className="text-sm text-gray-600 elipsis-row align-middle"
          data-testid="transaction-description"
        >
          {transaction.isPending
            ? `Pending - ${transaction.transactionDescription}`
            : transaction.transactionDescription}
        </div>
        <div
          className="text-sm text-gray-600 elipsis-row align-middle"
          data-testid="transaction-date"
        >
          {getDateWithUserString(transaction.date, user)}
        </div>
      </div>
      <div className="col-span-1">
        <button
          className="w-full h-full text-gray-400 bg-white hover:bg-gray-200"
          onClick={() => {}}
        >
          <Link
            className="w-full h-full inline-block align-text-bottom"
            data-testid="transaction-detail-button"
            href={`/transaction/${transaction._id}`}
          >
            {'>'}
          </Link>
        </button>
      </div>
    </div>
  );
}
