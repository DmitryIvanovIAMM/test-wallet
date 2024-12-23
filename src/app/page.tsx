import testData from '../test-data/test-data.json';
import { Transaction, User } from '@/types/types';
import TransactionsList from '@/components/TransactionsList/TransactionsList';
import CardBalance from '@/components/CardBalance/CardBalance';
import { randomIntFromInterval } from '@/utils/moneyFormatter';

export default function Home() {
  // TODO: put authorization into hook and then in Context if any
  const user = {
    _id: '5f5f3b3b9b1f3b0017f3',
    name: 'John Doe1',
    email: 'test.email1@email.com'
  } as User;
  const transactions = testData['test-data'] as any as Transaction[];

  return (
    <div className="grid items-center justify-items-center min-h-screen p-4 pb-20 gap-2 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-gray-100">
      <CardBalance cardLimit={1500} balance={randomIntFromInterval(1, 500)} currency="USD" />
      <main className="flex flex-col gap-0 row-start-2 sm:items-start">
        <TransactionsList
          user={user}
          transactions={transactions
            .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
            .slice(0, 10)}
        />
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        Pragmatic DLT test app
      </footer>
    </div>
  );
}
