const ReservationSidevar = () => {
  return (
    <aside className="p-6 mt-2 col-span-2 rounded-xl border border-gray-200 shadow-xl">
      <h2 className="mb-4 text-lg">
        <strong>$200</strong> night{" "}
      </h2>
      <div className="mb-6 p-3 border border-gray-400 rounded-xl">
        <label className="block font-bold text-xs" htmlFor="">
          Guests
        </label>
        <select className="w-full -ml-1 text-xm">
          <option>1 guest</option>
          <option>2 guests</option>
          <option>3 guests</option>
          <option>4 guests</option>
          <option>5 guests</option>
          <option>6 guests</option>
        </select>
      </div>
      <div className="wfull mb-6 py-3 text-center text-white bg-airbnb hover:bg-airbnb-dark rounded-xl">
        Reserve
      </div>

      <div className="mb-4 flex justify-center">
        <p>You wont be charged yet</p>
      </div>
      <div className="mb-4 flex justify-between align-center items-center">
        <p>$200 * 4 nights</p>
        <p>$800</p>
      </div>
      <div className="mb-4 flex justify-between align-center items-center">
        <p>Cleaning fee</p>
        <p>$20</p>
      </div>
      <hr />
      <div className="mt-4 flex justify-between align-center items-center">
        <p className="font-semibold">Total before taxes</p>
        <p className="font-semibold">$810</p>
      </div>
    </aside>
  );
};

export default ReservationSidevar;
