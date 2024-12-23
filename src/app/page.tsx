import testData from '../test-data/test-data.json';
import { Transaction, User } from '@/types/types';
import TransactionsList from '@/app/components/TransactionsList/TransactionsList';

export default function Home() {
  // TODO: put authorization into hook and then in Context if any
  const user = {
    _id: '5f5f3b3b9b1f3b0017f3',
    name: 'John Doe1',
    email: 'test.email1@email.com'
  } as User;
  const transactions = testData['test-data'] as any as Transaction[];

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <TransactionsList user={user} transactions={transactions.slice(0, 10)} />
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        Pragmatic DLT test app
      </footer>
    </div>
  );
}
