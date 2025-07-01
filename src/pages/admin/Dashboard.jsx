import { Card, Typography, Button } from "@material-tailwind/react";
import { useSelector } from "react-redux";

function Dashboard() {
  const { allUsers } = useSelector((state) => state.user);
  const { products } = useSelector((state) => state.products);
  const lastUser = allUsers[allUsers.length - 1];
  const lastProduct = products[products.length - 1];

  return (
    <div
      className="h-[calc(100vh-76px)] bg-gradient-to-tr from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white  
      flex items-center justify-center px-6 py-10"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-items-center">
        {/* USERS CARD */}
        <Card className="w-full max-w-sm p-6 rounded-2xl bg-gray-900 text-white shadow-xl">
          <Typography variant="h4" className="mb-4 text-center">
            USERS
          </Typography>
          <div className="border-b border-gray-700 mb-4"></div>
          <div className="space-y-4 text-base leading-relaxed">
            <p>
              <span className="font-semibold text-blue-400">
                Number of Users:
              </span>{" "}
              {allUsers.length}
            </p>
            <p>
              <span className="font-semibold text-blue-400">
                Last User Registered:
              </span>{" "}
              {lastUser?.name || "No users yet"}
            </p>
          </div>
          <Button
            color="white"
            className="mt-6 text-gray-900 font-semibold hover:shadow-lg transition"
            fullWidth
          >
            CHECK USERS
          </Button>
        </Card>

        {/* PRODUCTS CARD */}
        <Card className="w-full max-w-sm p-6 rounded-2xl bg-gray-900 text-white shadow-xl">
          <Typography variant="h4" className="mb-4 text-center">
            PRODUCTS
          </Typography>
          <div className="border-b border-gray-700 mb-4"></div>
          <div className="space-y-4 text-base leading-relaxed">
            <p>
              <span className="font-semibold text-green-400">
                Number of Products:
              </span>{" "}
              {products.length}
            </p>
            <p>
              <span className="font-semibold text-green-400">
                Last Product Added:
              </span>{" "}
              {lastProduct?.title || "No products yet"}
            </p>
          </div>
          <Button
            color="white"
            className="mt-6 text-gray-900 font-semibold hover:shadow-lg transition"
            fullWidth
          >
            CHECK PRODUCTS
          </Button>
        </Card>
      </div>
    </div>
  );
}

export default Dashboard;
