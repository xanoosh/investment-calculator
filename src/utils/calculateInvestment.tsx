export default function calculateInvestment({
  initialInvestment,
  monthlyInvestment,
  years,
  interestRate,
}: {
  initialInvestment: number;
  monthlyInvestment: number;
  years: number;
  interestRate: number;
}) {
  let total = initialInvestment;
  for (let i = 0; i < years; i++) {
    total += total * (interestRate / 100);
    total += monthlyInvestment * 12;
  }

  const chartData = [
    {
      id: 'Starting Amount',
      label: 'Starting Amount',
      value: 300,
    },
    {
      id: 'Total Contributions',
      label: 'Total Contributions',
      value: 700,
    },
    {
      id: 'Total Interest',
      label: 'Total Interest',
      value: 750,
    },
  ];

  return { total, chartData };
}
