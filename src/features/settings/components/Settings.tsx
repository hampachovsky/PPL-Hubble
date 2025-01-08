import { LabeledInput } from "@/components";
import React from "react";

export const Settings: React.FC = () => {
  return (
    <div className="w-full rounded-md border border-gray-700 bg-stone-700 px-4 py-2 shadow md:w-3/4 lg:w-3/4">
      <h1 className="text-2xl font-bold">Profile</h1>
      <div className="mt-2 flex flex-col space-y-4 border-y border-neutral-600 py-2">
        <LabeledInput
          label="Avatar"
          type="text"
          placeholder="Avatar URL"
          isAvatar={true}
        />
        <LabeledInput
          label="Profile Banner"
          type="text"
          placeholder="Profile banner URL"
          imageUrl="https://images.pexels.com/photos/259620/pexels-photo-259620.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        />
      </div>
      <div className="flex flex-col space-y-4 border-y border-neutral-600 py-2">
        <LabeledInput label="Username" type="text" placeholder="Username" />
        <LabeledInput
          label="Status"
          type="text"
          placeholder="Your status"
          isTextarea={true}
        />
        <LabeledInput label="Password" type="password" placeholder="Password" />
        <LabeledInput
          label="Confirm Password"
          type="password"
          placeholder="Confirm Password"
        />
      </div>
      <div className="flex justify-end pt-2">
        <button className="mr-2 rounded-md bg-gray-700 px-4 py-2 text-white hover:bg-gray-600">
          Cancel
        </button>
        <button className="rounded-md bg-cyan-600 px-4 py-2 text-white hover:bg-cyan-700">
          Save
        </button>
      </div>
    </div>
  );
};
