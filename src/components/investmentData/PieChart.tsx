import { ResponsivePie } from '@nivo/pie';
import AspectRatioWrapper from '../AspectRatioWrapper';

interface PieChartData {
  id: string;
  label: string;
  value: number;
}

export default function PieChart({ data }: { data: PieChartData[] }) {
  return (
    <AspectRatioWrapper ratio={16 / 10}>
      <ResponsivePie
        data={data}
        margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        borderWidth={1}
        colors={['#ffc8dd', '#cdb4db', '#bde0fe']}
        borderColor={{
          from: 'color',
          modifiers: [['darker', 0.2]],
        }}
        // enableArcLinkLabels={false}
        arcLinkLabelsColor={{ from: 'color' }}
        arcLabelsSkipAngle={20}
        arcLinkLabelsSkipAngle={2}
        arcLinkLabelsTextColor="#fff"
        arcLinkLabelsOffset={-2}
        arcLinkLabelsDiagonalLength={8}
        arcLinkLabelsThickness={2}
      />
    </AspectRatioWrapper>
  );
}
