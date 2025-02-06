import { useController } from 'react-hook-form';
import { Control, FieldValues } from 'react-hook-form';
import { Label } from 'radix-ui';

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
    <div className="flex flex-col gap-1">
      <Label.Root
        className="text-[15px] font-medium leading-[35px] text-white"
        htmlFor={name}
      >
        {name}
      </Label.Root>
      <input
        className="bg-white py-1 px-3 border-1 rounded-sm"
        type="number"
        onChange={field.onChange}
        onBlur={field.onBlur}
        value={field.value}
        name={field.name}
        id={name}
        ref={field.ref}
        min={0}
      />
    </div>
  );
}
