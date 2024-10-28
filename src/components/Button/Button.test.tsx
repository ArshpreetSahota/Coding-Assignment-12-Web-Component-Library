import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import Button from "./Button";

describe("Button Component Tests", () => {
  it("should display a button with the provided text", () => {
    const buttonText = "Click here";
    render(<Button text={buttonText}/>);
    const buttonElement = screen.getByRole("button", { name: buttonText });
    expect(buttonElement).toBeVisible();
  });

  it("should ensure the button is disabled when the disabled prop is true", () => {
    const buttonText = "Disabled Button";
    render(<Button text={buttonText} disabled/>);
    const buttonElement = screen.getByRole("button", { name: buttonText });
    expect(buttonElement).toBeDisabled();
    expect(buttonElement).toHaveAttribute("disabled");
  });
});