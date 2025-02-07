import Form from './components/form/Form';
import PieChart from './components/investmentData/PieChart';
import { useState } from 'react';
import { AppContext } from './context/AppContext';
import Details from './components/investmentData/Details';

function App() {
  const [calculatedInvestment, setCalculatedInvestment] = useState<{
    details: { total: number };
    chartData: { id: string; label: string; value: number }[];
  }>({
    details: { total: 3343 },
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
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 w-4/5">
          <Form />
          {calculatedInvestment.chartData.length > 0 ? (
            <div className="md:col-span-2">
              <PieChart data={calculatedInvestment.chartData} />
              <Details details={calculatedInvestment.details} />
            </div>
          ) : (
            <div className="border-1 p-4 text-white border-slate-600 rounded flex flex-col justify-center items-center">
              <p className="text-lg font-bold">No data available</p>
              <small>
                please provide all relevant input data for calculation
              </small>
            </div>
          )}
        </div>
      </main>
    </AppContext.Provider>
  );
}

export default App;
