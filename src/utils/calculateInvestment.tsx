export default function calculateInvestment(
  initialInvestment?: number,
  yearlyInvestment?: number,
  years?: number[],
  interestRate?: number[]
) {
  if (!initialInvestment || !yearlyInvestment || !years || !interestRate) {
    return { totalInterest: 0, chartData: [] };
  }

  let investmentBase = initialInvestment;
  let totalInterest = 0;
  for (let i = 0; i < years[0]; i++) {
    totalInterest += investmentBase * (interestRate[0] / 100);
    investmentBase += totalInterest;
    investmentBase += yearlyInvestment;
  }

  const startingAmount = initialInvestment;
  const totalContributions = yearlyInvestment * years[0];

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
