import React, { useState } from "react";

export default function SortingDropdown() {
    const [value, setValue] = useState("popular");

    const handleChange = (event) => {
        setValue(event.target.value);
    };
    
 return (
  <select
    value={value}
    onChange={handleChange}
    className="
      w-56 px-3 py-2
      text-sm text-white
      bg-white/10 border border-white/20 rounded-md
      focus:outline-none focus:border-white/40
      cursor-pointer
    "
  >
    <option value="name-asc" className="bg-lp-dark text-lp-light">Name (A–Z)</option>
    <option value="name-desc" className="bg-lp-dark text-lp-light">Name (Z–A)</option>
    <option value="price-asc" className="bg-lp-dark text-lp-light">Price (Low to High)</option>
    <option value="price-desc" className="bg-lp-dark text-lp-light">Price (High to Low)</option>
    <option value="release-desc" className="bg-lp-dark text-lp-light">Release Date (Newest)</option>
    <option value="release-asc" className="bg-lp-dark text-lp-light">Release Date (Oldest)</option>
    <option value="rating-desc" className="bg-lp-dark text-lp-light">Rating (High to Low)</option>
    <option value="popular" className="bg-lp-dark text-lp-light">Most Popular</option>
    <option value="discount" className="bg-lp-dark text-lp-light">Biggest Discount</option>
  </select>
);


}
