import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getSingle } from '@prismicio/client'
import { client } from './prismicio'
import { langs, lang } from './utils/lib'
import { fetchCount } from './counterAPI';

const initState = [{ naslov: '', link: {} }];

export const fetchNavByLang = createAsyncThunk(
  'fetchMainNav',
  async () => {
    const response = await client.getSingle('main_navigation', { lang });
    return response.data.nav;
  }
);

export const mainNavSlice = createSlice({
  name: 'mainNav',
  initState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchNavByLang.pending, (state, action) => {
      state.status = "pending";
    });
    builder.addCase(fetchNavByLang.fulfilled, (state, action) => {
      state.status = "fulfilled";
      state.data = action.payload;
    });
    builder.addCase(fetchNavByLang.rejected, (state, action) => {
      state.status = "rejected";
    });
  },
});

// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.
// export const incrementIfOdd = (amount) => (dispatch, getState) => {
//   const currentValue = selectCount(getState());
//   if (currentValue % 2 === 1) {
//     dispatch(incrementByAmount(amount));
//   }
// };

export default mainNavSlice.reducer;
