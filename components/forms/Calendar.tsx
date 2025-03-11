"use client";

import { DateRange, Range, RangeKeyDict } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

interface DateRangePickerProps {
    value: Range;
    onChange: (value: RangeKeyDict) => void;
    bookedDates?: Date[];
}

const Calendar: React.FC<DateRangePickerProps> = ({
    value,
    onChange,
    bookedDates,
}) => {
    return (
        <>
            <DateRange
                className="w-full rounded-xl mb-4"
                rangeColors={["#262626"]}
                ranges={[value]}
                onChange={onChange}
                direction="horizontal"
                showDateDisplay={false}
                minDate={new Date()}
                disabledDates={bookedDates}
            />
        </>
    );
};

export default Calendar;
