"use client";
import React, { useState } from "react";
import useSearchModal from "@/hooks/useSearchModal";
import Modal from "./Modal";
import SelectCountry, { SelectCountryValue } from "../forms/SelectCountry";
import CustomButton from "../forms/CustomButton";
import Calendar from "../forms/Calendar";
import { Range } from "react-date-range";

const initialDateRange = {
  startDate: new Date(),
  endDate: new Date(),
  key: "selection",
};

const SearchModal = () => {
  const searchModal = useSearchModal();

  const [country, setCountry] = useState<SelectCountryValue>();
  const [dateRange, setDateRange] = useState<Range>(initialDateRange);
  const [guests, setGuests] = useState(1);

  const _setDateRange = (selection: Range) => {
    if (searchModal.step === "checkin") {
      searchModal.open("checkout");
    }
    setDateRange(selection);
  };

  const handleNumberChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    setter: React.Dispatch<React.SetStateAction<number>>
  ) => {
    const value = Math.max(1, parseInt(event.target.value) || 1);
    setter(value);
  };

  const search = () => {
    const query = {
      country: country?.value || "",
      checkIn: dateRange.startDate ?? null,
      checkOut: dateRange.endDate ?? null,
      guests: parseInt(guests.toString()),
      category: "",
    };
    searchModal.close();
    searchModal.setQuery(query);
  };

  const contentLocation = (
    <>
      <h2 className="mb-6 text-xl">Where do you want to go?</h2>
      <SelectCountry
        value={country}
        onChange={(value) => setCountry(value as SelectCountryValue)}
      />
      <div className="mt-6 flex flex-row gap-4">
        <CustomButton
          label="Check in date"
          onClick={() => searchModal.open("checkin")}
          className="w-full"
        />
      </div>
    </>
  );

  const contentCheckin = (
    <>
      <h2 className="mb-6 text-xl">When do you want to check in?</h2>
      <Calendar
        value={dateRange}
        onChange={(value) => _setDateRange(value.selection)}
      />
      <div className="mt-6 w-full flex flex-row gap-4">
        <CustomButton
          label="Location"
          onClick={() => searchModal.open("location")}
          className="w-full !bg-white !text-black border border-black hover:!bg-gray-100"
        />
        <CustomButton
          label="Check out date"
          onClick={() => searchModal.open("checkout")}
          className="w-full"
        />
      </div>
    </>
  );

  const contentCheckout = (
    <>
      <h2 className="mb-6 text-xl">When do you want to check out?</h2>
      <Calendar
        value={dateRange}
        onChange={(value) => _setDateRange(value.selection)}
      />
      <div className="mt-6 w-full flex flex-row gap-4">
        <CustomButton
          label="Check in date"
          onClick={() => searchModal.open("checkin")}
          className="w-full !bg-white !text-black border border-black hover:!bg-gray-100"
        />
        <CustomButton
          label="Guests"
          onClick={() => searchModal.open("guests")}
          className="w-full"
        />
      </div>
    </>
  );

  const contentGuests = (
    <>
      <h2 className="mb-6 text-2xl">Who</h2>

      <div className="flex flex-col space-y-2">
        <label htmlFor="guests">Number of guests</label>
        <input
          id="guests"
          type="number"
          className="border border-gray-400 p-4 rounded-xl"
          value={guests}
          onChange={(e) => handleNumberChange(e, setGuests)}
        />
      </div>
      <div className="mt-6 flex flex-row gap-4">
        <CustomButton
          label="Previous"
          onClick={() => searchModal.open("checkout")}
          className="w-full !bg-white !text-black border border-black hover:!bg-gray-100"
        />
        <CustomButton className="w-full" label="Search" onClick={search} />
      </div>
    </>
  );

  let content;
  switch (searchModal.step) {
    case "location":
      content = contentLocation;
      break;
    case "checkin":
      content = contentCheckin;
      break;
    case "checkout":
      content = contentCheckout;
      break;
    case "guests":
      content = contentGuests;
      break;
    default:
      content = contentLocation;
  }

  return (
    <Modal
      isOpen={searchModal.isOpen}
      close={searchModal.close}
      label="Search"
      content={content}
    />
  );
};

export default SearchModal;

// "use client";
// import React, { useState, useEffect, useCallback, useMemo } from "react";
// import useSearchModal from "@/hooks/useSearchModal";
// import Modal from "./Modal";
// import SelectCountry, { SelectCountryValue } from "../forms/SelectCountry";
// import CustomButton from "../forms/CustomButton";
// import Calendar from "../forms/Calendar";
// import { Range } from "react-date-range";

// const initialDateRange = {
//   startDate: new Date(),
//   endDate: new Date(),
//   key: "selection",
// };

// const SearchModal = () => {
//   const searchModal = useSearchModal();

//   const initialCountry: SelectCountryValue | undefined = searchModal.draftQuery
//     .country
//     ? {
//         label: searchModal.draftQuery.country,
//         value: searchModal.draftQuery.country,
//       }
//     : undefined;

//   const [country, setCountry] = useState<SelectCountryValue | undefined>(
//     initialCountry
//   );
//   const [dateRange, setDateRange] = useState<Range>({
//     startDate: searchModal.draftQuery.checkIn || initialDateRange.startDate,
//     endDate: searchModal.draftQuery.checkOut || initialDateRange.endDate,
//     key: "selection",
//   });
//   const [guests, setGuests] = useState(searchModal.draftQuery.guests);

//   // Initialize local state when the modal is opened or draftQuery changes
//   useEffect(() => {
//     if (searchModal.isOpen) {
//       setCountry(
//         searchModal.draftQuery.country
//           ? {
//               label: searchModal.draftQuery.country,
//               value: searchModal.draftQuery.country,
//             }
//           : undefined
//       );
//       setDateRange({
//         startDate: searchModal.draftQuery.checkIn || initialDateRange.startDate,
//         endDate: searchModal.draftQuery.checkOut || initialDateRange.endDate,
//         key: "selection",
//       });
//       setGuests(searchModal.draftQuery.guests);
//     }
//   }, [searchModal.isOpen, searchModal.draftQuery]);

//   // Update draftQuery when local state changes
//   useEffect(() => {
//     searchModal.setDraftQuery({
//       country: country?.value || "",
//       checkIn: dateRange.startDate ?? null,
//       checkOut: dateRange.endDate ?? null,
//       guests: guests,
//       category: "",
//     });
//   }, [country, dateRange, guests, searchModal.setDraftQuery]);

//   const _setDateRange = useCallback(
//     (selection: Range) => {
//       if (searchModal.step === "checkin") {
//         searchModal.open("checkout");
//       }
//       setDateRange(selection);
//     },
//     [searchModal.step, searchModal.open, setDateRange]
//   );

//   const handleNumberChange = useCallback(
//     (
//       event: React.ChangeEvent<HTMLInputElement>,
//       setter: React.Dispatch<React.SetStateAction<number>>
//     ) => {
//       const value = Math.max(1, parseInt(event.target.value) || 1);
//       setter(value);
//     },
//     []
//   );

//   const handleCountryChange = useCallback(
//     (value: SelectCountryValue | null) => {
//       setCountry(value || undefined);
//     },
//     [setCountry]
//   );

//   const handleGuestsChange = useCallback(
//     (event: React.ChangeEvent<HTMLInputElement>) => {
//       handleNumberChange(event, setGuests);
//     },
//     [handleNumberChange, setGuests]
//   );

//   const handleSearch = useCallback(() => {
//     searchModal.applyFilters();
//   }, [searchModal.applyFilters]);

//   const memoizedDateRange = useMemo(
//     () => ({
//       startDate: dateRange.startDate,
//       endDate: dateRange.endDate,
//       key: dateRange.key,
//     }),
//     [dateRange.startDate, dateRange.endDate, dateRange.key]
//   );

//   const contentLocation = useMemo(
//     () => (
//       <>
//         <h2 className="mb-6 text-xl">Where do you want to go?</h2>
//         <SelectCountry value={country} onChange={handleCountryChange} />
//         <div className="mt-6 flex flex-row gap-4">
//           <CustomButton
//             label="Check in date"
//             onClick={() => searchModal.open("checkin")}
//             className="w-full"
//           />
//         </div>
//       </>
//     ),
//     [country, handleCountryChange, searchModal.open]
//   );

//   const contentCheckin = useMemo(
//     () => (
//       <>
//         <h2 className="mb-6 text-xl">When do you want to check in?</h2>
//         <Calendar
//           value={memoizedDateRange}
//           onChange={(value) => _setDateRange(value.selection)}
//         />
//         <div className="mt-6 w-full flex flex-row gap-4">
//           <CustomButton
//             label="Location"
//             onClick={() => searchModal.open("location")}
//             className="w-full !bg-white !text-black border border-black hover:!bg-gray-100"
//           />
//           <CustomButton
//             label="Check out date"
//             onClick={() => searchModal.open("checkout")}
//             className="w-full"
//           />
//         </div>
//       </>
//     ),
//     [memoizedDateRange, _setDateRange, searchModal.open]
//   );

//   const contentCheckout = useMemo(
//     () => (
//       <>
//         <h2 className="mb-6 text-xl">When do you want to check out?</h2>
//         <Calendar
//           value={memoizedDateRange}
//           onChange={(value) => _setDateRange(value.selection)}
//         />
//         <div className="mt-6 w-full flex flex-row gap-4">
//           <CustomButton
//             label="Check in date"
//             onClick={() => searchModal.open("checkin")}
//             className="w-full !bg-white !text-black border border-black hover:!bg-gray-100"
//           />
//           <CustomButton
//             label="Guests"
//             onClick={() => searchModal.open("guests")}
//             className="w-full"
//           />
//         </div>
//       </>
//     ),
//     [memoizedDateRange, _setDateRange, searchModal.open]
//   );

//   const contentGuests = useMemo(
//     () => (
//       <>
//         <h2 className="mb-6 text-2xl">Who</h2>

//         <div className="flex flex-col space-y-2">
//           <label htmlFor="guests">Number of guests</label>
//           <input
//             id="guests"
//             type="number"
//             className="border border-gray-400 p-4 rounded-xl"
//             value={guests}
//             onChange={handleGuestsChange}
//           />
//         </div>
//         <div className="mt-6 flex flex-row gap-4">
//           <CustomButton
//             label="Previous"
//             onClick={() => searchModal.open("checkout")}
//             className="w-full !bg-white !text-black border border-black hover:!bg-gray-100"
//           />
//           <CustomButton
//             className="w-full"
//             label="Search"
//             onClick={handleSearch}
//           />
//         </div>
//       </>
//     ),
//     [guests, handleGuestsChange, searchModal.open, handleSearch]
//   );

//   let content;
//   switch (searchModal.step) {
//     case "location":
//       content = contentLocation;
//       break;
//     case "checkin":
//       content = contentCheckin;
//       break;
//     case "checkout":
//       content = contentCheckout;
//       break;
//     case "guests":
//       content = contentGuests;
//       break;
//     default:
//       content = contentLocation;
//   }

//   return (
//     <Modal
//       isOpen={searchModal.isOpen}
//       close={searchModal.close}
//       label="Search"
//       content={content}
//     />
//   );
// };

// export default SearchModal;
