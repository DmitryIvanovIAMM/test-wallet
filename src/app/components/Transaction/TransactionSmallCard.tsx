import { Transaction, User } from '@/types/types';
import { getIconDefinitionByBrand } from '@/test-data/icons-set';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { moneyFormatter } from '@/utils/moneyFormatter';
import './transaction-small-card.css';
import { getDateString } from '@/types/dates';

export interface TransactionCardProps {
  user: User;
  transaction: Transaction;
}

export default function TransactionSmallCard({ user, transaction }: TransactionCardProps) {
  const getDateWithUserString = (date: Date | string, user: User) => {
    const dateString = getDateString(date);
    return transaction.authorizedUser._id === user._id
      ? dateString
      : `${transaction.authorizedUser.name} - ${dateString}`;
  };

  return (
    <div className="flex-row gap-1 p-1 bg-gray-100 grid grid-cols-10">
      <div className="col-span-2 c p-2">
        <FontAwesomeIcon
          icon={getIconDefinitionByBrand(transaction.transactionName)}
          color="black"
        />
      </div>
      <div className="col-span-7 grid-rows-3">
        <div className="flex justify-between text-gray-600">
          <div className="text-sm font-bold align-text-top">
            {transaction.transactionType === 'Payment' ? 'Payment' : transaction.transactionName}
          </div>
          <div className="text-sm font-bold align-text-top">
            {moneyFormatter(transaction.amount, transaction.currency, transaction.transactionType)}
          </div>
        </div>
        <div className="text-sm text-gray-600 elipsis-row align-middle">
          {transaction.isPending
            ? `Pending - ${transaction.transactionDescription}`
            : transaction.transactionDescription}
        </div>
        <div className="text-sm text-gray-600 elipsis-row align-middle">
          {getDateWithUserString(transaction.date, user)}
        </div>
      </div>
      <div className="col-span-1"></div>
    </div>
  );
}
