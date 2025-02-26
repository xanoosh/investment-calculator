import { CalculateInvestmentYearsInterface } from '../interfaces';

export default function calculateInvestmentYears({
  initialInvestment,
  interestRate,
  years,
  annualInvestment,
  inflationRate,
  totalExpenseRatio,
}: CalculateInvestmentYearsInterface) {
  let investmentBase = initialInvestment;
  let inflationAdjustedBase = initialInvestment;
  let totalInterest = 0;
  let interestYearValue = 0;
  const investmentYearsArr = [];
  const investmentTerAdjustedYearsArr = [];
  let investmentArrEl = initialInvestment;
  let investmentTerArrEl = initialInvestment;
  for (let i = 0; i < years; i++) {
    // investment & ter arr calc
    investmentArrEl *= (100 + interestRate) / 100;
    investmentTerArrEl *= (100 + interestRate - totalExpenseRatio) / 100;
    investmentYearsArr.push(Math.round(investmentArrEl));
    investmentTerAdjustedYearsArr.push(Math.round(investmentTerArrEl));
    investmentArrEl += annualInvestment;
    investmentTerArrEl += annualInvestment;
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

  return {
    total,
    inflationAdjusted,
    startingAmount,
    totalContributions,
    totalInterest,
    investmentYearsArr,
    investmentTerAdjustedYearsArr,
  };
}
