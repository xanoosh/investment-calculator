import { useForm } from 'react-hook-form';
import SliderComponent from './formElements/Slider';
import Input from './formElements/Input';
import calculateInvestment from '../../utils/calculateInvestment';
import { useContext, useState } from 'react';
import { AppContext } from '../../context/AppContext';
import { Collapsible } from 'radix-ui';
import * as Icon from '@radix-ui/react-icons';

export default function Form() {
  const [open, setOpen] = useState<boolean>(false);
  const { control, handleSubmit } = useForm();
  const { setInvestment } = useContext(AppContext);

  return (
    <Collapsible.Root open={open} onOpenChange={setOpen}>
      <form
        className="flex flex-col gap-3"
        onChange={handleSubmit((data) => {
          const calculatedInvestmentResult = calculateInvestment(data);
          setInvestment(calculatedInvestmentResult);
        })}
      >
        <Input
          name="Initial investment"
          control={control}
          defaultValue="1000"
        />
        <Input name="Annual investment" control={control} defaultValue="100" />
        <SliderComponent
          name="Years"
          displayValue
          control={control}
          defaultValue={[10]}
          maxValue={50}
        />
        <SliderComponent
          name="Interest rate"
          displayValue
          control={control}
          defaultValue={[5]}
          maxValue={30}
          symbol="%"
        />
        <Collapsible.Trigger asChild>
          <button className="text-white cursor-pointer rounded-sm focus:outline-none focus:ring-2 ring-offset-4 ring-offset-slate-800 ring-sky-600 flex justify-center items-center w-7 h-5">
            {open ? (
              <Icon.ChevronUpIcon width={30} height={20} />
            ) : (
              <Icon.ChevronDownIcon width={30} height={20} />
            )}
          </button>
        </Collapsible.Trigger>

        <Collapsible.CollapsibleContent>
          <Input
            name="Inflation rate (%)"
            control={control}
            defaultValue="3.3"
          />
          <Input
            name="Total expense ratio (%)"
            control={control}
            defaultValue="0"
          />
        </Collapsible.CollapsibleContent>
      </form>
    </Collapsible.Root>
  );
}
