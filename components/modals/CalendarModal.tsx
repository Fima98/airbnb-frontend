"use client";

import React from "react";
import Modal from "./Modal";
import Calendar from "../forms/Calendar";
import useCalendarModal from "@/hooks/useCalendarModal";

interface CalendarModalProps {
  initialDateRange: any;
  reservedDates: Date[];
  onSelectDates: (ranges: any) => void;
}

const CalendarModal: React.FC<CalendarModalProps> = ({
  initialDateRange,
  reservedDates,
  onSelectDates,
}) => {
  const calendarModal = useCalendarModal();

  const handleDateChange = (ranges: any) => {
    onSelectDates(ranges);
  };

  const content = (
    <Calendar
      value={initialDateRange}
      onChange={handleDateChange}
      reservedDates={reservedDates}
    />
  );

  return (
    <Modal
      isOpen={calendarModal.isOpen}
      label="Select dates"
      content={content}
      close={calendarModal.close}
    />
  );
};

export default CalendarModal;
