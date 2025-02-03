import { ResponsivePie } from '@nivo/pie';

const data = ['slices', 'of', 'pie'].map((label, index) => ({
  id: label,
  label,
  value: Math.random() * 100,
  color: `hsl(${index * 60}, 70%, 50%)`,
}));

export default function PieChart() {
  return (
    <div>
      <h1>Pie Chart</h1>
      <ResponsivePie data={data} />
    </div>
  );
}
