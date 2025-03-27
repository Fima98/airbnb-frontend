"use client";

import { DateRange, Range, RangeKeyDict } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

interface DateRangePickerProps {
  value: Range;
  onChange: (value: RangeKeyDict) => void;
  reservedDates?: Date[];
}

const Calendar: React.FC<DateRangePickerProps> = ({
  value,
  onChange,
  reservedDates,
}) => {
  return (
    <div className="w-full">
      <DateRange
        className="w-full"
        rangeColors={["#262626"]}
        ranges={[value]}
        onChange={onChange}
        direction="horizontal"
        showDateDisplay={false}
        minDate={new Date()}
        disabledDates={reservedDates}
        months={2}
      />
    </div>
  );
};

export default Calendar;
