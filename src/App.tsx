import Form from './components/form/Form';
import PieChart from './components/investmentData/PieChart';
import { useState } from 'react';
import { AppContext } from './context/AppContext';
import Dialog from './components/Dialog';
import { FocusTrap } from 'focus-trap-react';
import Details from './components/investmentData/Details';

function App() {
  const [calculatedInvestment, setCalculatedInvestment] = useState<{
    details: { total: number };
    chartData: {
      id: string;
      label: string;
      description: string;
      value: number;
    }[];
  }>({
    details: { total: 3343 },
    chartData: [
      {
        id: 'Initial',
        label: 'Initial',
        description: 'The amount you initially invested',
        value: 1000,
      },
      {
        id: 'Contributions',
        label: 'Contributions',
        description:
          'Total amount you contributed excluding initial investment',
        value: 1000,
      },
      {
        id: 'Interest',
        label: 'Interest',
        description: 'Compound interest of your investment',
        value: 1343,
      },
    ],
  });

  return (
    <AppContext.Provider value={{ setInvestment: setCalculatedInvestment }}>
      <FocusTrap focusTrapOptions={{ allowOutsideClick: true }}>
        <main className="flex flex-col items-center justify-around min-h-screen pt-4 p-2 sm:pb-2 pb-0 sm:gap-4 gap-2 bg-slate-800">
          <div className="text-white text-center">
            <h1 className="text-2xl">Investment calculator</h1>
          </div>
          <div className="grid grid-cols-1 sm:gap-4 gap-1 md:grid-cols-10 w-9/10 max-w-4xl">
            <div className="md:col-span-3">
              <Form />
            </div>
            {calculatedInvestment.chartData.length > 0 ? (
              <div className="md:col-span-7 flex flex-col items-end">
                <Dialog
                  title="Investment Details"
                  content={<Details investmentData={calculatedInvestment} />}
                />
                <PieChart data={calculatedInvestment.chartData} />
              </div>
            ) : (
              <div className="border-1 p-4 text-white border-slate-600 rounded flex flex-col justify-center gap-6 items-center text-center md:col-span-7">
                <p className="text-2xl font-bold">Some fields are missing.</p>
                <p className="text-sm">
                  Either initial or annual investment should be a positive
                  number.
                  <br />
                  Please provide all relevant input data for calculation.
                </p>
              </div>
            )}
          </div>
        </main>
      </FocusTrap>
    </AppContext.Provider>
  );
}

export default App;
