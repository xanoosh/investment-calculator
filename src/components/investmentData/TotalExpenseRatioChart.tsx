import AspectRatioWrapper from '../AspectRatioWrapper';
import { useMedia } from 'react-use';
import { ResponsiveLine } from '@nivo/line';

export default function TotalExpenseRatioChart() {
  const largeScreen = useMedia('(min-width: 1024px)');
  const mobileScreen = useMedia('(max-width: 500px)');

  const data = [
    {
      id: 'investment',
      data: [
        {
          x: 1,
          y: 100,
        },
        {
          x: 2,
          y: 110,
        },
        {
          x: 3,
          y: 121,
        },
        {
          x: 4,
          y: 130,
        },
        {
          x: 5,
          y: 144,
        },
        {
          x: 6,
          y: 160,
        },
        {
          x: 7,
          y: 176,
        },
      ],
    },
  ];
  return (
    <AspectRatioWrapper
      ratio={mobileScreen ? 1 : largeScreen ? 16 / 6 : 16 / 10}
    >
      <ResponsiveLine
        data={data}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: 'point' }}
        yScale={{
          type: 'linear',
          min: 'auto',
          max: 'auto',
          stacked: true,
          reverse: false,
        }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'transportation',
          legendOffset: 36,
          legendPosition: 'middle',
          truncateTickAt: 0,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'count',
          legendOffset: -40,
          legendPosition: 'middle',
          truncateTickAt: 0,
        }}
        pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabel="data.yFormatted"
        pointLabelYOffset={-12}
        enableTouchCrosshair={true}
        useMesh={true}
        legends={[
          {
            anchor: 'bottom-right',
            direction: 'column',
            justify: false,
            translateX: 100,
            translateY: 0,
            itemsSpacing: 0,
            itemDirection: 'left-to-right',
            itemWidth: 80,
            itemHeight: 20,
            itemOpacity: 0.75,
            symbolSize: 12,
            symbolShape: 'circle',
            symbolBorderColor: 'rgba(0, 0, 0, .5)',
            effects: [
              {
                on: 'hover',
                style: {
                  itemBackground: 'rgba(0, 0, 0, .03)',
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
      />
    </AspectRatioWrapper>
  );
}
