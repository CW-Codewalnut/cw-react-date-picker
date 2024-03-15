import React, { useEffect, useState } from "react";
import clsx from "clsx";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useMobileScreen } from "@/customHooks/useMobileScreen";
import { DatePickerDay } from "./DatePickerDay/DatePickerDay";

export interface CodewalnutCustomDatePickerProps {
  isEndDate?: boolean;
  additionalDatePickerClasses?: string;
  calendarStartFromMondayDay?: boolean;
  startDatePlaceHolder?: string;
  endDatePlaceHolder?: string;
  startDateLabel?: string;
  endDateLabel?: string;
  endDateLimit?: Date;
  markSundayAsRed?: boolean;
  maxStartDate?: Date;
  maxEndDate?: Date;
}

export function CodewalnutCustomDatePicker({
  isEndDate,
  additionalDatePickerClasses = "",
  calendarStartFromMondayDay,
  startDatePlaceHolder,
  startDateLabel,
  endDateLabel,
  endDatePlaceHolder,
  endDateLimit,
  markSundayAsRed, // (adding color for sunday)
  maxStartDate,
  maxEndDate,
}: CodewalnutCustomDatePickerProps) {
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [endDate, setEndDate] = useState<Date>();
  const isMobile: boolean = useMobileScreen();

  const datePickerDynamicClasses = clsx(
    "h-12 pl-2 md:pl-4 w-fit pr-1 md:pr-3 flex justify-between relative group items-center border rounded-md rounded-tr-none hover:border-gray-600 border-gray-200",
    {
      "!border-primary border-2 hover:border-primary hover:border-2": true,
      [additionalDatePickerClasses]: additionalDatePickerClasses,
    },
  );
  const handleChangeStartDate = (date: Date) => setStartDate(date);
  const handleChangeEndDate = (date: Date) => setEndDate(date);

  useEffect(() => {
    const newEndDateAfterStartDateSelection =
      endDate && startDate && startDate.getTime() > endDate.getTime();
    if (newEndDateAfterStartDateSelection) {
      handleChangeEndDate(startDate);
    }
  }, [startDate, endDate]);
  return (
    <div className={datePickerDynamicClasses}>
      <span className="text-sm font-semibold whitespace-nowrap absolute -top-3 left-3 px-1 bg-white text-black text-opacity-60">
        {startDateLabel}
      </span>
      <button type="button" aria-label="Select departure date">
        <DatePicker
          dayClassName={(date) =>
            clsx(
              date.toDateString() === startDate?.toDateString() && "",
              date.getDay() === 0 && markSundayAsRed && "!text-red-500", // Additional condition, apply font-bold for Sundays
            )
          }
          placeholderText={startDatePlaceHolder}
          calendarClassName="!shadow-lg !flex !border-none"
          className="focus:outline-none w-fit text-xs md:text-sm font-medium"
          dateFormat="EEEE, dd MMM yyyy"
          monthsShown={isEndDate && !isMobile ? 2 : 1}
          popperClassName="!py-6"
          selected={startDate}
          selectsStart
          shouldCloseOnSelect
          startDate={startDate}
          onChange={(date: Date) => handleChangeStartDate(date)}
          calendarStartDay={calendarStartFromMondayDay ? 1 : 0}
          minDate={maxStartDate ?? new Date()}
          maxDate={maxEndDate ?? endDateLimit}
          renderDayContents={(day: number, date: Date) => {
            const isSelectedDate =
              startDate && date
                ? startDate.toLocaleDateString("en-GB") ===
                  date.toLocaleDateString("en-GB")
                : false;

            return (
              <DatePickerDay
                dayLabel="start label" // Max 10 chars
                day={day}
                date={date}
                isSelectedDate={isSelectedDate}
              />
            );
          }}
        />
      </button>
      {isEndDate && (
        <>
          <span className="w-1 border-2 border-red-500 mr-3 md:mr-5 ml-1 md:ml-3" />
          <span className="text-sm font-semibold whitespace-nowrap absolute -top-3 right-3 px-1 bg-white text-black text-opacity-60">
            {endDateLabel}
          </span>
          <button type="button" aria-label="Select departure date">
            <DatePicker
              dayClassName={(date) =>
                date.getDay() === 0 && markSundayAsRed ? "!text-red-500 " : ""
              }
              calendarClassName="!shadow-lg !flex !border-none"
              placeholderText={endDatePlaceHolder}
              className="focus:outline-none w-fit text-xs md:text-sm font-medium"
              dateFormat="EEEE, dd MMM yyyy"
              minDate={startDate}
              monthsShown={isMobile ? 1 : 2}
              popperClassName="!py-6"
              selected={endDate}
              selectsStart
              shouldCloseOnSelect
              startDate={endDate}
              onChange={(date: Date) => handleChangeEndDate(date)}
              calendarStartDay={calendarStartFromMondayDay ? 1 : 0}
              maxDate={endDateLimit}
              renderDayContents={(day: number, date: Date) => {
                const isSelectedDate =
                  endDate && date
                    ? endDate.toLocaleDateString("en-GB") ===
                      date.toLocaleDateString("en-GB")
                    : false;

                return (
                  <DatePickerDay
                    dayLabel="end label" // Max 10 chars
                    day={day}
                    date={date}
                    isSelectedDate={isSelectedDate}
                  />
                );
              }}
            />
          </button>
        </>
      )}
    </div>
  );
}
CodewalnutCustomDatePicker.defaultProps = {
  isEndDate: false,
  calendarStartFromMondayDay: false,
  startDatePlaceHolder: "Start Date",
  startDateLabel: "Start Date",
  endDatePlaceHolder: "End Date",
  endDateLabel: "End Date",
  endDateLimit: undefined,
  markSundayAsRed: false,
};
