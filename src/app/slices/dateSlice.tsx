import { createSlice } from '@reduxjs/toolkit';
import type { ReducersState } from '../store';

export interface DateState {
  pickupDate: string;
  returnDate: string;
}

const initialState: DateState = {
  pickupDate: new Date().toISOString(),
  returnDate: new Date().toISOString(),
};

const dateSlice = createSlice({
  name: 'date',
  initialState,
  reducers: {
    changePickupDate(state, action) {
      return {
        ...state,
        pickupDate: action.payload,
      };
    },
    changeReturnDate(state, action) {
      return {
        ...state,
        returnDate: action.payload,
      };
    },
  },
});

export default dateSlice.reducer;

export const { changePickupDate, changeReturnDate } = dateSlice.actions;
export const pickupDate = (state: ReducersState) => state.date.pickupDate;
export const returnDate = (state: ReducersState) => state.date.returnDate;
