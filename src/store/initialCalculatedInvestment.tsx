export const initialCalculatedInvestment = {
  details: {
    total: 3343,
    inflationAdjusted: Math.round(3343 * 0.967),
    inflationRate: 3.3,
    years: 1,
  },
  formData: {
    ['Initial investment']: '1000',
    ['Annual investment']: '100',
    ['Years']: [10],
    ['Interest rate']: [7],
    ['Inflation rate (%)']: '3.3',
    ['Total expense ratio (%)']: '0',
  },
  chartData: [
    {
      id: 'Initial',
      label: 'Initial',
      description: 'The amount you initially invested',
      value: 1000,
    },
    {
      id: 'Contributions',
      label: 'Contributions',
      description: 'Total amount you contributed excluding initial investment',
      value: 1000,
    },
    {
      id: 'Interest',
      label: 'Interest',
      description: 'Compound interest of your investment',
      value: 1343,
    },
  ],
  inflationChartData: [
    {
      id: 'Earnings',
      label: 'Earnings',
      description: 'Actual inflation adjusted earnings of an investment',
      value: Math.round(3343 * 0.967),
    },
    {
      id: 'Lost',
      label: 'Lost',
      description: 'Lost purchasing power of this investment',
      value: Math.round(3343 * 0.033),
    },
  ],
};
