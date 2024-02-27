import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { TextField, TextFieldProps } from "./TextField";

describe("TextField", () => {
  const defaultProps: TextFieldProps = {
    label: "Username",
    name: "username",
    value: "",
    onChange: jest.fn(),
  };

  const renderComponent = (additionalProps?: Partial<TextFieldProps>) => {
    render(<TextField {...defaultProps} {...additionalProps} />);
  };

  it("renders without an error", () => {
    renderComponent();
    expect(screen).not.toBeNull();
  });

  it("renders the label correctly", () => {
    renderComponent();
    expect(screen.getByText("Username")).toBeInTheDocument();
  });

  it("invokes onChange when input value changes", () => {
    const handleChange = jest.fn();
    renderComponent({ onChange: handleChange });
    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "test" } });
    expect(handleChange).toHaveBeenCalled();
  });

  // Additional test cases can be added to cover more scenarios
});
