import clsx from "clsx";
import React from "react";

interface DatePickerDayProps {
  day: number;
  date: Date;
  dayLabel: string;
  isSelectedDate: boolean;
}
export function DatePickerDay({
  day,
  date,
  dayLabel,
  isSelectedDate,
}: DatePickerDayProps) {
  console.log({ day, date, dayLabel, isSelectedDate });
  if (date && day && dayLabel) {
    return (
      <div
        className={clsx(
          // NOTE: A Few styles can be customized from global CSS.
          "!rounded-[4.8px] h-9 w-9 flex flex-col items-center justify-between p-2 !bg-red-400", // Add default `background-color` with important notation for each day in the calender.
          {
            " dark:bg-black": !isSelectedDate,
            "border border-primary dark:border-black !p-[7px] !bg-green-400":
              isSelectedDate, // Add selected day `background-color` with important notation in the calender
          }
        )}
        aria-label="day-block-with-text"
      >
        <div
          className={clsx("h-3 flex items-center justify-center", {
            " dark:text-white": !isSelectedDate,
            "text-primary dark:text-black": isSelectedDate,
            "text-primary dark:text-black ": isSelectedDate,
          })}
        >
          {day}
        </div>
        <div
          className={clsx(
            "h-2.5 flex items-center justify-center text-[6px] text-gray-600 font-semibold dark:text-white",
            {
              "dark:!text-black text-white": isSelectedDate,
            }
          )}
        >
          {dayLabel.slice(0, 11)}
        </div>
      </div>
    );
  }
  return <div>{day}</div>;
}
