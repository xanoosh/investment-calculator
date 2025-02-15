import formatNumber from '../../utils/formatNumber';
import { DetailsInterface } from '../../interfaces';
import { Tabs } from 'radix-ui';
import { useState } from 'react';
import { motion } from 'framer-motion';
import React from 'react';

export default function Details({ investmentData }: DetailsInterface) {
  const [activeTab, setActiveTab] = useState('details');
  const tabsArray = [
    { title: 'Details', value: 'details' },
    { title: 'Inflation', value: 'inflation' },
    { title: 'Other', value: 'other' },
  ];
  return (
    <Tabs.Root value={activeTab} onValueChange={(e) => setActiveTab(e)}>
      <Tabs.List className="flex gap-2 mb-5">
        {tabsArray.map(({ title, value }) => (
          <Tabs.Trigger value={value} asChild key={value}>
            <button
              key={value}
              className="p-2 relative text-white cursor-pointer hover:text-sky-300 data-[state=active]:text-sky-400"
              style={{
                WebkitTapHighlightColor: 'transparent',
              }}
            >
              {activeTab === value && (
                <motion.span
                  layoutId="bubble"
                  className="absolute bottom-0 h-0.5 bg-sky-400 left-0 right-0"
                  transition={{ type: 'spring', bounce: 0.1, duration: 0.4 }}
                />
              )}
              {title}
            </button>
          </Tabs.Trigger>
        ))}
      </Tabs.List>
      <Tabs.Content value="details">
        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2 py-2 px-5 bg-white/5 rounded-md">
              <div className="flex justify-between text-white">
                <p className="font-semibold">Investment value:</p>
                <p>{formatNumber(investmentData.details.total)}</p>
              </div>
              <p className="text-slate-300 text-xs">
                The total investment value
              </p>
            </div>
            <div className="flex flex-col gap-2 py-2 px-5 bg-white/5 rounded-md">
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
                className="flex flex-col gap-2 py-2 px-5 bg-white/5 rounded-md"
              >
                <div className="flex justify-between text-white">
                  <p className="font-semibold">{data.label}:</p>
                  <p>{formatNumber(data.value)}</p>
                </div>
                <p className="text-slate-300 text-xs">{data.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Tabs.Content>
      <Tabs.Content
        value="inflation"
        className="min-h-[50vh] flex justify-center items-center"
      >
        <p className="text-white">inflation tab</p>
      </Tabs.Content>
      <Tabs.Content
        value="other"
        className="min-h-[50vh] flex justify-center items-center"
      >
        <p className="text-white">other tab</p>
      </Tabs.Content>
    </Tabs.Root>
  );
}
