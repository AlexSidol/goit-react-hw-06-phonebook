import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    filterContact(state, { payload }) {
      return payload;
    },
  },
});

export const { filterContact } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
