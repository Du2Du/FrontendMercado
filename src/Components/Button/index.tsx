import React from "react";
import { Button as OldButton } from "@chakra-ui/react";
import { ButtonParams } from "./Interface";

export const Button: React.FC<ButtonParams> = ({
  colorScheme,
  label,
  variant,
  className,
  onClick,
  type,
  children,
}) => {
  return (
    <OldButton
      colorScheme={colorScheme}
      onClick={onClick}
      type={type}
      className={className}
      variant={variant}
    >
      {children}
      {label}
    </OldButton>
  );
};
