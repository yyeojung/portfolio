import { configureStore } from '@reduxjs/toolkit';
import modal from './modal';

export default configureStore({
  reducer: {
    modal: modal
  }
});
