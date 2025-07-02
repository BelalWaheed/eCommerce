import { configureStore } from "@reduxjs/toolkit";
import { profile } from "./userSlices/profileSlice";
import { user } from "./userSlices/userSlice";
import { theme } from "./userSlices/themeSlice";
import { products } from "./userSlices/productSlice";
import { adminAdd } from "./adminSlices/addSlice";
import { flags } from "./adminSlices/flagsSlice";

const store = configureStore({
  reducer: {
    products,
    theme,
    user,
    adminAdd,
    profile,
    flags,
  },
});
export default store;
