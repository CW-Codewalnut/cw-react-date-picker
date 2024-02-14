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

  return (
    <div>
      <div>
        <label>Start Date Label:</label>
        <input
          type="text"
          value={startDateLabel}
          onChange={(e) => setStartDateLabel(e.target.value)}
        />
      </div>
      <div>
        <label>End Date Label:</label>
        <input
          type="text"
          value={endDateLabel}
          onChange={(e) => setEndDateLabel(e.target.value)}
        />
      </div>
      <div>
        <label>Start Date Placeholder:</label>
        <input
          type="text"
          value={startDatePlaceholder}
          onChange={(e) => setStartDatePlaceholder(e.target.value)}
        />
      </div>
      <div>
        <label>End Date Placeholder:</label>
        <input
          type="text"
          value={endDatePlaceholder}
          onChange={(e) => setEndDatePlaceholder(e.target.value)}
        />
      </div>
      <div>
        <label>
          Is End Date:
          <input
            type="checkbox"
            checked={isEndDate}
            onChange={(e) => setIsEndDate(e.target.checked)}
          />
        </label>
      </div>
      <div>
        <label>
          Calendar Starts From Monday:
          <input
            type="checkbox"
            checked={calendarStartFromMondayDay}
            onChange={(e) => setCalendarStartFromMondayDay(e.target.checked)}
          />
        </label>
      </div>
      <div>
        <label>
          Mark Sunday as Red:
          <input
            type="checkbox"
            checked={markSundayAsRed}
            onChange={(e) => setMarkSundayAsRed(e.target.checked)}
          />
        </label>
      </div>
      <CustomDatePicker
        startDateLabel={startDateLabel}
        endDateLabel={endDateLabel}
        startDatePlaceHolder={startDatePlaceholder}
        endDatePlaceHolder={endDatePlaceholder}
        isEndDate={isEndDate}
        calendarStartFromMondayDay={calendarStartFromMondayDay}
        markSundayAsRed={markSundayAsRed}
      />
    </div>
  );
}
