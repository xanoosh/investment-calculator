import { Slider, Label } from 'radix-ui';
import { useController } from 'react-hook-form';
import { Control, FieldValues } from 'react-hook-form';

export default function SliderComponent({
  name,
  control,
  defaultValue,
  maxValue,
  minValue,
  step,
  displayValue,
  symbol,
}: {
  name: string;
  control: Control<FieldValues>;
  defaultValue?: number[];
  maxValue?: number;
  minValue?: number;
  step?: number;
  displayValue?: boolean;
  symbol?: string;
}) {
  const { field } = useController({
    name,
    control,
    rules: { required: true },
    defaultValue,
  });
  return (
    <div className="flex flex-col gap-2">
      <Label.Root className="text-white" htmlFor={field.name}>
        {name} {displayValue ? `: ${field.value}` : null}
        {symbol ? symbol : null}
      </Label.Root>

      <Slider.Root
        className="relative flex h-5 w-full touch-none select-none items-center"
        max={maxValue ? maxValue : 80}
        min={minValue ? minValue : 1}
        name={name}
        id={field.name}
        step={step ? step : 1}
        value={field.value}
        onValueChange={field.onChange}
        ref={field.ref}
      >
        <Slider.Track className="relative h-[0.5rem] grow rounded-full bg-slate-700">
          <Slider.Range className="absolute h-full rounded-full bg-white" />
        </Slider.Track>
        <Slider.Thumb
          className="block size-5 rounded-[10px] bg-white shadow-[0_2px_10px] shadow-blackA4 focus:outline-none focus:ring-2 ring-offset-4 ring-offset-slate-800 ring-sky-600"
          aria-label="Volume"
        />
      </Slider.Root>
    </div>
  );
}
