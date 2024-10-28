import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Img from "./Image";

describe("Img Component Tests", () => {
  test("renders the image with correct attributes", () => {
    render(<Img src="test.jpg" alt="Test Image"/>);
    const image = screen.getByAltText("Test Image");
    expect(image).toBeVisible();
    expect(image).toHaveAttribute("src", "test.jpg");
  });

  test("applies reduced opacity when disabled", () => {
    render(<Img src="test.jpg" alt="Test Image" disabled/>);
    const image = screen.getByAltText("Test Image");
    expect(image).toHaveStyle("opacity: 0.5");
  });
});