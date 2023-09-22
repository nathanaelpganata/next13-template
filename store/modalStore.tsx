import { createSelectorHooks } from 'auto-zustand-selectors-hook';
import { produce } from 'immer';
import { create } from 'zustand';

type ModalStoreType = {
  isOpen: boolean;
  setOpen: () => void;
  setClose: () => void;
};

const useModalStoreBase = create<ModalStoreType>((set) => ({
  isOpen: false,
  setOpen: () =>
    set(
      produce((state) => {
        state.isOpen = true;
      })
    ),
  setClose: () =>
    set(
      produce((state) => {
        state.isOpen = false;
      })
    ),
}));

const useModalStore = createSelectorHooks(useModalStoreBase);

export default useModalStore;
