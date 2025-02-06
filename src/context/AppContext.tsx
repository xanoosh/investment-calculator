import { createContext } from 'react';

interface AppContextType {
  setInvestment: React.Dispatch<
    React.SetStateAction<{
      total: number;
      chartData: { id: string; label: string; value: number }[];
    }>
  >;
}

export const AppContext = createContext<AppContextType>({
  setInvestment: () => ({ totalInterest: 0, chartData: [] }),
});
