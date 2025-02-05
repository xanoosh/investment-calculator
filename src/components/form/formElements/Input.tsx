import { useController } from 'react-hook-form';
import { Control, FieldValues } from 'react-hook-form';

export default function Input({
  name,
  control,
}: {
  name: string;
  control: Control<FieldValues>;
}) {
  const {
    field,
    // fieldState: { invalid, isTouched, isDirty },
    // formState: { touchedFields, dirtyFields },
  } = useController({
    name,
    control,
    rules: { required: true },
  });

  return (
    <input
      className="bg-white py-1 px-3 border-1 rounded-sm"
      type="text"
      onChange={field.onChange} // send value to hook form
      onBlur={field.onBlur} // notify when input is touched/blur
      value={field.value} // input value
      name={field.name} // send down the input name
      ref={field.ref} // send input ref, so we can focus on input when error appear
    />
  );
}
