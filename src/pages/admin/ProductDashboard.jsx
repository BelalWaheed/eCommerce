import { Button, Typography } from "@material-tailwind/react";
import axios from "axios";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
function ProductDashboard() {
  const URL = import.meta.env.VITE_URL;
  const addNewProduct = () => {};

  const deleteProduct = (id) => async () => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
    });

    if (result.isConfirmed) {
      try {
        await axios.delete(`${URL}/items/${id}`);
        Swal.fire("Deleted!", "The product has been deleted.", "success");
      } catch (error) {
        Swal.fire("Error", "Something went wrong while deleting.", "error");
      }
    } else if (result.dismiss === Swal.DismissReason.cancel) {
      Swal.fire("Cancelled", "The product is safe :)", "info");
    }
  };
  const { products, loading } = useSelector((state) => state.products);

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
    <div className="min-h-screen bg-gradient-to-tr from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white px-4 py-8">
      <div className="max-w-7xl mx-auto space-y-8">
        <header className="text-center">
          <Link to="/admin/addproduct">
            <Button
              className="mb-4 bg-blue-600 hover:bg-blue-500 text-white px
            py-2 rounded-full transition-colors"
            >
              Add New Product
            </Button>
          </Link>
          <p className="text-gray-400 text-sm sm:text-base">
            Manage your products efficiently
          </p>
        </header>

        <div className="w-full overflow-x-auto rounded-2xl shadow-lg ring-1 ring-gray-800 bg-[#1e293b]">
          <table className="min-w-[600px] w-full table-auto">
            <thead className="bg-[#334155] text-sm text-gray-300 uppercase">
              <tr>
                <th className="p-4 text-left">Image</th>
                <th className="p-4 text-left">Product</th>
                <th className="p-4 text-left">Price</th>
                <th className="p-4 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.length > 0 ? (
                products.map((product) => (
                  <tr
                    key={product.id}
                    className="border-t border-gray-700 hover:bg-[#2d3b52]/70 transition-colors duration-150"
                  >
                    <td className="p-4">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-12 h-12 object-cover rounded-md shadow-sm"
                      />
                    </td>
                    <td className="p-4 text-gray-100">{product.title}</td>
                    <td className="p-4 text-green-400 font-semibold">
                      ${product.price}
                    </td>
                    <td className="p-4">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-2 space-y-2 sm:space-y-0">
                        <Link to={`/admin/view/${product.id}`}>
                          <Button className="px-4 py-1.5 rounded-full bg-blue-600 hover:bg-blue-500 text-sm font-medium transition">
                            View
                          </Button>
                        </Link>
                        <Button className="px-4 py-1.5 rounded-full bg-yellow-400 hover:bg-yellow-300 text-black text-sm font-medium transition">
                          Edit
                        </Button>
                        <Button
                          onClick={deleteProduct(product.id)}
                          className="px-4 py-1.5 rounded-full bg-red-600 hover:bg-red-500 text-sm font-medium transition"
                        >
                          Delete
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="p-6 text-center text-gray-400">
                    No products available.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ProductDashboard;
