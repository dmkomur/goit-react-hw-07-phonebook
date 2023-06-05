import { configureStore } from '@reduxjs/toolkit';
import { ponebookReducer } from './phoneSlice';


export const store = configureStore({
  reducer: ponebookReducer
});
