import Form from './components/form/Form';
import PieChart from './components/investmentData/PieChart';
import calculateInvestment from './utils/calculateInvestment';

function App() {
  const { total, chartData } = calculateInvestment({
    initialInvestment: 1000,
    monthlyInvestment: 100,
    years: 10,
    interestRate: 7,
  });
  console.log(total);
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-2 gap-8 bg-slate-700">
      <div className="text-white text-center">
        <h1 className="text-2xl">Investment calculator</h1>
        <p>this is a calculator for investing in a long term</p>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <Form />
        <PieChart data={chartData} />
      </div>
    </main>
  );
}

export default App;
