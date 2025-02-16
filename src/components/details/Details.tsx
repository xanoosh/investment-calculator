import { DetailsInterface } from '../../interfaces';
import { Tabs } from 'radix-ui';
import { useState } from 'react';
import TabContent from './detailsTabs/TabComponent';
import TabPill from './detailsTabs/TabPill';

export default function Details({ investmentData }: DetailsInterface) {
  const [activeTab, setActiveTab] = useState('details');
  const tabsArray = [
    { value: 'inflation', title: 'Inflation' },
    { value: 'details', title: 'Details' },
    { value: 'other', title: 'Other' },
  ];
  return (
    <Tabs.Root value={activeTab} onValueChange={(e) => setActiveTab(e)}>
      <Tabs.List className="flex gap-2 mb-5">
        {tabsArray.map(({ title, value }) => (
          <TabPill value={value} title={title} activeTab={activeTab} />
        ))}
      </Tabs.List>
      {tabsArray.map(({ value }) => (
        <TabContent
          key={value}
          value={value}
          investmentData={investmentData}
          className={
            value !== 'details' ? 'flex items-center justify-center' : ''
          }
        />
      ))}
    </Tabs.Root>
  );
}
