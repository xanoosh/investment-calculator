export default function Details({
  investmentData,
}: {
  investmentData: {
    details: { total: number };
    chartData: {
      id: string;
      label: string;
      description: string;
      value: number;
    }[];
  };
}) {
  const formatNumber = (number: number) =>
    number.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ' ');
  return (
    <div className="flex flex-col gap-2">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <div className="flex flex-col gap-2 py-2 px-5 bg-white/5 rounded-md">
          <div className="flex justify-between text-white">
            <p className="font-semibold">Investment value:</p>
            <p>{formatNumber(investmentData.details.total)}</p>
          </div>
          <p className="text-slate-300 text-xs">The total investment</p>
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
