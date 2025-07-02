import { useSelector } from "react-redux";
import { Button } from "@material-tailwind/react";

function ViewUsers() {
  const { allUsers } = useSelector((state) => state.user);


  return (
    <div className="min-h-screen bg-gradient-to-tr from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white px-4 py-8">
      <div className="max-w-7xl mx-auto space-y-8">
        <header className="text-center">
          <h1 className="text-3xl font-bold mb-2">All Users</h1>
          <p className="text-gray-400 text-sm sm:text-base">
            View and manage registered users
          </p>
        </header>

        <div className="overflow-auto scrollbar-hidden rounded-2xl shadow-lg ring-1 ring-gray-800 bg-[#1e293b]">
          <table className="min-w-[800px] w-full">
            <thead className="bg-[#334155] text-sm text-gray-300 uppercase">
              <tr>
                <th className="p-4 text-left">Username</th>
                <th className="p-4 text-left">Email</th>
                <th className="p-4 text-left">Role</th>
                <th className="p-4 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {allUsers.length > 0 ? (
                allUsers.map((user) => (
                  <tr
                    key={user.id}
                    className="border-t border-gray-700 hover:bg-[#2d3b52]/70 transition-colors duration-150"
                  >
                    <td className="p-4 text-gray-100">{user.name}</td>
                    <td className="p-4 text-gray-100">{user.email}</td>
                    <td className="p-4 text-green-400 font-medium">
                      {user.role}
                    </td>
                    <td className="p-4 flex flex-wrap justify-center gap-2">
                      <Button
                        size="sm"
                        color="blue"
                        onClick={() => alert(`Add action for ${user.name}`)}
                      >
                        Add
                      </Button>
                      <Button
                        size="sm"
                        color="amber"
                        onClick={() => alert(`Edit action for ${user.name}`)}
                      >
                        Edit
                      </Button>
                      <Button
                        size="sm"
                        color="green"
                        onClick={() => alert(`Make Admin action for ${user.name}`)}
                      >
                        Make Admin
                      </Button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="p-6 text-center text-gray-400">
                    No users found.
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

export default ViewUsers;
