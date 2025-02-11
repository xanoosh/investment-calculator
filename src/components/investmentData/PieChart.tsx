import { ResponsivePie } from '@nivo/pie';
import AspectRatioWrapper from '../AspectRatioWrapper';
import { useMedia } from 'react-use';
import formatNumber from '../../utils/formatNumber';

interface PieChartData {
  id: string;
  label: string;
  value: number;
}

export default function PieChart({ data }: { data: PieChartData[] }) {
  const largeScreen = useMedia('(min-width: 768px)');
  const mobileScreen = useMedia('(max-width: 500px)');
  return (
    <AspectRatioWrapper ratio={largeScreen ? 16 / 10 : 1}>
      <ResponsivePie
        data={data}
        margin={{
          top: 0,
          right: 0,
          bottom: largeScreen ? 20 : 70,
          left: 0,
        }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        borderWidth={1}
        colors={['#bde0fe', '#ffc8dd', '#cdb4db']}
        // colors={['#06d6a0', '#ef476f', '#ffd166']}
        // colors={['#BDE0FE', '#FFD1CF', '#FBFFBD']}
        // colors={[' #9381ff', '#b8b8ff', '#e8e8ff']}
        // colors={['#9381ff', '#b8b8ff', '#f8f7ff']}
        // colors={['#06d6a0', '#ffa1ad', '#ffd166']}
        // colors={['#ffa1ad ', '#a1ffeb ', '#ffd1a1 ']}
        borderColor={{
          from: 'color',
          modifiers: [['darker', 0.2]],
        }}
        enableArcLinkLabels={largeScreen}
        arcLabel={(e) => formatNumber(e.value)}
        arcLinkLabelsColor={{ from: 'color' }}
        arcLabelsSkipAngle={20}
        arcLinkLabelsSkipAngle={15}
        arcLinkLabelsTextColor="#fff"
        arcLinkLabelsOffset={-2}
        arcLinkLabelsDiagonalLength={8}
        arcLinkLabelsThickness={2}
        tooltip={({ datum: { label, value } }) => (
          <div className="bg-slate-700 text-white py-2 px-5 rounded">
            <p className="font-semibold">{label}</p>
            <p>{formatNumber(value)}</p>
          </div>
        )}
        legends={
          largeScreen
            ? []
            : [
                {
                  anchor: 'bottom-left',
                  direction: 'column',
                  justify: false,
                  translateX: 0,
                  translateY: mobileScreen ? 50 : 0,
                  itemsSpacing: 3,
                  itemWidth: 100,
                  itemHeight: 18,
                  itemTextColor: '#fff',
                  itemDirection: 'left-to-right',
                  itemOpacity: 1,
                  symbolSize: 18,
                  symbolShape: 'circle',
                },
              ]
        }
      />
    </AspectRatioWrapper>
  );
}
