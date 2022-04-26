import { ButtonGroupProps } from "@chakra-ui/react";
import React, { ReactNode } from "react";

type ButtonType = "button" | "reset" | "submit";

export interface ButtonParams extends ButtonGroupProps {
  label?: string;
  className?: string;
  onClick?: (ev: any) => void;
  type?: ButtonType;
  children?: ReactNode;
}
