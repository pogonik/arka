import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
// import { devToolsEnhancer } from '@redux-devtools/extension';
// import {logger} from 'redux-logger';

export const store = configureStore({
  reducer:{counter:counterReducer}
});
