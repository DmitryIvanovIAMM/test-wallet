import { Transaction } from '@/types/types';
import TransactionSmallCard from '@/app/components/Transaction/TransactionSmallCard';

export interface TransactionsListProps {
  transactions: Transaction[];
}

export default function TransactionsList({ transactions }: TransactionsListProps) {
  console.log('TransactionsList().  transactions:', transactions);

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {transactions.map((transaction: Transaction) => (
        <TransactionSmallCard key={transaction._id} transaction={transaction} />
      ))}
    </div>
  );
}
