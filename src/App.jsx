import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { setAllUsers } from "./redux/userSlices/userSlice";
import { setLogged, setLoggedUser } from "./redux/userSlices/profileSlice";
import UserLayout from "./UserLayout";
import AdminLayout from "./AdminLayout";
import { setLoading, setProducts } from "./redux/userSlices/productSlice";
import ErrorSection7 from "./pages/user/ErrorSection7";
import axios from "axios";

function App() {
  const dispatch = useDispatch();
  const URL = import.meta.env.VITE_URL;
  const { logged, loggedUser } = useSelector((state) => state.profile);
  const { products, loading } = useSelector((state) => state.products);

  async function getAllUsers() {
    const res = await axios.get(`${URL}/users`);
    const data = res.data;
    dispatch(setAllUsers(data));
  }

  useEffect(() => {
    getAllUsers();
  }, [logged]);

  async function getProducts() {
    const res = await axios.get(`${URL}/items`);
    if (res.status === 200) {
      dispatch(setProducts(res.data));
    } else {
      console.log("Error fetching products");
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  async function getUserData() {
    if (localStorage.userI) {
      dispatch(setLoading(true));
      const res = await axios.get(`${URL}/users/${localStorage.userI}`);
      if (res.status === 200) {
        dispatch(setLoggedUser(res.data));
        dispatch(setLogged(true));
        dispatch(setLoading(false));
      }
    }
  }

  useEffect(() => {
    getUserData();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-900 text-white">
        <div className="flex flex-col items-center space-y-6">
          <div className="w-16 h-16 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
          <p className="text-xl font-semibold animate-pulse">
            Loading, please wait...
          </p>
        </div>
      </div>
    );
  }

  return (
    <Routes>
      <Route path="/*" element={<UserLayout />} />
      <Route
        path="/admin/*"
        element={
          loggedUser?.role === "admin" ? <AdminLayout /> : <ErrorSection7 />
        }
      />
    </Routes>
  );
}

export default App;
