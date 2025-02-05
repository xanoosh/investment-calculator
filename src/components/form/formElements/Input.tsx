import { useController } from 'react-hook-form';
import { Control, FieldValues } from 'react-hook-form';

export default function Input({
  name,
  control,
  defaultValue,
}: {
  name: string;
  control: Control<FieldValues>;
  defaultValue?: string;
}) {
  const { field } = useController({
    name,
    control,
    rules: { required: true },
    defaultValue,
  });

  return (
    <input
      className="bg-white py-1 px-3 border-1 rounded-sm"
      type="number"
      onChange={field.onChange}
      onBlur={field.onBlur}
      value={field.value}
      name={field.name}
      ref={field.ref}
      min={0}
    />
  );
}
