import Form from './components/form/Form';
import PieChart from './components/investmentData/PieChart';
import { useState } from 'react';
import { AppContext } from './context/AppContext';
// import DetailsDialog from './components/investmentData/DetailsDialog';

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
  // const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <AppContext.Provider value={{ setInvestment: setCalculatedInvestment }}>
      <main className="flex flex-col items-center justify-center min-h-screen p-2 gap-8 bg-slate-800">
        <div className="text-white text-center">
          <h1 className="text-2xl">Investment calculator</h1>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-10 w-9/10 max-w-4xl">
          <div className="md:col-span-3">
            <Form />
          </div>
          {calculatedInvestment.chartData.length > 0 ? (
            <div className="md:col-span-7">
              <PieChart data={calculatedInvestment.chartData} />
              {/* <DetailsDialog open={dialogOpen} setOpen={setDialogOpen} /> */}
              {/* <p>dialogopen : {dialogOpen ? 'yes' : 'no'}</p> */}
            </div>
          ) : (
            <div className="border-1 p-4 text-white border-slate-600 rounded flex flex-col justify-center gap-6 items-center text-center md:col-span-7">
              <p className="text-2xl font-bold">Some fields are missing.</p>
              <p className="text-sm">
                Either initial or annual investment should be a positive number.
                <br />
                Please provide all relevant input data for calculation.
              </p>
            </div>
          )}
        </div>
      </main>
    </AppContext.Provider>
  );
}

export default App;
