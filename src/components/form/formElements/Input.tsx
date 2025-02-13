import { useController } from 'react-hook-form';
import { Label } from 'radix-ui';
import { InputInterface } from '../../../interfaces';

export default function Input({ name, control, defaultValue }: InputInterface) {
  const { field, fieldState } = useController({
    name,
    control,
    rules: {
      pattern: {
        value: /[-+]?[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?/,
        message: 'Number must be 0 or higher',
      },
      validate: (value: string) => {
        if (isNaN(Number(value)) || value === '') {
          return 'Please enter a number/float';
        }
        return true;
      },
    },
    defaultValue,
  });
  return (
    <div className="flex flex-col gap-1.5">
      <Label.Root className="text-white" htmlFor={name}>
        {name}
      </Label.Root>
      <input
        className="bg-white py-1 px-3 border-1 rounded-sm focus:outline-none focus:ring-2 ring-offset-4 ring-offset-slate-800 ring-sky-600"
        type="number"
        onChange={field.onChange}
        onBlur={field.onBlur}
        value={field.value}
        name={field.name}
        id={name}
        ref={field.ref}
      />
      {fieldState.error && (
        <span className="text-rose-400 text-[12px]">
          {fieldState.error.message}
        </span>
      )}
    </div>
  );
}
