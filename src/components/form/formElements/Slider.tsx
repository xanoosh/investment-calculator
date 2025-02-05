import { Slider, Label } from 'radix-ui';
import { useController } from 'react-hook-form';
import { Control, FieldValues } from 'react-hook-form';

export default function SliderComponent({
  name,
  control,
  defaultValue,
  displayValue = false,
}: {
  name: string;
  control: Control<FieldValues>;
  defaultValue?: number[];
  displayValue?: boolean;
}) {
  const { field } = useController({
    name,
    control,
    rules: { required: true },
    defaultValue,
  });
  return (
    <div>
      <Label.Root
        className="text-[15px] font-medium leading-[35px] text-white"
        htmlFor={name}
      >
        {name} {displayValue && `: ${field.value}`}
      </Label.Root>

      <Slider.Root
        className="relative flex h-5 w-[200px] touch-none select-none items-center"
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
    </div>
  );
}
