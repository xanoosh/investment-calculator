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
      id: 'Interest',
      label: 'Interest',
      description: 'Compound interest of your investment',
      value: Math.round(totalInterest),
    },
    {
      id: 'Initial',
      label: 'Initial',
      description: 'The amount you initially invested',
      value: startingAmount,
    },
    {
      id: 'Contributions',
      label: 'Contributions',
      description: 'Total amount you contributed excluding initial investment',
      value: totalContributions,
    },
  ];
  return {
    details: { total },
    chartData: chartData.filter(({ value }: { value: number }) => value > 0),
  };
}
