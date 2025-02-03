import { useForm } from 'react-hook-form';

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form
      className="flex flex-col gap-2"
      onSubmit={handleSubmit((data) => console.log(data))}
    >
      <input
        className="bg-white py-1 px-3 border-1 rounded-sm"
        {...register('initialInvestment')}
      />
      <input
        className="bg-white py-1 px-3 border-1 rounded-sm"
        {...register('anualInvestment', { required: true })}
      />
      {errors.lastName && <p>Last name is required.</p>}
      <input
        className="bg-white py-1 px-3 border-1 rounded-sm"
        {...register('years', { pattern: /\d+/ })}
      />
      {errors.age && <p>Please enter number for investment years.</p>}
      <input
        className="bg-white py-1 px-3 border-1 rounded-sm"
        {...register('interestRate', { pattern: /\d+/ })}
      />
      {errors.age && <p>Please enter number for interestRate.</p>}
      <input
        className="bg-sky-700 hover:bg-sky-600 text-white py-1 px-3 rounded-sm"
        type="submit"
        value="calculate"
      />
    </form>
  );
}
