import { useForm } from 'react-hook-form';
import SliderComponent from './formElements/Slider';
import Input from './formElements/Input';
import calculateInvestment from '../../utils/calculateInvestment';
import { useContext } from 'react';
import { AppContext } from '../../App';

export default function Form() {
  const { control, handleSubmit } = useForm();
  const { setInvestment } = useContext(AppContext);

  return (
    <form
      className="flex flex-col gap-2"
      onSubmit={handleSubmit((data) => {
        console.log(data);
        const calculatedInvestmentResult = calculateInvestment(
          Number(data.initialInvestment),
          Number(data.anualInvestment),
          data.years,
          data.interestRate
        );
        setInvestment(calculatedInvestmentResult);
      })}
    >
      <Input name="initialInvestment" control={control} defaultValue="1000" />
      <Input name="anualInvestment" control={control} defaultValue="100" />
      <SliderComponent
        name="years"
        displayValue
        control={control}
        defaultValue={[10]}
      />
      <SliderComponent
        name="interestRate"
        displayValue
        control={control}
        defaultValue={[5]}
      />

      <input
        className="bg-sky-700 hover:bg-sky-600 text-white py-1 px-3 rounded-sm"
        type="submit"
        value="calculate"
      />
    </form>
  );
}
