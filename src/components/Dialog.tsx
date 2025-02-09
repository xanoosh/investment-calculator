import * as DialogPrimitives from '@radix-ui/react-dialog';
import * as Icons from '@radix-ui/react-icons';
import { ReactNode } from 'react';

interface DialogProps {
  title: string;
  content: ReactNode;
}
export default function Dialog({ title, content }: DialogProps) {
  console.log('Dialog rendered');
  return (
    <DialogPrimitives.Root>
      <DialogPrimitives.Trigger asChild>
        <button className="text-white ml-auto cursor-pointer">
          <Icons.InfoCircledIcon width={25} height={25} />
        </button>
      </DialogPrimitives.Trigger>
      <DialogPrimitives.Portal>
        <DialogPrimitives.DialogDescription />
        <DialogPrimitives.Overlay className="fixed inset-0 bg-black/35" />
        <DialogPrimitives.Content className="fixed left-1/2 top-1/2 max-h-[85vh] w-[90vw] max-w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-md bg-slate-800 px-6 pb-8 pt-16 focus:outline-none">
          <DialogPrimitives.Title className="absolute top-4 left-6 text-xl font-semibold text-white">
            {title}
          </DialogPrimitives.Title>
          <DialogPrimitives.Content>{content}</DialogPrimitives.Content>

          <DialogPrimitives.Close asChild>
            <button
              className="absolute right-6 top-4 inline-flex items-center justify-center rounded-full text-white cursor-pointer"
              aria-label="Close"
            >
              <Icons.Cross2Icon width={25} height={25} />
            </button>
          </DialogPrimitives.Close>
        </DialogPrimitives.Content>
      </DialogPrimitives.Portal>
    </DialogPrimitives.Root>
  );
}
