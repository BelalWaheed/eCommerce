import { Route, Routes } from "react-router-dom";
import SimpleNav from "./components/admin/SimpleNav";
import Dashboard from "./pages/admin/Dashboard";
import ErrorSection7 from "./pages/user/ErrorSection7";
import ProductDashboard from "./pages/admin/ProductDashboard";
import ProductView from "./pages/admin/ProductView";
import AddNewProduct from "./pages/admin/AddNewProduct";
import { useSelector } from "react-redux";
function AdminLayout() {
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
    <div className="bg-gradient-to-l  from-[#0f172a] to-[#1e293b] transition-transform duration-300">
      <SimpleNav />

      <Routes>
        <Route index element={<Dashboard />} />
        <Route path="products" element={<ProductDashboard />} />
        <Route path="addproduct" element={<AddNewProduct />} />
        <Route path="view/:productid" element={<ProductView />} />

        <Route path="*" element={<ErrorSection7 />} />
      </Routes>
    </div>
  );
}

export default AdminLayout;
