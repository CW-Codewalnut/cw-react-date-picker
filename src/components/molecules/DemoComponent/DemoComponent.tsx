import React, { ChangeEvent, useEffect, useState } from "react";
import { TextField } from "@/components/atoms/TextField/TextField";
import { CustomDatePicker } from "@/components/atoms/DatePicker/DatePicker";
import clsx from "clsx";

export function DemoComponent() {
  const [startDateLabel, setStartDateLabel] = useState<string>("Start Date");
  const [endDateLabel, setEndDateLabel] = useState<string>("End Date");
  const [startDatePlaceholder, setStartDatePlaceholder] = useState<string>("Start Date");
  const [endDatePlaceholder, setEndDatePlaceholder] = useState<string>("End Date");
  const [isEndDate, setIsEndDate] = useState<boolean>(false);
  const [calendarStartFromMondayDay, setCalendarStartFromMondayDay] = useState<boolean>(false);
  const [endDateLimit, setEndDateLimit] = useState<string>("");
  const [isDob, setIsDob] = useState<boolean>(false);

  useEffect(()=>{
    if(isDob) {
      setStartDateLabel("Date of birth")
      setIsEndDate(false);
    }else {
      setStartDateLabel("Start Date")
    }
  },[isDob])

  return (
    <div className="flex justify-around space-x-4 px-4">
      <div className="mt-8 p-4 border border-gray-200 rounded-md shadow-md">
        <h2 className="text-lg font-semibold mb-4 text-center">Custom Date Picker Demo</h2>
        <div className="mb-4">
          <TextField  label="Start Date Label"
                    value={startDateLabel} 
                    type="text"
                    id="startDateLabel"
                    className="border rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
                    onChange={(event: ChangeEvent<HTMLInputElement>) => setStartDateLabel(event.target.value)}
                    name="startDate"/>
          
        </div>
        <div className="mb-4">
          <TextField  label="End Date Label"
                    value={endDateLabel} 
                    type="text"
                    id="endDateLabel"
                    className="border rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
                    onChange={(event: ChangeEvent<HTMLInputElement>) => setEndDateLabel(event.target.value)}
                    name="endDate"/>
          
        </div>
        <div className="mb-4">
          <TextField  label="Start Date Placeholder"
                    value={startDatePlaceholder} 
                    type="text"
                    id="startDatePlaceholder"
                    className="border rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
                    onChange={(event: ChangeEvent<HTMLInputElement>) => setStartDatePlaceholder(event.target.value)}
                    name="endDate"/>
        </div>
        <div className="mb-4">
        <TextField  label="End Date Placeholder"
                    value={startDatePlaceholder} 
                    type="text"
                    id="endDatePlaceholder"
                    className="border rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
                    onChange={(event: ChangeEvent<HTMLInputElement>) => setEndDatePlaceholder(event.target.value)}
                    name="endDate"/>
          
        </div>
        <div className="mb-4"
          title={isDob ? "Please uncheck DOB for End Date feature" : "Enable End Date"}
        >
          <input
            type="checkbox"
            id="isEndDate"
            className={clsx(
              "mr-2",
            {
              "cursor-not-allowed":isDob
            })}
            checked={isEndDate}
            onChange={(event: ChangeEvent<HTMLInputElement>) => setIsEndDate(event.target.checked)}
            disabled={isDob}
          />
          <label htmlFor="isEndDate" className="text-sm font-medium text-gray-700">
            Is End Date
          </label>
        </div>
        <div className="mb-4">
          <input
            type="checkbox"
            id="isDob"
            className="mr-2"
            checked={isDob}
            onChange={(event: ChangeEvent<HTMLInputElement>) => {
              setIsDob(event.target.checked);
              if (event.target.checked) {
                setIsEndDate(false); // Disable end date when isDob is true
              }
            }}
          />
          <label htmlFor="isDob" className="text-sm font-medium text-gray-700">
            Is Date of Birth
          </label>
        </div>
        <div className="mb-4">
          <input
            type="checkbox"
            id="calendarStartFromMondayDay"
            className="mr-2"
            checked={calendarStartFromMondayDay}
            onChange={(event: ChangeEvent<HTMLInputElement>) => setCalendarStartFromMondayDay(event.target.checked)}
          />
          <label htmlFor="calendarStartFromMondayDay" className="text-sm font-medium text-gray-700">
            Calendar Starts From Monday
          </label>
        </div>
        <div className="mb-4">
          <label htmlFor="endDateLimit" className="block text-sm font-medium text-gray-700">
            End Date Limit:
          </label>
          <input
            type="date"
            id="endDateLimit"
            className="border rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
            value={endDateLimit}
            onChange={(event: ChangeEvent<HTMLInputElement>) => setEndDateLimit(event.target.value)}
          />
        </div>        
      </div>
      <div className="mx-auto mt-8 p-4 border border-gray-200 rounded-md shadow-md flex flex-col items-center">
        <h2 className="md:w-[500px] text-lg font-semibold mb-4 text-center">Preview</h2>
        <div className="">
            <CustomDatePicker
              startDateLabel={startDateLabel}
              endDateLabel={endDateLabel}
              startDatePlaceHolder={startDatePlaceholder}
              endDatePlaceHolder={endDatePlaceholder}
              isEndDate={isEndDate}
              calendarStartFromMondayDay={calendarStartFromMondayDay}
              endDateLimit={endDateLimit ? new Date(endDateLimit) : undefined}
              maxStartDate={isDob ? new Date(new Date().setFullYear(new Date().getFullYear() - 100)) : undefined} // Set max start date to 100 years ago if isDob is true
              maxEndDate={isDob ? new Date() : undefined} 
            />
        </div>
      </div>
    </div>
  );
}
