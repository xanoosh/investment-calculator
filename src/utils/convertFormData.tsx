import { FieldValues } from 'react-hook-form';

export default function convertFormData(
  formData:
    | {
        ['Initial investment']: string;
        ['Annual investment']: string;
        ['Years']: number[];
        ['Interest rate']: number[];
        ['Inflation rate (%)']: string;
        ['Total expense ratio (%)']: string;
      }
    | FieldValues
) {
  return {
    initialInvestment: Number(formData['Initial investment']) || 0,
    annualInvestment: Number(formData['Annual investment']) || 0,
    years: formData.Years[0] || 0,
    interestRate: formData['Interest rate'][0] || 0,
    inflationRate: Number(formData['Inflation rate (%)']) || 0,
    totalExpenseRatio: Number(formData['Total expense ratio (%)']) || 0,
  };
}
