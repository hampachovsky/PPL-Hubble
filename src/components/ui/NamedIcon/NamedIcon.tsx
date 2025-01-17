import * as Icons from "@heroicons/react/20/solid";
import React from "react";

interface NamedIconProps {
  iconName: string;
  className: string;
}

export const NamedIcon: React.FC<NamedIconProps> = ({
  iconName,
  className,
}) => {
  const Icon = Icons[iconName as keyof typeof Icons];

  if (!Icon) {
    return null;
  }

  return <Icon className={className} />;
};
