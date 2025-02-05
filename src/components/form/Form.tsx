import { useForm, Controller } from 'react-hook-form';
import SliderComponent from './formElements/Slider';
import Input from './formElements/Input';

export default function Form() {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form
      className="flex flex-col gap-2"
      onSubmit={handleSubmit((data) => console.log(data))}
    >
      <Controller
        // as={() => <Input type="text" />}
        name="x"
        control={control}
        // defaultValue="x"
        render={({ field }) => <Input type="text" {...field} />}
      />
      <input
        className="bg-white py-1 px-3 border-1 rounded-sm"
        {...register('initialInvestment')}
      />
      <input
        className="bg-white py-1 px-3 border-1 rounded-sm"
        {...register('anualInvestment', { required: true })}
      />
      {errors.lastName && <p>Last name is required.</p>}
      <Controller
        name="years"
        control={control}
        render={({ field }) => <SliderComponent {...field} />}
      />
      <Controller
        name="interestRate"
        control={control}
        render={({ field }) => <SliderComponent {...field} />}
      />

      <input
        className="bg-sky-700 hover:bg-sky-600 text-white py-1 px-3 rounded-sm"
        type="submit"
        value="calculate"
      />
    </form>
  );
}
