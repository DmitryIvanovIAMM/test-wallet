import { Transaction, User } from '@/types/types';
import TransactionSmallCard from '@/app/components/Transaction/TransactionSmallCard';

export interface TransactionsListProps {
  user: User;
  transactions: Transaction[];
}

export default function TransactionsList({ user, transactions }: TransactionsListProps) {
  return (
    <div className="grid grid-cols-1 gap-0 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 rounded-md">
      {transactions.map((transaction: Transaction) => (
        <TransactionSmallCard key={transaction._id} user={user} transaction={transaction} />
      ))}
    </div>
  );
}
