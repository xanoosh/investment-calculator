import { Tabs } from 'radix-ui';
import { motion } from 'framer-motion';
import { TabPillInterface } from '../../../interfaces';

export default function TabPill({ value, title, activeTab }: TabPillInterface) {
  return (
    <Tabs.Trigger value={value} asChild key={value}>
      <button
        key={value}
        className="p-2 relative rounded text-white cursor-pointer hover:text-sky-300 data-[state=active]:text-sky-400 focus:outline-none"
        style={{
          WebkitTapHighlightColor: 'transparent',
        }}
      >
        {activeTab === value && (
          <motion.span
            layoutId="bubble"
            className="absolute bottom-0 h-0.5 bg-sky-400 left-0 right-0"
            transition={{ type: 'spring', bounce: 0.3, duration: 0.4 }}
          />
        )}
        {title}
      </button>
    </Tabs.Trigger>
  );
}
