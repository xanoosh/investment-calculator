import convertFormData from './convertFormData';
import { FormDataInterface } from '../interfaces';
import calculateInvestmentYears from './calculateInvestmentYears';
import buildInvestmentObject from './buildInvestmentObject';

export default function calculateInvestment(formData: FormDataInterface) {
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
