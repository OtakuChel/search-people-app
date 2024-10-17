import { createSlice } from "@reduxjs/toolkit";
import { axiosUsers } from "./asyncActions";

const initialState = {
  focusData: [],
  searchData: [],
  status: "none",
  error: null,
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchData: (state, actions) => {
      state.searchData = actions.payload;
    },
    setFocusData: (state, actions) => {
      state.focusData = actions.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(axiosUsers.fulfilled, (state, action) => {
      state.searchData = action.payload;
      state.status = "success";
    });
    builder.addCase(axiosUsers.pending, (state) => {
      state.status = "loading";
      state.searchData = [];
    });
    builder.addCase(axiosUsers.rejected, (state, action) => {
      state.status = "error";
      state.error = action.payload;
    });
  },
});

export const { setSearchData, setFocusData } = searchSlice.actions;

export default searchSlice.reducer;
