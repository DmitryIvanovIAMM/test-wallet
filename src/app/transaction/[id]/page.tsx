import TransactionDetail from '@/components/TransactionDetail/TransactionDetail';
import testData from '@/test-data/test-data.json';
import { Transaction } from '@/types/types';

async function getTransaction(id: string) {
  // If we trust loaded transactions list, we can use redux or context to store it.
  // But for transaction that contains fields that may be changed in time  it is preferable
  // to trust to backend only and query it on each time page loaded

  // TODO put here backend request to get transaction by id
  const transactions = testData['test-data'] as any as Transaction[];
  return transactions.find((t) => t._id === id);
}

export default async function TransactionPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const transaction = await getTransaction(id);

  return transaction ? (
    <TransactionDetail transaction={transaction} />
  ) : (
    <div className="flex font-bold text-sm justify-center bg-gray-400">Transaction not found</div>
  );
}
