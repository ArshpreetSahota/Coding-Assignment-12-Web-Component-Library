import React from "react";
import styled from "styled-components";
import { IButton } from "./Button.types";

const CustomButton = styled.button<IButton>`
    border-radius: 5px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    padding: ${(props) =>
            props.size === "small" ? "6px 12px" : props.size === "medium" ? "10px 24px" : "16px 30px"};
    border: none;
    font-size: 1rem;
    min-width: 90px;
    cursor: pointer;
    font-family: "Arial", sans-serif;
    transition: all 0.3s ease;

    background-color: ${(props) => props.primary ? "#E4572E" : "#343434"};
    color: #fff;

    &:hover {
        background-color: ${(props) => (props.primary ? "#FFA07A" : "#696969")};
    }

    &:focus {
        outline: 3px solid #E4572E;
        outline-offset: 2px;
    }

    &:active {
        background-color: ${(props) => (props.primary ? "#AA381E" : "#1C1C1C")};
    }

    &:disabled {
        background-color: #b0b0b0;
        color: #fff;
        cursor: not-allowed;
    }

    ${(props) => props.success && `
        background-color: #4CAF50;
        &:hover {
            background-color: #45A049;
        }
        &:focus {
            outline: 3px solid #4CAF50;
            outline-offset: 2px;
        }
        &:active {
            background-color: #388E3C;
        }
    `}

    ${(props) => props.error && `
        background-color: #F44336;
        &:hover {
            background-color: #D32F2F;
        }
        &:focus {
            outline: 3px solid #F44336;
            outline-offset: 2px;
        }
        &:active {
            background-color: #C62828;
        }
    `}

    ${(props) => props.warning && `
        background-color: #FFEB3B;
        &:hover {
            background-color: #FDD835;
        }
        &:focus {
            outline: 3px solid #FFEB3B;
            outline-offset: 2px;
        }
        &:active {
            background-color: #FBC02D;
        }
    `}
`;

const Button: React.FC<IButton> = ({
                                     size = "medium",
                                     disabled = false,
                                     text,
                                     handleClick,
                                     ...props
                                   }) => {
  return (
      <CustomButton
          type="button"
          onClick={handleClick}
          disabled={disabled}
          size={size}
          {...props}
          aria-disabled={disabled ? true : undefined}>
        {text}
      </CustomButton>
  );
};

export default Button