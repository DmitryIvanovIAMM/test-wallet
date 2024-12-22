import { Transaction } from '@/types/types';
import { getIconDefinitionByBrand } from '@/test-data/icons-set';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export interface TransactionCardProps {
  transaction: Transaction;
}

export default function TransactionSmallCard({ transaction }: TransactionCardProps) {
  return (
    <div className="flex flex-row gap-2 p-4 bg-gray-100 rounded-md shadow-md">
      <FontAwesomeIcon icon={getIconDefinitionByBrand(transaction.transactionName)} />
      <div className="flex justify-between">
        <div className="text-lg font-bold">{transaction.transactionName}</div>
        <div className="text-lg font-bold">
          {transaction.amount} {transaction.currency}
        </div>
      </div>
      <div className="text-sm text-gray-600">{transaction.transactionDescription}</div>
      {/*<div className="text-sm text-gray-600">{transaction.date}</div>*/}
    </div>
  );
}
