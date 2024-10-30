import { create } from "zustand";

interface ModalStoreProps {
  modals: Record<string, boolean>;
  openModal: (modalKey: string) => void;
  closeModal: (modalKey: string) => void;
  ToggleModal: (modalName: string) => void;
}

export const ModalManageStore = create<ModalStoreProps>()((set) => ({
  modals: {},
  openModal: (modalKey: string) =>
    set((state) => ({
      modals: { ...state.modals, [modalKey]: true },
    })),
  closeModal: (modalKey: string) =>
    set((state) => ({
      modals: { ...state.modals, [modalKey]: false },
    })),
  ToggleModal: (modalKey: string) =>
    set((state) => ({
      modals: { ...state.modals, [modalKey]: !state.modals[modalKey] },
    })),
}));
