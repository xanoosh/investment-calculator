import { ReactNode } from 'react';
import { Control, FieldValues } from 'react-hook-form';

export interface SinglePieChartDataInterface {
  id: string;
  label: string;
  description: string;
  value: number;
}

export interface CalculatedInvestmentInterface {
  details: {
    total: number;
    inflationAdjusted: number;
    inflationRate: number;
    years: number;
  };
  formData: FieldValues;
  chartData: SinglePieChartDataInterface[];
  inflationChartData: SinglePieChartDataInterface[];
}

export interface BuildInvestmentObjectInterface {
  totalInterest: number;
  startingAmount: number;
  totalContributions: number;
  total: number;
  inflationAdjusted: number;
  inflationRate: number;
  years: number;
  formData: FieldValues;
}

export interface CalculateInvestmentYearsInterface {
  initialInvestment: number;
  interestRate: number;
  years: number;
  annualInvestment: number;
  inflationRate: number;
  totalExpenseRatio: number;
}

//components

export interface DialogInterface {
  title: string;
  content: ReactNode;
  triggerContent: ReactNode;
  triggerClasses?: string;
}

export interface PieChartInterface {
  data: SinglePieChartDataInterface[];
}

export interface DetailsInterface {
  investmentData: CalculatedInvestmentInterface;
}

export interface AspectRatioWrapperInterface {
  children: ReactNode;
  ratio: number;
}

export interface InputInterface {
  name: string;
  control: Control<FieldValues>;
  defaultValue?: string;
  type?: string;
}

export interface SliderInterface {
  name: string;
  control: Control<FieldValues>;
  defaultValue?: number[];
  maxValue?: number;
  minValue?: number;
  step?: number;
  displayValue?: boolean;
  symbol?: string;
}
