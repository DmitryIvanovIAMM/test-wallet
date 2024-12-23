import { render } from '@testing-library/react';
import { moneyFormatter } from '@/utils/moneyFormatter';
import { getDateTimeString } from '@/types/dates';
import { testPaymentTransaction } from '@/test-data/testHelpers';
import TransactionDetail, {
  TransactionDetailProps
} from '@/components/TransactionDetail/TransactionDetail';

const setup = (propsOverride: Partial<TransactionDetailProps> = {}) => {
  const props: TransactionDetailProps = {
    transaction: testPaymentTransaction,
    ...propsOverride
  };

  const container = render(<TransactionDetail {...props} />);

  return {
    props,
    container
  };
};

describe('TransactionDetail component should', () => {
  it('render correctly', async () => {
    const { container } = await setup();
    expect(container).toMatchSnapshot();
  });

  it('should show transaction details', async () => {
    const { container, props } = await setup();

    expect(container.getByText(props.transaction.transactionName)).toBeInTheDocument();
    expect(
      container.queryAllByText(moneyFormatter(props.transaction.amount, props.transaction.currency))
        .length
    ).toBe(2);
    expect(container.getByText(getDateTimeString(props.transaction.date))).toBeInTheDocument();
    expect(container.getByText(props.transaction.transactionDescription)).toBeInTheDocument();
  });
});
