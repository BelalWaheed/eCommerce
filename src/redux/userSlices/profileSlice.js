import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loggedUser: {},
  logged: false,
};

const userSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setLoggedUser: (state, { payload }) => {
      state.loggedUser = payload;
    },
    setLogged: (state, { payload }) => {
      state.logged = payload;
    },
  },
});

export const profile = userSlice.reducer;
export const { setLogged, setLoggedUser } = userSlice.actions;
