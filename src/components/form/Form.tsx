import { useForm } from 'react-hook-form';
import SliderComponent from './formElements/Slider';
import Input from './formElements/Input';
import calculateInvestment from '../../utils/calculateInvestment';
import { useContext } from 'react';
import { AppContext } from '../../context/AppContext';

export default function Form() {
  const { control, handleSubmit } = useForm();
  const { setInvestment } = useContext(AppContext);

  return (
    <form
      className="flex flex-col gap-2"
      onChange={handleSubmit((data) => {
        const calculatedInvestmentResult = calculateInvestment(data);
        setInvestment(calculatedInvestmentResult);
      })}
    >
      <Input name="Initial investment" control={control} defaultValue="1000" />
      <Input name="Annual investment" control={control} defaultValue="100" />
      <SliderComponent
        name="years"
        displayValue
        control={control}
        defaultValue={[10]}
      />
      <SliderComponent
        name="Interest rate"
        displayValue
        control={control}
        defaultValue={[5]}
      />
    </form>
  );
}
