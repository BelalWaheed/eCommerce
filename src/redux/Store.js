import { configureStore } from "@reduxjs/toolkit";
import { profile } from "./userSlices/profileSlice";
import { user } from "./userSlices/userSlice";
import { theme } from "./userSlices/themeSlice";
import { products } from "./userSlices/productSlice";
import { adminAdd } from "./adminSlices/addSlice";

const store = configureStore({
  reducer: {
    products,
    theme,
    user,
    adminAdd,
    profile,
  },
});
export default store;
