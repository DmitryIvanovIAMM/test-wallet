import testData from '../test-data/test-data.json';
import { Transaction } from '@/types/types';
import TransactionsList from '@/app/components/TransactionsList/TransactionsList';

export default function Home() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const transactions = testData['test-data'] as any as Transaction[];

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <TransactionsList transactions={transactions} />
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        Pragmatic DLT test app
      </footer>
    </div>
  );
}
