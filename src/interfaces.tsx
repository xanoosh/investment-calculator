import { ReactNode } from 'react';
import { Control, FieldValues } from 'react-hook-form';

export interface FormDataInterface {
  ['Initial investment']: string;
  ['Annual investment']: string;
  ['Years']: number[];
  ['Interest rate']: number[];
  ['Inflation rate (%)']: string;
  ['Total expense ratio (%)']: string;
}

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
  formData: FormDataInterface;
  chartData: SinglePieChartDataInterface[];
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
