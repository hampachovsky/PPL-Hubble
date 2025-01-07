import { Banner, UserAvatar } from "@/components";
import { paths } from "@/config";
import { Cog6ToothIcon } from "@heroicons/react/20/solid";
import React from "react";
import { useNavigate } from "react-router";

export const Profile: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div>
      <>
        <Banner imageURL="https://images.pexels.com/photos/259620/pexels-photo-259620.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
        <div className="p-4">
          <div className="flex flex-wrap items-center justify-between">
            <div className="flex flex-col items-center gap-2 sm:flex-row">
              <div className="flex items-center space-x-2">
                <UserAvatar
                  avatarURL="https://placebear.com/600/600"
                  size={"lg"}
                />
                <h5 className="text-xl">User</h5>
              </div>
              <p className="text-gray-400">gmail@gmail.com</p>
            </div>
            <div className="mt-2 sm:mt-0">
              <button
                onClick={() => navigate(paths.settings.path)}
                className="inline-flex items-center rounded-md bg-neutral-600 px-4 py-2 font-bold hover:bg-gray-400"
              >
                <Cog6ToothIcon className="h-6 w-6" />
              </button>
            </div>
          </div>

          <div>
            <p className="text-wrap">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
              voluptatibus aliquid temporibus quidem minus non!
            </p>
            <div className="flex space-x-2">
              <h6 className="mt-2 text-gray-400">10 subscribers</h6>
              <h6 className="mt-2 text-gray-400">3 subscription</h6>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};
