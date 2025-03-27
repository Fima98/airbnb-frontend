"use client";

import React, { useState, useRef, useEffect } from "react";
import useCountries from "@/hooks/useCountries";

export type SelectCountryValue = {
  label: string;
  value: string;
};

interface SelectCountryProps {
  value?: SelectCountryValue;
  onChange: (value: SelectCountryValue) => void;
}

const SelectCountry: React.FC<SelectCountryProps> = ({ value, onChange }) => {
  const { getAll } = useCountries();
  const countries = getAll();

  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const containerRef = useRef<HTMLDivElement>(null);

  const handleSelect = (country: SelectCountryValue) => {
    onChange(country);
    setSearchTerm("");
    setIsOpen(false);
  };

  const filteredCountries = countries.filter((country) =>
    country.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Закриваємо меню при кліку поза компонентом
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative w-full" ref={containerRef}>
      <div
        className="flex items-center justify-between rounded-xl h-12 border border-gray-300 px-3 text-sm cursor-pointer focus:outline-none focus:ring-2 focus:ring-airbnb"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <input
          type="text"
          className="w-full bg-transparent focus:outline-none"
          placeholder="Select Country"
          value={isOpen ? searchTerm : value?.label || ""}
          onChange={(e) => setSearchTerm(e.target.value)}
          onClick={(e) => {
            e.stopPropagation();
            setIsOpen(true);
          }}
        />
        <svg
          className="w-4 h-4 text-gray-600"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
      {isOpen && (
        <div className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-xl border border-gray-300 bg-white shadow-lg">
          {filteredCountries.length > 0 ? (
            filteredCountries.map((country) => (
              <div
                key={country.value}
                className="cursor-pointer px-4 py-2 hover:bg-gray-100"
                onClick={() => handleSelect(country)}
              >
                {country.label}
              </div>
            ))
          ) : (
            <div className="px-4 py-2 text-gray-500">No countries found</div>
          )}
        </div>
      )}
    </div>
  );
};

export default SelectCountry;
