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
  let interestYearValue = 0;
  for (let i = 0; i < years; i++) {
    interestYearValue = investmentBase * (interestRate / 100);
    totalInterest += interestYearValue;
    investmentBase = investmentBase + interestYearValue + annualInvestment;
  }

  const startingAmount = initialInvestment;
  const totalContributions = annualInvestment * years;

  const total = Math.round(startingAmount + totalContributions + totalInterest);
  const chartData = [
    {
      id: 'Total Interest',
      label: 'Total Interest',
      value: Math.round(totalInterest),
    },
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
  ];
  return {
    details: { total },
    chartData: chartData.filter(({ value }: { value: number }) => value > 0),
  };
}
