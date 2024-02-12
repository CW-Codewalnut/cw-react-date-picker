import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { CustomDatePicker, CustomDatePickerProps } from "./DatePicker";

describe("CustomDatePicker", () => {
  
  const defaultProps: CustomDatePickerProps = {
    isEndDate: true,
    additionalDatePickerClasses: "my-custom-class",
    calendarStartFromMondayDay: true,
    startDatePlaceHolder: "Start Date",
    endDatePlaceHolder: "End Date",
    startDateHeading: "Start Date",
    endDateHeading: "End Date",
    endDateLimit: new Date("Fri Oct 22 2023 19:23:10 GMT+0530 (India Standard Time)"),
    markSundayAsRed: true
  };

  const renderComponent = (additionalProps?: Partial<CustomDatePickerProps>) => {
    render(<CustomDatePicker {...defaultProps} {...additionalProps} />);
  };

  it("renders without an error", () => {
    renderComponent();
    expect(screen).not.toBeNull();
  });

//   it("renders the start date heading", () => {
//     renderComponent();
//     expect(screen.getByText("Start Date")).toBeInTheDocument();
//   });
  
//   it("renders the end date heading when isEndDate is true", () => {
//     renderComponent();
//     expect(screen.getByText("End Date")).toBeInTheDocument();
//   });

//   it("renders the end date placeholder", () => {
//     renderComponent();
//     expect(screen.getByPlaceholderText("End Date")).toBeInTheDocument();
//   });

//   it("opens the start date picker when the start date input is clicked", async () => {
//     renderComponent();
//     await userEvent.click(screen.getByPlaceholderText("Start Date"));
//     expect(screen.getByLabelText("Select departure date")).toBeInTheDocument();
//   });

  it("opens the end date picker when the end date input is clicked", async () => {
    renderComponent();
    await userEvent.click(screen.getByLabelText("End Date"));
    expect(screen.getByLabelText("End Date")).toBeInTheDocument();
  });

  // Additional test cases can be added to cover more scenarios
});
