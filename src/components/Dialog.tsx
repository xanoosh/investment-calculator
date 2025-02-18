import * as DialogPrimitives from '@radix-ui/react-dialog';
import * as Icons from '@radix-ui/react-icons';
import { DialogInterface } from '../interfaces';
import { motion } from 'framer-motion';
import { useToggleDialog } from '../store/useToggleDialog';

export default function Dialog({
  title,
  content,
  triggerContent,
  triggerClasses,
}: DialogInterface) {
  const dialogVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };
  const toggleDialog = useToggleDialog((state) => state.toggleDialog);
  const dialogOpen = useToggleDialog((state) => state.dialogOpen);
  return (
    <DialogPrimitives.Root open={dialogOpen} onOpenChange={toggleDialog}>
      <DialogPrimitives.Trigger asChild>
        <button
          className={`text-white ml-auto cursor-pointer rounded-full focus:outline-none focus:ring-2 ring-offset-4 ring-offset-slate-800 ring-sky-600 ${triggerClasses}`}
        >
          {triggerContent}
        </button>
      </DialogPrimitives.Trigger>
      <DialogPrimitives.Portal>
        <DialogPrimitives.DialogDescription />
        <DialogPrimitives.Overlay className="fixed inset-0 bg-black/35 z-10" />
        <DialogPrimitives.Content asChild forceMount>
          <motion.div
            className="fixed md:left-[10vw] left-[5vw] top-[10vh] max-h-[90vh] md:w-[80vw] w-[90vw] rounded-md bg-slate-800 px-6 pb-8 pt-16 focus:outline-none z-10"
            initial="hidden"
            animate="visible"
            variants={dialogVariants}
          >
            <DialogPrimitives.Title className="absolute top-4 left-6 text-xl font-semibold text-white">
              {title}
            </DialogPrimitives.Title>
            <div>{content}</div>

            <DialogPrimitives.Close asChild autoFocus>
              <button
                className="absolute right-6 top-4 inline-flex items-center justify-center rounded-full text-white cursor-pointer focus:outline-none focus:ring-2 ring-offset-4 ring-offset-slate-800 ring-sky-600"
                aria-label="Close"
              >
                <Icons.Cross2Icon width={25} height={25} />
              </button>
            </DialogPrimitives.Close>
          </motion.div>
        </DialogPrimitives.Content>
      </DialogPrimitives.Portal>
    </DialogPrimitives.Root>
  );
}
