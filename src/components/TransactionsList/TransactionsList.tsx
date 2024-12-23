import { Transaction, User } from '@/types/types';
import TransactionSmallCard from '@/components/TransactionSmallCard/TransactionSmallCard';

export interface TransactionsListProps {
  user: User;
  transactions: Transaction[];
}

export default function TransactionsList({ user, transactions }: TransactionsListProps) {
  return (
    <>
      <div
        className="grid grid-cols-1 gap-0 sm:grid-cols-2 align-text-left font-bold text-gray-800 text-2xl"
        data-testid="transactions-list-header"
      >
        Latest transactions
      </div>
      <div
        className="grid grid-cols-1 gap-0 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 rounded-md"
        data-testid="transactions-list"
      >
        {transactions.map((transaction: Transaction, i: number) => (
          <TransactionSmallCard
            key={`${i}-transaction-${transaction._id}`}
            user={user}
            transaction={transaction}
          />
        ))}
      </div>
    </>
  );
}
