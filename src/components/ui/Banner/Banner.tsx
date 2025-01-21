import React from "react";

interface BannerProps {
  imageURL: string | undefined;
}

export const Banner: React.FC<BannerProps> = ({ imageURL }) => {
  return (
    <div className="relative w-full">
      {imageURL !== undefined ? (
        <img
          src={imageURL}
          alt="category banner"
          className="h-auto max-h-72 w-full object-cover"
        />
      ) : (
        <div className="h-48 max-h-72 w-full bg-stone-900 object-cover"></div>
      )}
    </div>
  );
};
