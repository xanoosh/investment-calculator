import { BuildInvestmentObjectInterface } from '../interfaces';

export default function buildInvestmentObject({
  totalInterest,
  startingAmount,
  totalContributions,
  total,
  inflationAdjusted,
  inflationRate,
  years,
  formData,
}: BuildInvestmentObjectInterface) {
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

  const inflationChartData = [
    {
      id: 'Earnings',
      label: 'Earnings',
      description: 'Actual inflation adjusted earnings of an investment',
      value: inflationAdjusted,
    },
    {
      id: 'Lost',
      label: 'Lost',
      description: 'Lost purchasing power of this investment',
      value: total - inflationAdjusted,
    },
  ];

  return {
    details: {
      total,
      inflationAdjusted,
      inflationRate,
      years,
    },
    formData,
    chartData: chartData.filter(({ value }: { value: number }) => value > 0),
    inflationChartData,
  };
}
