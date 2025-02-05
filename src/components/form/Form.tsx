import { useForm } from 'react-hook-form';
import SliderComponent from './formElements/Slider';
import Input from './formElements/Input';

export default function Form() {
  const { control, handleSubmit } = useForm();

  return (
    <form
      className="flex flex-col gap-2"
      onSubmit={handleSubmit((data) => console.log(data))}
    >
      <Input
        name="initialInvestment"
        control={control}
        defaultValue="initial"
      />
      <Input name="anualInvestment" control={control} defaultValue="annual" />
      <SliderComponent
        name="years"
        displayValue
        control={control}
        defaultValue={[30]}
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
