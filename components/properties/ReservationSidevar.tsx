"use client";

import { useState, useEffect } from "react";
import { differenceInDays, format } from "date-fns";
import { Range } from "react-date-range";

import Calendar from "../forms/Calendar";
import apiService from "@/services/apiService";
import useLoginModal from "@/hooks/useLoginModal";

const initialDateRange = {
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
};

export type Property = {
    id: string;
    price_per_night: number;
    guests: number;
};

type ReservationSidevarProps = {
    userId: string | null;
    property: Property;
};

const ReservationSidevar: React.FC<ReservationSidevarProps> = ({
    property,
    userId,
}) => {
    const loginModal = useLoginModal();

    const [fee, setFee] = useState<number>(0);
    const [nights, setNights] = useState<number>(1);
    const [total, setTotal] = useState<number>(0);
    const [dateRange, setDateRange] = useState<Range>(initialDateRange);
    const [guests, setGuests] = useState<number>(1);
    const [showCalendar, setShowCalendar] = useState<boolean>(false);

    const guestsRange = Array.from(
        { length: property.guests },
        (_, i) => i + 1
    );

    // Рахуємо загальну суму при зміні дат
    useEffect(() => {
        if (dateRange.startDate && dateRange.endDate) {
            const days = differenceInDays(
                dateRange.endDate,
                dateRange.startDate
            );

            if (days && property.price_per_night) {
                const _fee = ((days * property.price_per_night) / 100) * 5; // 5% комісії
                setFee(_fee);
                setTotal(days * property.price_per_night + _fee);
                setNights(days);
            } else {
                const _fee = (property.price_per_night / 100) * 5;
                setFee(_fee);
                setTotal(property.price_per_night + _fee);
                setNights(1);
            }
        }
    }, [dateRange, property.price_per_night]);

    // Функція, що оновлює стан dateRange
    const _setDateRange = (ranges: any) => {
        const { selection } = ranges || {};
        if (!selection?.startDate || !selection?.endDate) {
            return;
        }

        const newStartDate = new Date(selection.startDate);
        const newEndDate = new Date(selection.endDate);

        // Якщо endDate менша за startDate, зміщуємо endDate на +1 день
        if (newEndDate < newStartDate) {
            newEndDate.setDate(newStartDate.getDate() + 1);
        }

        setDateRange({
            startDate: newStartDate,
            endDate: newEndDate,
            key: "selection",
        });
    };

    return (
        <aside className="p-6 mt-2 col-span-2 rounded-xl border border-gray-200 shadow-xl">
            <div className="border relative border-gray-400 rounded-xl cursor-pointer">
                <div
                    className="flex items-center border-b border-gray-400 px-3 cursor-pointer"
                    onClick={() => setShowCalendar(!showCalendar)}
                >
                    <div className="flex-1 w-1/2 border-r py-3 border-gray-400">
                        <h3 className="text-xs font-bold">CHECK-IN</h3>
                        <span className="text-sm">
                            {format(
                                dateRange.startDate || new Date(),
                                "MM/dd/yyyy"
                            )}
                        </span>
                    </div>

                    <div className="flex-1 text-right py-3">
                        <h3 className="text-xs font-bold">CHECK-OUT</h3>
                        <span className="text-sm">
                            {format(
                                dateRange.endDate || new Date(),
                                "MM/dd/yyyy"
                            )}
                        </span>
                    </div>
                </div>

                <div className="p-3">
                    <label className="block font-bold text-xs" htmlFor="guests">
                        GUESTS
                    </label>
                    <select
                        id="guests"
                        value={guests}
                        onChange={(e) => setGuests(parseInt(e.target.value))}
                        className="w-full text-sm mt-1 rounded-md"
                    >
                        {guestsRange.map((guest) => (
                            <option key={guest} value={guest}>
                                {guest} {guest === 1 ? "guest" : "guests"}
                            </option>
                        ))}
                    </select>
                </div>
                {showCalendar && (
                    <div className="absolute bg-white rounded-xl border p-3 border-gray-400 top-0 w-full">
                        <Calendar
                            value={dateRange}
                            onChange={(ranges) => {
                                _setDateRange(ranges);
                            }}
                        />
                        <button
                            onClick={() => setShowCalendar(!showCalendar)}
                            className="bg-black text-white px-2 text-md py-1 rounded-lg"
                        >
                            Close
                        </button>
                    </div>
                )}
            </div>

            <div className="w-full mb-6 py-3 text-center text-white bg-airbnb hover:bg-airbnb-dark rounded-xl mt-4">
                Reserve
            </div>

            <div className="mb-4 flex justify-center">
                <p>You won’t be charged yet</p>
            </div>
            <div className="mb-4 flex justify-between align-center items-center">
                <p>
                    ${property.price_per_night} x {nights}{" "}
                    {nights === 1 ? "night" : "nights"}
                </p>
                <p>${property.price_per_night * nights}</p>
            </div>
            <div className="mb-4 flex justify-between align-center items-center">
                <p>Cleaning fee</p>
                <p>${fee.toFixed(2)}</p>
            </div>
            <hr />
            <div className="mt-4 flex justify-between align-center items-center">
                <p className="font-semibold">Total before taxes</p>
                <p className="font-semibold">${total.toFixed(2)}</p>
            </div>
        </aside>
    );
};

export default ReservationSidevar;
