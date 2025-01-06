import { Banner, UserAvatar } from "@/components";
import React from "react";

export const Profile: React.FC = () => {
  return (
    <div>
      <>
        <Banner imageURL="https://images.pexels.com/photos/259620/pexels-photo-259620.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
        <div className="p-4">
          <div className="flex items-center gap-2">
            <UserAvatar
              userId="1"
              avatarURL="https://placebear.com/600/600"
              size={16}
            />
            <h5 className="text-xl">User</h5>
            <p className="text-gray-400">gmail@gmail.com</p>
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
