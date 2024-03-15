import React from "react";
import { render, screen } from "@testing-library/react";
import {
  CodewalnutCustomDatePicker,
  CodewalnutCustomDatePickerProps,
} from "./CodewalnutCustomDatePicker";

describe("CodewalnutCustomDatePicker", () => {
  const defaultProps: CodewalnutCustomDatePickerProps = {
    isEndDate: true,
    additionalDatePickerClasses: "my-custom-class",
    calendarStartFromMondayDay: true,
    startDatePlaceHolder: "Start Date",
    endDatePlaceHolder: "End Date",
    startDateLabel: "Start Date",
    endDateLabel: "End Date",
    endDateLimit: new Date(
      "Fri Oct 22 2023 19:23:10 GMT+0530 (India Standard Time)",
    ),
    markSundayAsRed: true,
  };

  const renderComponent = (
    additionalProps?: Partial<CodewalnutCustomDatePickerProps>,
  ) => {
    render(
      <CodewalnutCustomDatePicker {...defaultProps} {...additionalProps} />,
    );
  };

  it("renders without an error", () => {
    renderComponent();
    expect(screen).not.toBeNull();
  });

  it("renders the start date heading", () => {
    renderComponent();
    expect(screen.getByText("Start Date")).toBeInTheDocument();
  });

  it("renders the end date heading when isEndDate is true", () => {
    renderComponent();
    expect(screen.getByText("End Date")).toBeInTheDocument();
  });

  it("renders the end date placeholder", () => {
    renderComponent();
    expect(screen.getByPlaceholderText("End Date")).toBeInTheDocument();
  });

  // Additional test cases can be added to cover more scenarios
});
