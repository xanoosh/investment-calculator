import { ResponsivePie } from '@nivo/pie';
import AspectRatioWrapper from '../AspectRatioWrapper';
import { useMedia } from 'react-use';
import formatNumber from '../../utils/formatNumber';
import { PieChartInterface } from '../../interfaces';

export default function InflationChart({ data }: PieChartInterface) {
  const largeScreen = useMedia('(min-width: 1024px)');
  const mobileScreen = useMedia('(max-width: 500px)');
  return (
    <AspectRatioWrapper
      ratio={mobileScreen ? 1 : largeScreen ? 16 / 6 : 16 / 10}
    >
      <ResponsivePie
        data={data}
        margin={{
          top: largeScreen ? 20 : 10,
          right: 0,
          bottom: 70,
          left: 0,
        }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        borderWidth={1}
        colors={['#4ecdc4', '#f79d84']}
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
        startAngle={-80}
        tooltip={({ datum: { label, value } }) => (
          <div className="bg-slate-700 text-white py-1 px-2 rounded">
            <p className="text-sm">
              {label}: {formatNumber(value)}
            </p>
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
                  translateX: 30,
                  translateY: 50,
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
