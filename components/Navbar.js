import React from "react";

// Navbar functional component
// This component renders a navigation bar with a search input for location
const Navbar = ({ location, onLocationChange }) => {
  return (
    // Navigation bar layout with flex container
    <nav className="flex items-center justify-center py-4 w-full m-0 opacity-90">
      <div className="relative">
        {/* Search input for location */}
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

// Export Navbar component as the default export
export default Navbar;