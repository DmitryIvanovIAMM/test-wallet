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
      className="flex flex-col gap-4 w-full h-screen p-2 xs:m-20 bg-gray-200 m-0 justify-start"
      data-testid="transaction-detail"
    >
      <div className="col-span-1 h-8 align-top">
        <button className="w-full text-blue-500 bg-gray-200 hover:bg-gray-200" onClick={() => {}}>
          <Link
            className="w-full inline-block align-text-bottom text-left"
            data-testid="transaction-detail-button"
            href={`/`}
          >
            {'<'}
          </Link>
        </button>
      </div>
      <div className="font-bold text-4xl w-full text-center mt-5 text-gray-800">
        {moneyFormatter(transaction.amount, transaction.currency)}
      </div>
      <div className="text-sm text-gray-600 align-middle text-center">
        {transaction.transactionName}
      </div>
      <div className="text-sm text-gray-600 align-middle text-center">
        {getDateTimeString(transaction.date)}
      </div>
      <div className="grid grid-cols-1 gap-1 rounded-md w-full p-4  bg-white mt-5">
        <div className="font-bold text-sm justify-center text-gray-800">
          {`Status: ${transaction.isPending ? 'Pending' : 'Approved'}`}
        </div>
        <div className="text-sm text-gray-600">{transaction.transactionDescription}</div>
        <hr />
        <div className="grid grid-cols-2 justify-between font-bold text-sm text-gray-800">
          <div>Total</div>
          <div className="text-right">
            {moneyFormatter(transaction.amount, transaction.currency)}
          </div>
        </div>
      </div>
    </div>
  );
}
