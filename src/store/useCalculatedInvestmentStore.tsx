import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { initialCalculatedInvestment } from './initialCalculatedInvestment';
import { CalculatedInvestmentInterface } from '../interfaces';

const getInitialCalculatedInvestment = () => {
  const calculatedInvestment = localStorage.getItem('calculatedInvestment');
  return calculatedInvestment
    ? JSON.parse(calculatedInvestment)
    : initialCalculatedInvestment;
};

type calculatedInvestmentStoreType = {
  calculatedInvestment: CalculatedInvestmentInterface;
  update: (
    calculatedInvestment: calculatedInvestmentStoreType['calculatedInvestment']
  ) => void;
};

export const useCalculatedInvestmentStore = create(
  persist<calculatedInvestmentStoreType>(
    (set) => ({
      calculatedInvestment: getInitialCalculatedInvestment(),
      update: (
        newCalculatedInvestment: calculatedInvestmentStoreType['calculatedInvestment']
      ) => set(() => ({ calculatedInvestment: newCalculatedInvestment })),
    }),
    {
      name: 'calculatedInvestment',
    }
  )
);
