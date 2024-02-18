import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type ModalState = {
  modalName?: string;
  isOpen: boolean;
};

const initialState: ModalState = {
  isOpen: false
};

const modal = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state, action: PayloadAction<string>) => {
      state.isOpen = true;
      state.modalName = action.payload;
      document.body.style.overflow = 'hidden';
    },

    closeModal: (state) => {
      state.isOpen = false;
      state.modalName = undefined;
      document.body.style.overflow = '';
    }
  }
});

export const { openModal, closeModal } = modal.actions;
export default modal.reducer;
