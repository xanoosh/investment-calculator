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
          bottom: 10,
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
        tooltip={({ datum: { label } }) => (
          <div className="bg-slate-700 text-white py-1 px-2 rounded">
            <p className="text-sm font-semibold">
              {data.find((el) => el.label === label)?.description}
            </p>
          </div>
        )}
      />
    </AspectRatioWrapper>
  );
}
