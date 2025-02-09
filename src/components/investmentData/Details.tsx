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
      <p className="text-white">
        Total investment value: {formatNumber(investmentData.details.total)}
      </p>
      <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
        {investmentData.chartData.map((data) => (
          <div
            key={data.id}
            className="flex flex-col gap-1 p-2 bg-white/5 rounded-md"
          >
            <p className="text-white font-semibold">
              {data.label}: {formatNumber(data.value)}
            </p>
            <p className="text-slate-300 text-xs">{data.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
