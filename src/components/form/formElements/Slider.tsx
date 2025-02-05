import { Slider } from 'radix-ui';
import { useController } from 'react-hook-form';
import { Control, FieldValues } from 'react-hook-form';

export default function SliderComponent({
  name,
  control,
}: {
  name: string;
  control: Control<FieldValues>;
}) {
  const { field } = useController({
    name,
    control,
    rules: { required: true },
  });
  return (
    <Slider.Root
      className="relative flex h-5 w-[200px] touch-none select-none items-center"
      defaultValue={[30]}
      max={80}
      min={1}
      name={name}
      step={1}
      value={field.value}
      onValueChange={field.onChange}
      ref={field.ref}
    >
      <Slider.Track className="relative h-[3px] grow rounded-full bg-blackA7">
        <Slider.Range className="absolute h-full rounded-full bg-white" />
      </Slider.Track>
      <Slider.Thumb
        className="block size-5 rounded-[10px] bg-white shadow-[0_2px_10px] shadow-blackA4 hover:bg-violet3 focus:shadow-[0_0_0_5px] focus:shadow-blackA5 focus:outline-none"
        aria-label="Volume"
      />
    </Slider.Root>
  );
}
