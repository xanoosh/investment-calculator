import AspectRatioWrapper from '../AspectRatioWrapper';
import { useMedia } from 'react-use';
import { ResponsiveLine } from '@nivo/line';
import { LineChartInterface } from '../../interfaces';
import { whiteLineChartTheme } from '../../globals/whiteLineChartTheme';
import formatNumber from '../../utils/formatNumber';
export default function TotalExpenseRatioChart({ data }: LineChartInterface) {
  const mediumScreen = useMedia('(max-width: 768px)');
  const mobileScreen = useMedia('(max-width: 500px)');

  return (
    <AspectRatioWrapper ratio={mobileScreen ? 16 / 12 : 16 / 6}>
      <ResponsiveLine
        data={data}
        theme={whiteLineChartTheme}
        enableArea={true}
        colors={['rgb(31, 138, 219)', 'rgb(255, 71, 133)']}
        margin={{
          top: 10,
          right: 10,
          bottom: mobileScreen ? 30 : 50,
          left: 10,
        }}
        xScale={{ type: 'point' }}
        yScale={{
          type: 'linear',
          min: 0,
        }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          format: mediumScreen ? () => '' : (val) => val,
        }}
        axisLeft={{ format: () => '' }}
        pointSize={mobileScreen ? 5 : 10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabel="data.yFormatted"
        pointLabelYOffset={-12}
        enableTouchCrosshair={true}
        useMesh={true}
        enableSlices="x"
        sliceTooltip={({ slice }) => {
          return (
            <div className="bg-slate-700 text-white py-1 px-2 rounded">
              <p className="text-sm mb-2 mt-1">
                Year: {slice.points[0].data.xFormatted}
              </p>
              {[...slice.points].reverse().map((point) => (
                <div
                  key={point.id}
                  className="text-xs mb-2 flex flex-col gap-1"
                >
                  <div className="flex gap-2">
                    <div
                      className="w-4 h-4 rounded-full text-xs"
                      style={{ backgroundColor: point.serieColor }}
                    ></div>
                    <p className="">{point.serieId}:</p>
                  </div>
                  <p className="font-semibold">
                    {formatNumber(Number(point.data.y))}
                  </p>
                </div>
              ))}
            </div>
          );
        }}
        // enableGridX={true}
        // enableGridY={true}
      />
    </AspectRatioWrapper>
  );
}
