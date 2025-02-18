import PieChart from './components/investmentData/PieChart';
import Dialog from './components/Dialog';
import { FocusTrap } from 'focus-trap-react';
import Details from './components/details/Details';
import Form from './components/form/Form';
import * as Icons from '@radix-ui/react-icons';
import { useCalculatedInvestmentStore } from './store/useCalculatedInvestmentStore';
import { useToggleDialog } from './store/useToggleDialog';

function App() {
  const calculatedInvestment = useCalculatedInvestmentStore(
    (state) => state.calculatedInvestment
  );
  const dialogOpen = useToggleDialog((state) => state.dialogOpen);

  return (
    <FocusTrap
      focusTrapOptions={{ allowOutsideClick: true }}
      active={!dialogOpen}
    >
      <main className="flex flex-col items-center justify-around min-h-screen sm:pt-4 pt-2 p-2 sm:pb-2 pb-0 sm:gap-4 gap-2 bg-slate-800">
        <div className="text-white text-center">
          <h1 className="text-2xl">Investment calculator</h1>
        </div>
        <div className="grid grid-cols-1 sm:gap-4 gap-4 md:grid-cols-10 w-9/10 max-w-4xl">
          <div className="md:col-span-3 relative">
            <Form />
          </div>
          {calculatedInvestment.chartData.length > 0 ? (
            <div className="md:col-span-7 flex flex-col items-end relative">
              <Dialog
                triggerContent={
                  <Icons.InfoCircledIcon width={25} height={25} />
                }
                triggerClasses="absolute top-0 right-0 z-10"
                title="Investment Details"
                content={<Details investmentData={calculatedInvestment} />}
              />
              <PieChart data={calculatedInvestment.chartData} />
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
    </FocusTrap>
  );
}

export default App;
