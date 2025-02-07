import { createContext } from 'react';

interface AppContextType {
  setInvestment: React.Dispatch<
    React.SetStateAction<{
      details: { total: number };
      chartData: { id: string; label: string; value: number }[];
    }>
  >;
}

export const AppContext = createContext<AppContextType>({
  setInvestment: () => ({ details: { total: 0 }, chartData: [] }),
});
