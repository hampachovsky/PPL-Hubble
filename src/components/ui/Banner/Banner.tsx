import React from "react";

interface BannerProps {
  imageURL: string;
}

export const Banner: React.FC<BannerProps> = ({ imageURL }) => {
  return (
    <div className="relative w-full">
      <img
        src={imageURL}
        alt="category banner"
        className="h-auto max-h-72 w-full object-cover"
      />
    </div>
  );
};
