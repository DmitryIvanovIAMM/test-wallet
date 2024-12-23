'use client';

import { Transaction } from '@/types/types';
import { moneyFormatter } from '@/utils/moneyFormatter';
import { getDateTimeString } from '@/types/dates';
import Link from 'next/link';

export interface TransactionDetailProps {
  transaction: Transaction;
}
export default function TransactionDetail({ transaction }: TransactionDetailProps) {
  return (
    <div
      className="grid grid-cols-1 gap-4 w-full h-full p-2 xs:m-20 bg-gray-200 pb-20 align-top"
      data-testid="transaction-detail"
    >
      <div className="col-span-1">
        <button
          className="w-full h-full text-blue-500 bg-gray-200 hover:bg-gray-200"
          onClick={() => {}}
        >
          <Link
            className="w-full h-full inline-block align-text-bottom text-left"
            data-testid="transaction-detail-button"
            href={`/`}
          >
            {'<'}
          </Link>
        </button>
      </div>
      <div className="font-bold text-4xl w-full text-center mt-5">
        {moneyFormatter(transaction.amount, transaction.currency)}
      </div>
      <div className="text-sm text-gray-600 align-middle text-center">
        {transaction.transactionName}
      </div>
      <div className="text-sm text-gray-600 align-middle text-center">
        {getDateTimeString(transaction.date)}
      </div>
      <div className="grid grid-cols-1 gap-1 rounded-md w-full h-full p-4  bg-white mt-5">
        <div className="font-bold text-sm justify-center">
          {`Status: ${transaction.isPending ? 'Pending' : 'Approved'}`}
        </div>
        <div className="text-sm text-gray-600">{transaction.transactionDescription}</div>
        <hr />
        <div className="grid grid-cols-2 justify-between font-bold text-sm">
          <div>Total</div>
          <div className="text-right">
            {moneyFormatter(transaction.amount, transaction.currency)}
          </div>
        </div>
      </div>
    </div>
  );
}