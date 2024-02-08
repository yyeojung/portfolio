import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type ModalState = {
  type: string;
  isOpen: boolean;
};

const initialState: ModalState = {
  type: '',
  isOpen: false
};

const modal = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state, action: PayloadAction<string>) => {
      state.type = action.payload;
      state.isOpen = true;
    },

    closeModal: (state) => {
      state.isOpen = false;
    }
  }
});

export const { openModal, closeModal } = modal.actions;
export default modal.reducer;
