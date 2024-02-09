import React from "react";
import { render, screen } from "@testing-library/react";
import { DatePickerDay, DatePickerDayProps } from "./DatePickerDay";

describe("DatePickerDay", () => {
  const defaultProps: DatePickerDayProps = {
    date: new Date("Fri Oct 20 2026 19:23:10 GMT+0530 (India Standard Time)"),
    day: 20,
    dayLabel: "test label",
    isSelectedDate: false,
  };

  const renderComponent = (additionalProps?: Partial<DatePickerDayProps>) => {
    render(<DatePickerDay {...defaultProps} {...additionalProps} />);
  };

  it("renders without an error", () => {
    renderComponent();
    expect(screen).not.toBeNull();
  });

  it("renders the day", () => {
    renderComponent();
    expect(screen.getByText("20")).toBeInTheDocument();
  });

  it("renders the text label on the day ", () => {
    renderComponent();
    expect(screen.getByText("test label")).toBeInTheDocument();
  });
});
