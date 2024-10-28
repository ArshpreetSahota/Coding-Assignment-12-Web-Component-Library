import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import Card from "./Card";

describe("Testing Card Component", () => {
  it("should display the provided title and content", () => {
    render(<Card title="Example Title" content="Example Content" disabled={false}/>);
    expect(screen.getByText("Example Title")).toBeInTheDocument();
    expect(screen.getByText("Example Content")).toBeInTheDocument();
  });

  it("should correctly handle the disabled state of the card", () => {
    expect(screen.getByText("Disabled Card")).toBeVisible();
    expect(screen.getByText("Content not available")).toBeVisible();
    // Checking for reduced opacity to indicate disabled state
    expect(screen.getByRole('button')).toHaveAttribute('disabled');
    expect(screen.getByRole('button')).toHaveStyle('opacity: 0.5');
  });
});