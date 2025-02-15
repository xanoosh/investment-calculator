import { useForm } from 'react-hook-form';
import SliderComponent from './formElements/Slider';
import Input from './formElements/Input';
import calculateInvestment from '../../utils/calculateInvestment';
import { useState } from 'react';
import { Collapsible } from 'radix-ui';
import * as Icon from '@radix-ui/react-icons';
import { useCalculatedInvestmentStore } from '../../store/useCalculatedInvestmentStore';

export default function Form() {
  const [collapsibleOpen, setCollapsibleOpen] = useState<boolean>(false);
  const { control, handleSubmit } = useForm();
  const setCalculatedInvestment = useCalculatedInvestmentStore(
    (state) => state.update
  );

  const { formData } = useCalculatedInvestmentStore(
    (state) => state.calculatedInvestment
  );

  console.log('formData (to populate):', formData);

  return (
    <Collapsible.Root open={collapsibleOpen} onOpenChange={setCollapsibleOpen}>
      <form
        className="flex flex-col gap-3"
        onChange={handleSubmit((data) => {
          console.log('submit data:', data);

          const calculatedInvestmentResult = calculateInvestment(data);
          setCalculatedInvestment(calculatedInvestmentResult);
        })}
      >
        <Input
          name="Initial investment"
          control={control}
          defaultValue={formData['Initial investment']}
        />
        <Input
          name="Annual investment"
          control={control}
          defaultValue={formData['Annual investment']}
        />
        <SliderComponent
          name="Years"
          displayValue
          control={control}
          defaultValue={formData['Years']}
          maxValue={50}
        />
        <SliderComponent
          name="Interest rate"
          displayValue
          control={control}
          defaultValue={formData['Interest rate']}
          maxValue={30}
          symbol="%"
        />
        {!collapsibleOpen ? (
          <>
            <Input
              type="hidden"
              name="Inflation rate (%)"
              control={control}
              defaultValue={formData['Inflation rate (%)']}
            />
            <Input
              type="hidden"
              name="Total expense ratio (%)"
              control={control}
              defaultValue={formData['Total expense ratio (%)']}
            />
          </>
        ) : null}

        <Collapsible.CollapsibleContent className="flex flex-col gap-3">
          <Input
            name="Inflation rate (%)"
            control={control}
            defaultValue={formData['Inflation rate (%)']}
          />
          <Input
            name="Total expense ratio (%)"
            control={control}
            defaultValue={formData['Total expense ratio (%)']}
          />
        </Collapsible.CollapsibleContent>

        <Collapsible.Trigger asChild>
          <button className="mt-2 text-white cursor-pointer rounded-sm mx-auto focus:outline-none focus:ring-2 ring-offset-4 ring-offset-slate-800 ring-sky-600 flex justify-center items-center w-7 h-5">
            {collapsibleOpen ? (
              <Icon.ChevronUpIcon width={30} height={20} />
            ) : (
              <Icon.ChevronDownIcon width={30} height={20} />
            )}
          </button>
        </Collapsible.Trigger>
      </form>
    </Collapsible.Root>
  );
}
