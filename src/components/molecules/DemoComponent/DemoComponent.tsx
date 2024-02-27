import React, { useState } from "react";
import { CustomDatePicker } from "@/components/atoms/DatePicker/DatePicker";

export function DemoComponent() {
  const [startDateLabel, setStartDateLabel] = useState("Start Date");
  const [endDateLabel, setEndDateLabel] = useState("End Date");
  const [startDatePlaceholder, setStartDatePlaceholder] = useState("Start Date");
  const [endDatePlaceholder, setEndDatePlaceholder] = useState("End Date");
  const [isEndDate, setIsEndDate] = useState(false);
  const [calendarStartFromMondayDay, setCalendarStartFromMondayDay] = useState(false);
  const [markSundayAsRed, setMarkSundayAsRed] = useState(false);
  const [endDateLimit, setEndDateLimit] = useState("");

  return (
    <>
      <div className="max-w-lg mx-auto mt-8 p-4 border border-gray-200 rounded-md shadow-md">
        <h2 className="text-lg font-semibold mb-4 text-center">Custom Date Picker Demo</h2>
        <div className="mb-4">
          <label htmlFor="startDateLabel" className="block text-sm font-medium text-gray-700">
            Start Date Label:
          </label>
          <input
            type="text"
            id="startDateLabel"
            className="border rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
            value={startDateLabel}
            onChange={(e) => setStartDateLabel(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="endDateLabel" className="block text-sm font-medium text-gray-700">
            End Date Label:
          </label>
          <input
            type="text"
            id="endDateLabel"
            className="border rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
            value={endDateLabel}
            onChange={(e) => setEndDateLabel(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="startDatePlaceholder" className="block text-sm font-medium text-gray-700">
            Start Date Placeholder:
          </label>
          <input
            type="text"
            id="startDatePlaceholder"
            className="border rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
            value={startDatePlaceholder}
            onChange={(e) => setStartDatePlaceholder(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="endDatePlaceholder" className="block text-sm font-medium text-gray-700">
            End Date Placeholder:
          </label>
          <input
            type="text"
            id="endDatePlaceholder"
            className="border rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
            value={endDatePlaceholder}
            onChange={(e) => setEndDatePlaceholder(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <input
            type="checkbox"
            id="isEndDate"
            className="mr-2"
            checked={isEndDate}
            onChange={(e) => setIsEndDate(e.target.checked)}
          />
          <label htmlFor="isEndDate" className="text-sm font-medium text-gray-700">
            Is End Date
          </label>
        </div>
        <div className="mb-4">
          <input
            type="checkbox"
            id="calendarStartFromMondayDay"
            className="mr-2"
            checked={calendarStartFromMondayDay}
            onChange={(e) => setCalendarStartFromMondayDay(e.target.checked)}
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
            onChange={(e) => setEndDateLimit(e.target.value)}
          />
        </div>
        

        
        
      </div>
      <div className="max-w-lg mx-auto mt-8 p-4 border border-gray-200 rounded-md shadow-md">
        <h2 className="text-lg font-semibold mb-4 text-center">Preview</h2>
        <div className="pt-8">
            <CustomDatePicker
              startDateLabel={startDateLabel}
              endDateLabel={endDateLabel}
              startDatePlaceHolder={startDatePlaceholder}
              endDatePlaceHolder={endDatePlaceholder}
              isEndDate={isEndDate}
              calendarStartFromMondayDay={calendarStartFromMondayDay}
              endDateLimit={endDateLimit ? new Date(endDateLimit) : undefined}
            />
        </div>
      </div>
    </>
  );
}
