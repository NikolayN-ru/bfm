import { createSlice } from "@reduxjs/toolkit";

const Initialstate: any = [
  {
    min: null,
    max: null,
  },
  {
    variablles: [],
  },
];

const filterSlice = createSlice({
  name: "filter",
  initialState: {
    filter: Initialstate,
  },
  reducers: {
    setMinMax: (state, { payload }) => {
      if (payload.min) {
        state.filter[0].min = payload.min;
      }
      if (payload.max) {
        state.filter[0].max = payload.max;
      }
    },
    addTags: (state, { payload }) => {
      state.filter[1].variablles = payload;
    },
    clearFilter: (state) => {
      state.filter = Initialstate;
    },
  },
});

export const { addTags, clearFilter, setMinMax } = filterSlice.actions;
export default filterSlice.reducer;
