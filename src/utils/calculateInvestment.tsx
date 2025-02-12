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
  const {
    initialInvestment,
    interestRate,
    years,
    annualInvestment,
    inflationRate,
    totalExpenseRatio,
  } = convertFormData(formData);

  let investmentBase = initialInvestment;
  let inflationAdjustedBase = initialInvestment;
  let totalInterest = 0;
  let interestYearValue = 0;
  for (let i = 0; i < years; i++) {
    //interest & base investment calc
    interestYearValue = investmentBase * (interestRate / 100);
    totalInterest += interestYearValue;
    investmentBase *= (100 + interestRate - totalExpenseRatio) / 100;
    investmentBase += annualInvestment;

    //inflation calc
    inflationAdjustedBase *=
      (100 + interestRate - inflationRate - totalExpenseRatio) / 100;
    inflationAdjustedBase += annualInvestment;
  }

  const startingAmount = initialInvestment;
  const totalContributions = annualInvestment * years;

  const total = Math.round(startingAmount + totalContributions + totalInterest);
  const inflationAdjusted = Math.round(inflationAdjustedBase);
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
    details: {
      total,
      inflationAdjusted,
      inflationRate,
      years,
    },
    chartData: chartData.filter(({ value }: { value: number }) => value > 0),
  };
}
