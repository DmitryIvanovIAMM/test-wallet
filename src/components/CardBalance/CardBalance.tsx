'use client';

import { moneyFormatter } from '@/utils/moneyFormatter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';

export interface CardBalanceProps {
  cardLimit: number;
  balance: number;
  currency: string;
}

export default function CardBalance({ cardLimit, balance, currency }: CardBalanceProps) {
  return (
    <div
      className="grid grid-cols-2 gap-2 rounded-md w-full h-full p-0 pb-5"
      data-testid="card-balance-header"
    >
      <div className="grid grid-rows-2 gap-2 rounded-md">
        <div className="flex-row rounded-md bg-white w-full h-full p-2">
          <div className="font-bold text-sm">Card balance</div>
          <div className="font-bold text-2xl">{moneyFormatter(balance, currency)}</div>
          <div className="text-sm text-gray-600">
            {moneyFormatter(cardLimit - balance, currency)} Available
          </div>
        </div>
        <div className="flex flex-col rounded-md bg-white p-2 align-middle justify-center">
          <div className="font-bold text-sm justify-center">Daily points</div>
          <div className="text-sm text-gray-600 justify-center">456k</div>
        </div>
      </div>
      <div className="flex-row gap-1 rounded-md bg-white p-2">
        <div className="font-bold text-sm">No Payment Due</div>
        <div className="text-sm text-gray-600 align-middle">You pay your september balance</div>
        <div className="grid grid-cols-1 w-full h-full align-middle items-center">
          <div className="flex justify-end">
            <FontAwesomeIcon icon={faCheckCircle} color="gray" size="3x" />
          </div>
        </div>
      </div>
    </div>
  );
}
