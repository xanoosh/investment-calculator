import Form from './components/form/Form';
import PieChart from './components/investmentData/PieChart';
import { useState } from 'react';
import { AppContext } from './context/AppContext';

function App() {
  const [calculatedInvestment, setCalculatedInvestment] = useState<{
    total: number;
    chartData: { id: string; label: string; value: number }[];
  }>({
    total: 3343,
    chartData: [
      {
        id: 'Starting Amount',
        label: 'Starting Amount',
        value: 1000,
      },
      {
        id: 'Total Contributions',
        label: 'Total Contributions',
        value: 1000,
      },
      {
        id: 'Total Interest',
        label: 'Total Interest',
        value: 1343,
      },
    ],
  });

  return (
    <AppContext.Provider value={{ setInvestment: setCalculatedInvestment }}>
      <main className="flex flex-col items-center justify-center min-h-screen p-2 gap-8 bg-slate-800">
        <div className="text-white text-center">
          <h1 className="text-2xl">Investment calculator</h1>
          <p>this is a calculator for investing in a long term</p>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:w-auto w-4/5">
          <Form />
          {calculatedInvestment.chartData.length > 0 ? (
            <div className="md:col-span-2">
              <PieChart data={calculatedInvestment.chartData} />
            </div>
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
