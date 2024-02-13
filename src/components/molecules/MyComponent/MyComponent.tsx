import { CustomDatePicker } from "@/components/atoms/DatePicker/DatePicker";

export function MyComponent() {
  return (
    <div className="w-full flex justify-center">
      <CustomDatePicker isEndDate 
                        startDatePlaceHolder="Start Date"
                        endDatePlaceHolder="End Date"
                        calendarStartFromMondayDay
                        endDateLimit={endDateLimit}
                        markSundayAsRed
                          />
    </div>
  );
}
