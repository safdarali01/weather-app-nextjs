import React from "react";

const Navbar = ({ location, onLocationChange }) => {
  return (
    <nav className="flex items-center justify-center py-4 w-full m-0 opacity-90">
      <div className="relative">
        <input
          className="block bg-slate-800 text-white rounded-lg opacity-70 px-2 p-2 w-[300px] text-center"
          type="text"
          id="location"
          placeholder="Enter City Name: (ie. Karachi)"
          value={location}
          onChange={onLocationChange}
        />
      </div>
    </nav>
  );
};

export default Navbar;

