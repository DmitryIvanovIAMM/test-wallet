import TransactionSmallCard, {
  TransactionCardProps
} from '@/app/components/TransactionSmallCard/TransactionSmallCard';
import { Transaction, TransactionType, User } from '@/types/types';
import { render } from '@testing-library/react';
import { moneyFormatter } from '@/utils/moneyFormatter';
import { getDateString } from '@/types/dates';

const authorizesUser: User = {
  _id: '5f5f3b3b9b1f3b0017f3',
  name: 'John Doe',
  email: 'test.email1@email.com'
};
const testTransaction: Transaction = {
  _id: '5f5f3b3b9b1f3b0017f3',
  transactionType: TransactionType.Payment,
  amount: 100,
  currency: 'USD',
  transactionName: 'Payment',
  transactionDescription: 'Test transaction',
  isPending: false,
  authorizedUser: authorizesUser,
  date: new Date()
};

const setup = (propsOverride: Partial<TransactionCardProps> = {}) => {
  const props: TransactionCardProps = {
    user: authorizesUser,
    transaction: testTransaction,
    ...propsOverride
  };

  const container = render(<TransactionSmallCard {...props} />);

  return {
    props,
    container
  };
};

describe('TransactionSmallCard component should', () => {
  it('render correctly', async () => {
    const { container } = await setup();
    expect(container).toMatchSnapshot();
  });

  it('should show transaction details', async () => {
    const { container, props } = await setup();
    expect(container.getByTestId('transaction-icon')).toBeInTheDocument();
    expect(container.getByTestId('transaction-name')).toBeInTheDocument();
    expect(container.getByText(props.transaction.transactionName)).toBeInTheDocument();
    expect(container.getByTestId('transaction-amount')).toBeInTheDocument();
    expect(
      container.getByText(
        moneyFormatter(
          props.transaction.amount,
          props.transaction.currency,
          props.transaction.transactionType
        )
      )
    ).toBeInTheDocument();
    expect(container.getByTestId('transaction-date')).toBeInTheDocument();
    expect(container.getByText(getDateString(props.transaction.date))).toBeInTheDocument();
    expect(container.getByTestId('transaction-description')).toBeInTheDocument();
    expect(container.getByText(props.transaction.transactionDescription)).toBeInTheDocument();
  });

  it('should show "Pending" prefix', async () => {
    const cardWithPendingTransaction: TransactionCardProps = {
      transaction: {
        ...testTransaction,
        isPending: true
      },
      user: authorizesUser
    };
    const { container, props } = await setup(cardWithPendingTransaction);

    expect(
      container.getByText(`Pending - ${props.transaction.transactionDescription}`)
    ).toBeInTheDocument();
  });

  it('should show user name prefix if transaction performed by not current user', async () => {
    const cardWithAlienUser: TransactionCardProps = {
      transaction: {
        ...testTransaction,
        authorizedUser: {
          ...authorizesUser,
          name: 'Diana',
          _id: '5f5f3b3b9b1f3b0017f4'
        }
      },
      user: authorizesUser
    };
    const { container, props } = await setup(cardWithAlienUser);

    expect(
      container.getByText(`Diana - ${getDateString(props.transaction.date)}`)
    ).toBeInTheDocument();
  });
});
