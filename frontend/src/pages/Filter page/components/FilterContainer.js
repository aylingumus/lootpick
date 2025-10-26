import React, { useState } from 'react';
import { GoChevronDown, GoChevronUp } from 'react-icons/go';

import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

export default function FilterContainer() {
  const [searchTag, setSearchTag] = useState('');

  const [selectedGenres, setSelectedGenres] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 90]);
  const [ratingRange, setRatingRange] = useState([0, 100]);
  const [yearRange, setYearRange] = useState([1990, 2025]);
  const [selectedPlatforms, setSelectedPlatforms] = useState([]);

  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [open5, setOpen5] = useState(false);

  const genres = [
    'Action',
    'RPG',
    'Adventure',
    'Strategy',
    'Simulation',
    'Sports',
    'Racing',
    'Indie',
    'Horror',
    'Puzzle',
  ];

  const platforms = ['Windows', 'macOS', 'Linux'];

  // Handle multiselect
  const handleGenreChange = (genre) => {
    setSelectedGenres((prev) =>
      prev.includes(genre) ? prev.filter((g) => g !== genre) : [...prev, genre]
    );
  };

  const handlePlatformChange = (platform) => {
    setSelectedPlatforms((prev) =>
      prev.includes(platform)
        ? prev.filter((p) => p !== platform)
        : [...prev, platform]
    );
  };

  // Handle range changes
  const handlePriceChange = (e) => {
    const value = parseInt(e.target.value);
    setPriceRange([0, value]);
  };

  const handleRatingChange = (e) => {
    const value = parseInt(e.target.value);
    setRatingRange([0, value]);
  };

  const handleYearChange = (e) => {
    const value = parseInt(e.target.value);
    setYearRange([0, value]);
  };

  // Clear all filters
  const clearFilters = () => {
    setSearchTag('');
    setSelectedGenres([]);
    setPriceRange([0, 90]);
    setRatingRange([0, 100]);
    setYearRange([1990, 2025]);
    setSelectedPlatforms([]);
  };

  // Get current filter state
  const getCurrentFilters = () => {
    return {
      searchTag,
      selectedGenres,
      priceRange,
      ratingRange,
      yearRange,
      selectedPlatforms,
    };
  };

  // Debug function to log current filters
  const logCurrentFilters = () => {
    console.log('Current Filters:', getCurrentFilters());
  };

  return (
    <div
      className="fade-in-3 w-60 p-6 bg-lp-darkish rounded-3xl shadow-lg border
        border-lp-normal space-y-3 self-start"
    >
      <h2 className="text-lg font-bold mb-3">Filters</h2>

      {/* Search box */}
      <div className="mb-3">
        <input
          type="text"
          placeholder="Search tag"
          value={searchTag}
          onChange={(e) => setSearchTag(e.target.value)}
          className="w-full px-3 py-1 mb-2 text-white text-sm bg-white/10 border
            border-white/20 rounded-md placeholder-white/70 focus:outline-none
            focus:border-white/40"
        />
      </div>

      {/* Section 1 - Genres*/}
      <div className="w-full max-w-md mx-auto border-b border-lp-normal pb-3">
        <button
          onClick={() => setOpen1(!open1)}
          className="w-full flex justify-between text-md items-center font-bold
            text-lp-lightest"
        >
          Genres
          <span>{open1 ? <GoChevronUp /> : <GoChevronDown />}</span>
        </button>
        {open1 && (
          <div className="py-3 pl-4 flex flex-col gap-1">
            {genres.map((item, i) => (
              <label
                key={i}
                className="flex flex-row align-center items-center text-sm
                  text-lp-light"
              >
                <input
                  type="checkbox"
                  className="mr-2"
                  checked={selectedGenres.includes(item)}
                  onChange={() => handleGenreChange(item)}
                />
                {item}
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Section 2 */}
      <div className="w-full max-w-md mx-auto border-b border-lp-normal pb-3">
        <button
          onClick={() => setOpen2(!open2)}
          className="w-full flex justify-between text-md items-center font-bold
            text-lp-lightest"
        >
          Price
          <span>{open2 ? <GoChevronUp /> : <GoChevronDown />}</span>
        </button>

        {open2 && (
          <div className="py-3 flex flex-col gap-2">
            <Slider
              range
              allowCross={false} // Prevents crossing
              pushable={1} // Forces min distance of 1 unit between handles
              min={0}
              max={90}
              step={1}
              value={priceRange}
              onChange={setPriceRange}
              trackStyle={[{ backgroundColor: '#5A5AC1' }]}
              handleStyle={[
                {
                  borderColor: '#5A5AC1',
                  backgroundColor: '#fff',
                },
                {
                  borderColor: '#5A5AC1',
                  backgroundColor: '#fff',
                },
              ]}
            />
            <div className="flex justify-between text-sm text-lp-light mt-1">
              <span>{priceRange[0]}€</span>
              <span>{priceRange[1]}€</span>
            </div>
          </div>
        )}
      </div>

      {/* Section 3 */}
      <div className="w-full max-w-md mx-auto border-b border-lp-normal pb-3">
        <button
          onClick={() => setOpen3(!open3)}
          className="w-full flex justify-between text-md items-center font-bold
            text-lp-lightest"
        >
          Rating
          <span>{open3 ? <GoChevronUp /> : <GoChevronDown />}</span>
        </button>

        {open3 && (
          <div className="py-3 flex flex-col gap-2">
            <Slider
              range
              allowCross={false} // Prevents crossing
              pushable={1} // Forces min distance of 1 unit between handles
              min={0}
              max={100}
              step={1}
              value={ratingRange}
              onChange={setRatingRange}
              trackStyle={[{ backgroundColor: '#5A5AC1' }]}
              handleStyle={[
                {
                  borderColor: '#5A5AC1',
                  backgroundColor: '#fff',
                },
                {
                  borderColor: '#5A5AC1',
                  backgroundColor: '#fff',
                },
              ]}
            />
            <div className="flex justify-between text-xs text-lp-light mt-1">
              <span>{ratingRange[0]}%</span>
              <span>{ratingRange[1]}%</span>
            </div>
          </div>
        )}
      </div>

      {/* Section 4 */}
      <div className="w-full max-w-md mx-auto border-b border-lp-normal pb-3">
        <button
          onClick={() => setOpen4(!open4)}
          className="w-full flex justify-between text-md items-center font-bold
            text-lp-lightest"
        >
          Year
          <span>{open4 ? <GoChevronUp /> : <GoChevronDown />}</span>
        </button>

        {open4 && (
          <div className="py-3 flex flex-col gap-2">
            <Slider
              range
              allowCross={false} // Prevents crossing
              pushable={1} // Forces min distance of 1 unit between handles
              min={1990}
              max={2025}
              step={1}
              value={yearRange}
              onChange={setYearRange}
              trackStyle={[{ backgroundColor: '#5A5AC1' }]}
              handleStyle={[
                {
                  borderColor: '#5A5AC1',
                  backgroundColor: '#fff',
                },
                {
                  borderColor: '#5A5AC1',
                  backgroundColor: '#fff',
                },
              ]}
            />
            <div className="flex justify-between text-xs text-lp-light mt-1">
              <span>{yearRange[0]}</span>
              <span>{yearRange[1]}</span>
            </div>
          </div>
        )}
      </div>

      {/* Section 5 - Platform */}
      <div className="w-full max-w-md mx-auto pb-3">
        <button
          onClick={() => setOpen5(!open5)}
          className="w-full flex justify-between text-md items-center font-bold
            text-lp-lightest"
        >
          Platform
          <span>{open5 ? <GoChevronUp /> : <GoChevronDown />}</span>
        </button>
        {open5 && (
          <div className="py-3 pl-4 flex flex-col gap-1">
            {platforms.map((item, i) => (
              <label key={i} className="block text-sm text-lp-light">
                <input
                  type="checkbox"
                  className="mr-2"
                  checked={selectedPlatforms.includes(item)}
                  onChange={() => handlePlatformChange(item)}
                />
                {item}
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Clear button */}
      <div className="mt-4">
        <button
          onClick={clearFilters}
          className="w-full py-2 px-4 bg-lp-orange hover:bg-lp-orange-dark
            text-white text-sm rounded-md transition-all transform duration-150
            active:scale-95"
        >
          Clear Filters
        </button>
      </div>
    </div>
  );
}
