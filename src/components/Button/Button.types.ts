import React from "react";

export interface IButton {
  text?: string;
  primary?: boolean;
  disabled?: boolean;
  size?: "small" | "medium" | "large";
  handleClick?: React.MouseEventHandler<HTMLButtonElement>;
  success?: boolean;
  error?: boolean;
  warning?: boolean;
}