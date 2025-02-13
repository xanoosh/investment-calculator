import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { initialCalculatedInvestment } from './initialCalculatedInvestment';

const getInitialCalculatedInvestment = () => {
  const calculatedInvestment = localStorage.getItem('calculatedInvestment');
  return calculatedInvestment
    ? JSON.parse(calculatedInvestment)
    : initialCalculatedInvestment;
};

type calculatedInvestmentStoreType = {
  calculatedInvestment: {
    details: {
      total: number;
      inflationAdjusted: number;
      inflationRate: number;
      years: number;
    };
    formData: {
      ['Initial investment']: string;
      ['Annual investment']: string;
      ['Years']: number[];
      ['Interest rate']: number[];
      ['Inflation rate (%)']: string;
      ['Total expense ratio (%)']: string;
    };
    chartData: {
      id: string;
      label: string;
      description: string;
      value: number;
    }[];
  };
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
