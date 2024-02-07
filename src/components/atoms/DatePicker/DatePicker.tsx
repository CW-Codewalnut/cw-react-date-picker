import React, { useEffect, useState } from "react";
import clsx from "clsx";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { DatePickerDay } from "./DatePickerDay/DatePickerDay";

interface CustomDatePickerProps {
  isEndDate?: boolean;
  additionalDatePickerClasses?: string;
  calendarStartFromMondayDay?: boolean;
  startDatePlaceHolder?: string;
  endDatePlaceHolder?: string;
  startDateHeading?:string;
  endDateHeading?:string;
  endDateLimit?: Date;
  markSundayAsRed ?: boolean;
}

export function CustomDatePicker({
  isEndDate,
  additionalDatePickerClasses = "",
  calendarStartFromMondayDay,
  startDatePlaceHolder,
  startDateHeading,
  endDateHeading,
  endDatePlaceHolder,
  endDateLimit,
  markSundayAsRed
}: CustomDatePickerProps) {
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [isStartDateOpen, setIsStartDateOpen] = useState<boolean>(false);

  const [endDate, setEndDate] = useState<Date>();
  const [isEndDateOpen, setIsEndDateOpen] = useState<boolean>(false);

  const datePickerDynamicClasses = clsx(
    "h-12 pl-4 w-fit pr-3 flex justify-between relative group items-center border rounded-md rounded-tr-none hover:border-gray-600 border-gray-200",
    {
      "!border-primary border-2 hover:border-primary hover:border-2": true,
      [additionalDatePickerClasses]: additionalDatePickerClasses,
    }
  );
    
  const handleChangeStartDate = (date: Date) => setStartDate(date);
  const handleChangeEndDate = (date: Date) => setEndDate(date);

  useEffect(() => {
    const newEndDateAfterStartDateSelection =
      endDate && startDate && startDate.getTime() > endDate.getTime();
    newEndDateAfterStartDateSelection ? handleChangeEndDate(startDate) : null;
  }, [startDate, endDate]);

  return (
    <div className={datePickerDynamicClasses}>
      <span className="text-sm font-semibold	 whitespace-nowrap absolute -top-3 left-3 px-1 bg-white text-black text-opacity-60">
        {startDateHeading}
      </span>
      <button
        onClick={() => {
          setIsStartDateOpen(true);
          setIsEndDateOpen(false);
        }}
        type="button"
        aria-label="Select departure date"
      >
        <DatePicker
          dayClassName={(date) => clsx(
            date.toDateString() === startDate?.toDateString()  && '',
            date.getDay() === 0 && markSundayAsRed && '!text-red-500' // Additional condition, apply font-bold for Sundays
          )}
          placeholderText={startDatePlaceHolder}
          calendarClassName="!shadow-lg !flex !border-none"
          className="focus:outline-none w-fit text-sm font-medium"
          dateFormat="EEEE, dd MMM yyyy"
          minDate={new Date()}
          monthsShown={isEndDate ? 2 : 1}
          popperClassName="!py-6"
          selected={startDate}
          selectsStart
          shouldCloseOnSelect
          startDate={startDate}
          onChange={(date: Date) => handleChangeStartDate(date)}
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
          calendarStartDay={calendarStartFromMondayDay ? 1 : 0}
          maxDate={endDateLimit}
          
        />
      </button>
      {isEndDate && (
        <>
          <span className="w-1 border-2 border-red-500 mr-5 ml-3" />
          <span className="text-sm font-semibold whitespace-nowrap absolute -top-3 right-3 px-1 bg-white text-black text-opacity-60">
            {endDateHeading}
          </span>
          <button
            onClick={() => {
              setIsStartDateOpen(false);
              setIsEndDateOpen(true);
            }}
            type="button"
            aria-label="Select departure date"
          >
            <DatePicker
              dayClassName={(date) => (date.getDay() === 0 && markSundayAsRed ? '!text-red-500 ' : '')}
              calendarClassName="!shadow-lg !flex !border-none"
              placeholderText={endDatePlaceHolder}
              className="focus:outline-none w-fit text-sm font-medium"
              dateFormat="EEEE, dd MMM yyyy"
              minDate={startDate}
              monthsShown={2}
              popperClassName="!py-6"
              selected={endDate}
              selectsStart
              shouldCloseOnSelect
              startDate={endDate}
              onChange={(date: Date) => handleChangeEndDate(date)}
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
              calendarStartDay={calendarStartFromMondayDay ? 1 : 0}
              maxDate={endDateLimit}
            />
          </button>
        </>
      )}
    </div>
  );
}
CustomDatePicker.defaultProps = {
  isEndDate: false,
  calendarStartFromMondayDay: false,
  startDatePlaceHolder : "Start Date",
  startDateHeading : "Start Date",
  endDatePlaceHolder : "End Date",
  endDateHeading : "End Date",
  endDateLimit : undefined,
  markSundayAsRed : false
};