import { create } from 'zustand';

interface ToggleDialogInterface {
  dialogOpen: boolean;
  toggleDialog: () => void;
}

export const useToggleDialog = create<ToggleDialogInterface>((set) => ({
  dialogOpen: false,
  toggleDialog: () => set((state) => ({ dialogOpen: !state.dialogOpen })),
}));
