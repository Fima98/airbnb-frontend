"use client";
import useSearchModal from "@/hooks/useSearchModal";

const HouseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className="w-5 h-5 text-neutral-700"
  >
    <path
      fillRule="evenodd"
      d="M9.293 2.293a1 1 0 011.414 0l7 7A1 1 0 0117 10.707V17.5a1.5 1.5 0 01-1.5 1.5h-2.5a.5.5 0 01-.5-.5V14a1 1 0 00-1-1h-2a1 1 0 00-1 1v4.5a.5.5 0 01-.5.5H6a1.5 1.5 0 01-1.5-1.5V10.707a1 1 0 01.293-.707l7-7z"
      clipRule="evenodd"
    />
  </svg>
);

const MagnifyingGlassIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    style={{
      display: "block",
      fill: "none",
      height: "14px",
      width: "14px",
      stroke: "currentColor",
      strokeWidth: "5.333",
      overflow: "visible",
    }}
    aria-hidden="true"
    role="presentation"
    focusable="false"
  >
    <path
      fill="none"
      d="M13 24a11 11 0 1 0 0-22 11 11 0 0 0 0 22zm8-3 9 9"
    ></path>
  </svg>
);

const SearchFiltersCompact = () => {
  const searchModal = useSearchModal();
  const { country, checkIn, checkOut, guests } = searchModal.filters;

  return (
    <div
      className="
        flex
        w-[386px]
        items-center
        rounded-full
        border-[1px]
        border-neutral-200
        shadow-sm
        hover:shadow-md
        transition
        cursor-pointer
        h-[48px]
        bg-white
        mx-auto
      "
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
          searchModal.open("location");
        }}
        className="flex items-center pl-2 pr-3 sm:pl-3 h-full hover:bg-neutral-100 rounded-l-full"
      >
        <div className="p-2 mr-1 sm:mr-1.5">
          <HouseIcon />
        </div>
        <span className="text-sm font-medium text-neutral-800">
          {country ? country : "Anywhere"}
        </span>
      </div>

      <div className="h-6 w-px bg-neutral-300"></div>

      <div
        onClick={(e) => {
          e.stopPropagation();
          searchModal.open("checkin");
        }}
        className="flex items-center px-3 sm:px-4 h-full hover:bg-neutral-100"
      >
        <span className="text-sm font-medium text-neutral-800">
          {checkIn ? new Date(checkIn).toLocaleDateString() : "Anytime"}
        </span>
      </div>

      <div className="h-6 w-px bg-neutral-300"></div>

      <div
        onClick={(e) => {
          e.stopPropagation();
          searchModal.open("guests");
        }}
        className="flex items-center pl-3 sm:pl-4 pr-2 sm:pr-3 h-full hover:bg-neutral-100"
      >
        <span className="text-sm font-medium text-neutral-800">
          {guests ? `${guests} guests` : "Add guests"}
        </span>
      </div>

      <div className="flex items-center h-full pr-2 ml-auto">
        <button
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="p-2.5 bg-rose-500 text-white rounded-full hover:bg-rose-600 transition"
        >
          <MagnifyingGlassIcon />
        </button>
      </div>
    </div>
  );
};

export default SearchFiltersCompact;
