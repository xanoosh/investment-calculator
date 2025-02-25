import { Tabs } from 'radix-ui';
import { motion } from 'framer-motion';
import formatNumber from '../../../utils/formatNumber';
import { TabContentInterface } from '../../../interfaces';
import InflationChart from '../../investmentData/InflationChart';
import TotalExpenseRatioChart from '../../investmentData/TotalExpenseRatioChart';

export default function TabContent({
  value,
  className,
  investmentData,
}: TabContentInterface) {
  return (
    <Tabs.Content value={value} asChild>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className={`flex flex-col gap-2 min-h-[50vh] ${className}`}
      >
        {value === 'details' ? (
          <div className="flex flex-col sm:gap-4 gap-3">
            <div className="flex flex-col sm:gap-2 gap-1 sm:py-2 py-1 px-5 bg-white/5 rounded-md">
              <div className="flex justify-between text-white">
                <p className="font-semibold">Investment value:</p>
                <p>{formatNumber(investmentData.details.total)}</p>
              </div>
              <p className="text-slate-300 text-xs">
                The total investment value
              </p>
            </div>
            <div className="flex flex-col gap-2 sm:py-2 py-1 px-5 bg-white/5 rounded-md">
              <div className="flex justify-between text-white">
                <p className="font-semibold">Inflation adjusted:</p>
                <p>{formatNumber(investmentData.details.inflationAdjusted)}</p>
              </div>
              <p className="text-slate-300 text-xs">
                Approximate purchasing power of your investment after{' '}
                <strong className="text-nowrap">
                  {investmentData.details.years}{' '}
                  {investmentData.details.years === 1 ? 'year' : 'years'}
                </strong>
                , assuming the inflation rate averages at{' '}
                <strong>{investmentData.details.inflationRate}%</strong> per
                year.
              </p>
            </div>
            {investmentData.chartData.map((data) => (
              <div
                key={data.id}
                className="flex flex-col gap-2 sm:py-2 py-1 px-5 bg-white/5 rounded-md"
              >
                <div className="flex justify-between text-white">
                  <p className="font-semibold">{data.label}:</p>
                  <p>{formatNumber(data.value)}</p>
                </div>
                <p className="text-slate-300 text-xs">{data.description}</p>
              </div>
            ))}
          </div>
        ) : null}
        {value === 'inflation' ? (
          <>
            <InflationChart data={investmentData.inflationChartData} />
            <p className="text-slate-300 text-xs">
              Approximate purchasing power of your investment after{' '}
              <strong className="text-nowrap">
                {investmentData.details.years}{' '}
                {investmentData.details.years === 1 ? 'year' : 'years'}
              </strong>
              , assuming the inflation rate averages at{' '}
              <strong>{investmentData.details.inflationRate}%</strong> per year.
            </p>
          </>
        ) : null}
        {value === 'ter' ? (
          <>
            <TotalExpenseRatioChart />
            <p className="text-slate-300 text-xs">
              Approximate purchasing power of your investment after{' '}
              <strong className="text-nowrap">
                {investmentData.details.years}{' '}
                {investmentData.details.years === 1 ? 'year' : 'years'}
              </strong>
              , assuming the inflation rate averages at{' '}
              <strong>{investmentData.details.inflationRate}%</strong> per year.
            </p>
          </>
        ) : null}
        {value === 'other' ? (
          <p className="text-white w-1/2 text-center">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque
            molestias repellendus molestiae nesciunt consequuntur delectus
            autem, tempore, minus nihil, illum dolor fugiat laborum voluptatem
            at debitis placeat vero voluptatibus deleniti.
          </p>
        ) : null}
      </motion.div>
    </Tabs.Content>
  );
}
