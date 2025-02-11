import formatNumber from '../../utils/formatNumber';

export default function Details({
  investmentData,
}: {
  investmentData: {
    details: {
      total: number;
      inflationAdjusted: number;
      inflationRate: number;
      years: number;
    };
    chartData: {
      id: string;
      label: string;
      description: string;
      value: number;
    }[];
  };
}) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2 py-2 px-5 bg-white/5 rounded-md">
          <div className="flex justify-between text-white">
            <p className="font-semibold">Investment value:</p>
            <p>{formatNumber(investmentData.details.total)}</p>
          </div>
          <p className="text-slate-300 text-xs">The total investment value</p>
        </div>
        <div className="flex flex-col gap-2 py-2 px-5 bg-white/5 rounded-md">
          <div className="flex justify-between text-white">
            <p className="font-semibold">Inflation adjusted value:</p>
            <p>{formatNumber(investmentData.details.inflationAdjusted)}</p>
          </div>
          <p className="text-slate-300 text-xs">
            Approximate purchasing power of your investment after{' '}
            <strong className="text-nowrap">
              {investmentData.details.years}{' '}
              {investmentData.details.years === 1 ? 'year' : 'years'}
            </strong>
            , assuming the inflation rate averages at{' '}
            <strong>{investmentData.details.inflationRate}%</strong> per year.
          </p>
        </div>
        {investmentData.chartData.map((data) => (
          <div
            key={data.id}
            className="flex flex-col gap-2 py-2 px-5 bg-white/5 rounded-md"
          >
            <div className="flex justify-between text-white">
              <p className="font-semibold">{data.label}:</p>
              <p>{formatNumber(data.value)}</p>
            </div>
            <p className="text-slate-300 text-xs">{data.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
