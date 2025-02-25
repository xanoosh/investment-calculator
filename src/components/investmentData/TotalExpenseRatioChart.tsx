import AspectRatioWrapper from '../AspectRatioWrapper';
import { useMedia } from 'react-use';
import { ResponsiveLine } from '@nivo/line';
import { LineChartInterface } from '../../interfaces';
import { chartCustomTheme } from '../../globals/chartCustomTheme';

export default function TotalExpenseRatioChart({ data }: LineChartInterface) {
  // const largeScreen = useMedia('(min-width: 1024px)');
  const mobileScreen = useMedia('(max-width: 500px)');

  return (
    <AspectRatioWrapper ratio={mobileScreen ? 16 / 12 : 16 / 6}>
      <ResponsiveLine
        data={data}
        theme={chartCustomTheme}
        enableArea={true}
        colors={['rgb(255, 71, 133)', 'rgb(31, 138, 219)']}
        margin={{ top: 0, right: 0, bottom: mobileScreen ? 30 : 50, left: 20 }}
        xScale={{ type: 'point' }}
        yScale={{
          type: 'linear',
          min: 0,
          // max: data[0].data[Date.length - 1].y,
          // stacked: true,
          // reverse: false,
        }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        // axisBottom={null}
        axisBottom={
          mobileScreen
            ? null
            : {
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'years',
                legendOffset: 36,
                legendPosition: 'middle',
                truncateTickAt: 0,
              }
        }
        pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabel="data.yFormatted"
        pointLabelYOffset={-12}
        enableTouchCrosshair={true}
        useMesh={true}
      />
    </AspectRatioWrapper>
  );
}
