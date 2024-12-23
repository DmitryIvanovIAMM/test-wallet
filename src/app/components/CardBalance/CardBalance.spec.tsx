import { render } from '@testing-library/react';
import CardBalance, { CardBalanceProps } from '@/app/components/CardBalance/CardBalance';
import { moneyFormatter } from '@/utils/moneyFormatter';

const setup = (propsOverride: Partial<CardBalanceProps> = {}) => {
  const props: CardBalanceProps = {
    cardLimit: 1500,
    balance: 200,
    currency: 'USD',
    ...propsOverride
  };

  const container = render(<CardBalance {...props} />);

  return {
    props,
    container
  };
};

describe('CardBalanceProps component should', () => {
  it('render correctly', async () => {
    const { container } = await setup();

    expect(container).toMatchSnapshot();
  });

  it('render show data', async () => {
    const { container, props } = await setup();

    expect(container.getByText(moneyFormatter(props.balance, props.currency))).toBeInTheDocument();
    expect(
      container.getByText(
        `${moneyFormatter(props.cardLimit - props.balance, props.currency)} Available`
      )
    ).toBeInTheDocument();
    expect(container.getByText('Daily points')).toBeInTheDocument();
  });
});
