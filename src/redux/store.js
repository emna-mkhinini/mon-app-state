import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlices';
import uiReducer from './uiSlice';
export const store = configureStore ({
reducer : {
cart : cartReducer,
    ui: uiReducer
}
}) ;