import React, { useContext, useState } from 'react';
import { Gamepad2, Search } from 'lucide-react';
import { MyContext } from 'context/CurrentPageContext';

function NavBar() {
  const { page, setPage } = useContext(MyContext);
  const { activeButton, setActiveButton } = useContext(MyContext);
  const [searchTag, setSearchTag] = useState('');

  const handleButtonClick = (pageName, disabled = false) => {
    if (!disabled) {
      setPage(pageName);
      setActiveButton(pageName);
    }
  };

  return (
    <nav
      className="fixed top-0 w-full bg-gradient-to-r from-lp-dark via-lp-dark
        to-lp-dark backdrop-blur-md text-white shadow-lg z-50 border-b
        border-white/10"
    >
      <div className="max-w-7xl mx-auto px-8 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Gamepad2 className="h-12 w-12 text-lp-light pt-1" />
            <h1
              className="text-4xl font-bold bg-gradient-to-r from-lp-light
                to-lp-purple-light bg-clip-text text-transparent"
            >
              LootPick
            </h1>
          </div>

          {/* Desktop Navigation & Search */}
          <div
            className="hidden md:flex items-center space-x-6 flex-grow
              justify-end"
          >
            {/* Search Bar */}
            <div className="relative flex-grow max-w-sm">
              <input
                type="text"
                placeholder="Search games..."
                value={searchTag}
                onChange={(e) => setSearchTag(e.target.value)}
                className="w-full pl-10 pr-4 py-2 text-white text-sm bg-white/10
                  border border-white/20 rounded-lg placeholder-white/70
                  focus:outline-none focus:border-lp-purple focus:ring-1
                  focus:ring-lp-purple transition-all duration-200"
              />
              <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2
                  h-5 w-5 text-white/70"
              />
            </div>

            {/* Navigation Buttons */}
            <div className="flex gap-2">
              {/* Active buttons */}
              <button
                onClick={() => handleButtonClick('filter')}
                className={`px-4 py-2 rounded-lg font-semibold text-md
                  transition-all duration-300 ${
                    activeButton === 'filter'
                      ? 'bg-white/10 text-white shadow-lg transform'
                      : 'text-white/80 hover:text-white hover:scale-105'
                  }`}
              >
                Filter
              </button>

              <button
                onClick={() => handleButtonClick('recommend')}
                className={`px-4 py-2 rounded-lg font-semibold text-md
                  transition-all duration-300 ${
                    activeButton === 'recommend'
                      ? 'bg-white/10 text-white shadow-lg transform'
                      : 'text-white/80 hover:text-white hover:scale-105'
                  }`}
              >
                Recommend
              </button>

              {/* Gray out last two buttons */}
              <button
                disabled
                className="px-4 py-2 rounded-lg font-semibold text-md
                  text-gray-300"
              >
                Compare
              </button>

              <button
                disabled
                className="px-4 py-2 rounded-lg font-semibold text-md
                  text-gray-300"
              >
                Wishlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
