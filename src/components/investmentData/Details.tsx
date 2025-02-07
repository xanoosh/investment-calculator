export default function Details({ details }: { details: { total: number } }) {
  const { total } = details;
  return (
    <p className="text-center text-white">
      Total investment value:{' '}
      {total.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ' ')}
    </p>
  );
}
