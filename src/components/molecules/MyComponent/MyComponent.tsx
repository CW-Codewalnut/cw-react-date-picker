import { CodewalnutCustomDatePicker } from "@/components/atoms/CodewalnutCustomDatePicker/CodewalnutCustomDatePicker";

export function MyComponent() {
  const endDateLimit = new Date();
  endDateLimit.setDate(endDateLimit.getDate() + 30);
  return (
    <div className="">
      <CodewalnutCustomDatePicker
        isEndDate
        startDatePlaceHolder="Start Date"
        endDatePlaceHolder="End Date"
        calendarStartFromMondayDay
        endDateLimit={endDateLimit}
        markSundayAsRed
      />
    </div>
  );
}
