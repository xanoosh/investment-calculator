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
  const investmentYearsArr = [0];
  const investmentRoiAdjustedYearsArr = [0];
  for (let i = 0; i < years; i++) {
    // investment & roi arr calc
    investmentYearsArr.push(
      Math.round((investmentBase *= (100 + interestRate) / 100))
    );
    investmentRoiAdjustedYearsArr.push(
      Math.round(
        (investmentBase *= (100 + interestRate - totalExpenseRatio) / 100)
      )
    );
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
    investmentRoiAdjustedYearsArr,
  };
}
