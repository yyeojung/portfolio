import { configureStore } from '@reduxjs/toolkit';
import modal from './modal';
import thememode from './thememode';

const store = configureStore({
  reducer: {
    modal: modal,
    thememode: thememode
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
