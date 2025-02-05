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
      <Input name="initialInvestment" control={control} />
      <Input name="anualInvestment" control={control} />
      <SliderComponent name="years" control={control} />
      <SliderComponent name="interestRate" control={control} />

      <input
        className="bg-sky-700 hover:bg-sky-600 text-white py-1 px-3 rounded-sm"
        type="submit"
        value="calculate"
      />
    </form>
  );
}
