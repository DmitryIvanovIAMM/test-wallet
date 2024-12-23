import { render } from '@testing-library/react';
import TransactionsList, {
  TransactionsListProps
} from '@/components/TransactionsList/TransactionsList';
import {
  authorizesUser,
  testCreditTransaction,
  testPaymentTransaction
} from '@/test-data/testHelpers';

const setup = (propsOverride: Partial<TransactionsListProps> = {}) => {
  const props: TransactionsListProps = {
    user: authorizesUser,
    transactions: [testPaymentTransaction, testCreditTransaction],
    ...propsOverride
  };

  const container = render(<TransactionsList {...props} />);

  return {
    props,
    container
  };
};

describe('TransactionsList component should', () => {
  it('render correctly', async () => {
    const { container } = await setup();

    expect(container).toMatchSnapshot();
  });

  it('render show data', async () => {
    const { container, props } = await setup();

    expect(container.getByTestId('transactions-list-header')).toBeInTheDocument();
    expect(container.getByText('Latest transactions')).toBeInTheDocument();
    expect(container.getByTestId('transactions-list')).toBeInTheDocument();

    expect(container.getByText(props.transactions[0].transactionDescription)).toBeInTheDocument();
    expect(container.getByText(props.transactions[0].transactionName)).toBeInTheDocument();
    expect(container.getByText(props.transactions[1].transactionDescription)).toBeInTheDocument();
    expect(container.getByText(props.transactions[1].transactionName)).toBeInTheDocument();
  });
});
