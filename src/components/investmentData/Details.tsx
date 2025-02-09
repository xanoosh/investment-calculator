export default function Details({
  investmentData,
}: {
  investmentData: {
    details: { total: number };
    chartData: { id: string; label: string; value: number }[];
  };
}) {
  const formatNumber = (number: number) =>
    number.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ' ');
  return (
    <div className="flex flex-col gap-2">
      <p className="text-white">
        Total investment value: {formatNumber(investmentData.details.total)}
      </p>
      <p className="text-xs text-slate-300">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae,
        perferendis? Consectetur exercitationem mollitia, quo.
      </p>
      <p className="text-white">Random value: 11 002 038</p>
      <p className="text-xs text-slate-300">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae,
        perferendis?
      </p>
    </div>
  );
}
