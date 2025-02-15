import convertFormData from './convertFormData';
import calculateInvestmentYears from './calculateInvestmentYears';
import buildInvestmentObject from './buildInvestmentObject';
import { FieldValues } from 'react-hook-form';

export default function calculateInvestment(formData: FieldValues) {
  const {
    initialInvestment,
    interestRate,
    years,
    annualInvestment,
    inflationRate,
    totalExpenseRatio,
  } = convertFormData(formData);
  const {
    total,
    inflationAdjusted,
    startingAmount,
    totalContributions,
    totalInterest,
  } = calculateInvestmentYears({
    initialInvestment,
    interestRate,
    years,
    annualInvestment,
    inflationRate,
    totalExpenseRatio,
  });
  return buildInvestmentObject({
    totalInterest,
    startingAmount,
    totalContributions,
    total,
    inflationAdjusted,
    inflationRate,
    years,
    formData,
  });
}
