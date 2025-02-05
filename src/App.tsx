import Form from './components/form/Form';
import PieChart from './components/investmentData/PieChart';
import { useState, createContext } from 'react';

interface AppContextType {
  setInvestment: React.Dispatch<
    React.SetStateAction<{
      totalInterest: number;
      chartData: { id: string; label: string; value: number }[];
    }>
  >;
}

export const AppContext = createContext<AppContextType>({
  setInvestment: () => ({ totalInterest: 0, chartData: [] }),
});

function App() {
  const [calculatedInvestment, setCalculatedInvestment] = useState<{
    totalInterest: number;
    chartData: { id: string; label: string; value: number }[];
  }>({
    totalInterest: 0,
    chartData: [],
  });

  return (
    <AppContext.Provider value={{ setInvestment: setCalculatedInvestment }}>
      <main className="flex flex-col items-center justify-center min-h-screen p-2 gap-8 bg-slate-700">
        <div className="text-white text-center">
          <h1 className="text-2xl">Investment calculator</h1>
          <p>this is a calculator for investing in a long term</p>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <Form />
          {calculatedInvestment.chartData.length > 0 ? (
            <PieChart data={calculatedInvestment.chartData} />
          ) : (
            <div className="border-1 p-4 text-white border-slate-600 rounded flex flex-col justify-center items-center">
              <p className="text-lg font-bold">no data available</p>
              <small>please provide all input data for calculation</small>
            </div>
          )}
        </div>
      </main>
    </AppContext.Provider>
  );
}

export default App;
