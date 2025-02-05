import { FieldValues } from 'react-hook-form';
import convertFormData from './convertFormData';

export default function calculateInvestment(
  formData:
    | {
        ['Initial investment']: string;
        ['Annual investment']: string;
        years: number[];
        ['Interest rate']: number[];
      }
    | FieldValues
) {
  const { initialInvestment, interestRate, years, annualInvestment } =
    convertFormData(formData);
  let investmentBase = initialInvestment;
  let totalInterest = 0;
  for (let i = 0; i < years; i++) {
    totalInterest += investmentBase * (interestRate / 100);
    investmentBase += totalInterest;
    investmentBase += annualInvestment;
  }

  const startingAmount = initialInvestment;
  const totalContributions = annualInvestment * years;

  const chartData = [
    {
      id: 'Starting Amount',
      label: 'Starting Amount',
      value: startingAmount,
    },
    {
      id: 'Total Contributions',
      label: 'Total Contributions',
      value: totalContributions,
    },
    {
      id: 'Total Interest',
      label: 'Total Interest',
      value: Math.round(totalInterest),
    },
  ];

  return { totalInterest, chartData };
}
