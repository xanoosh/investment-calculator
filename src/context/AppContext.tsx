import { createContext } from 'react';

interface AppContextType {
  setInvestment: React.Dispatch<
    React.SetStateAction<{
      details: {
        total: number;
        inflationAdjusted: number;
        inflationRate: number;
        years: number;
      };
      chartData: {
        id: string;
        label: string;
        description: string;
        value: number;
      }[];
    }>
  >;
}

export const AppContext = createContext<AppContextType>({
  setInvestment: () => ({
    details: {},
    chartData: [],
  }),
});
