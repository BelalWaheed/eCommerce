import UserProfile from "./components/user/UserProfile";
import Cart from "./pages/user/Cart";
import Home from "./pages/user/Home";
import ErrorSection7 from "./pages/user/ErrorSection7";
import { Login } from "./pages/user/Login";
import Products from "./pages/user/Products";
import { SignUp } from "./pages/user/Sign";
import { ComplexNavbar } from "./components/user/ComplexNavbar";
import { Foterr } from "./components/user/Foterr";
import { Route, Routes } from "react-router-dom";
import Profile from "./pages/user/Profile";
import { useSelector } from "react-redux";

function UserLayout() {
  const { loading } = useSelector((state) => state.products);

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
    <div className="bg-gradient-to-l from-gray-50 to-gray-100 dark:from-[#0f172a] dark:to-[#1e293b] transition-transform duration-300">
      <ComplexNavbar />

      <Routes>
        <Route index element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="cart" element={<Cart />} />
        <Route path="login" element={<Login />} />
        <Route path="sign-in" element={<SignUp />} />
        <Route path="profile" element={<Profile />} />
        <Route path="*" element={<ErrorSection7 />} />
      </Routes>

      <Foterr />
    </div>
  );
}

export default UserLayout;
