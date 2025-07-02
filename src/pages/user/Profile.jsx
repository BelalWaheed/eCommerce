import {
  Card,
  Typography,
  Button,
  Avatar,
  IconButton,
} from "@material-tailwind/react";
import { useSelector } from "react-redux";
import { useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";

export default function Profile() {
  const { loggedUser } = useSelector((state) => state.profile);
  const [showPassword, setShowPassword] = useState(false);


  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-l from-gray-50 to-gray-100 dark:from-[#0f172a] dark:to-[#1e293b] px-4">
      <Card className="w-full max-w-md p-6 rounded-2xl bg-white/80 dark:bg-white/5 dark:backdrop-blur-md shadow-md">
        <div className="flex flex-col items-center gap-3">
          {loggedUser?.gender === "male" ? (
            <Avatar
              variant="circular"
              size="md"
              alt="tania andrew"
              withBorder={true}
              color="blue-gray"
              className=" p-0.5"
              src="https://i.ibb.co/JWJ9wnxY/male.png"
            />
          ) : (
            <Avatar
              variant="circular"
              size="md"
              alt="tania andrew"
              withBorder={true}
              color="blue-gray"
              className=" p-0.5"
              src="https://i.ibb.co/xSmDKcN4/female-avatar-girl-face-woman-user-9-svgrepo-com.png"
            />
          )}

          <Typography variant="h4" className="text-gray-900 dark:text-white">
            {loggedUser?.name || "Your Name"}
          </Typography>
        </div>

        <div className="mt-8">
          <Typography className="text-gray-700 dark:text-gray-200 mb-2 font-semibold">
            Profile Info
          </Typography>
          <div className="space-y-4">
            <div className="flex justify-between items-center text-sm text-gray-800 dark:text-gray-300">
              <span className="font-medium">Email:</span>
              <span className="truncate">
                {loggedUser?.email || "you@example.com"}
              </span>
            </div>
            <div className="flex justify-between items-center text-sm text-gray-800 dark:text-gray-300">
              <span className="font-medium">Password:</span>
              <div className="flex items-center gap-2">
                <span className="tracking-widest">
                  {showPassword ? loggedUser?.password : "••••••••"}
                </span>
                <IconButton
                  variant="text"
                  size="sm"
                  onClick={() => setShowPassword(!showPassword)}
                  className="text-gray-600 dark:text-gray-300"
                >
                  {showPassword ? (
                    <EyeSlashIcon className="h-5 w-5" />
                  ) : (
                    <EyeIcon className="h-5 w-5" />
                  )}
                </IconButton>
              </div>
            </div>
          </div>
        </div>

        <Button
          className="mt-8 bg-gradient-to-r from-blue-700 to-purple-700 text-white"
          fullWidth
        >
          Edit Profile
        </Button>
      </Card>
    </div>
  );
}
