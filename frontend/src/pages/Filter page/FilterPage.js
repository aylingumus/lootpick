import React from 'react';

import FooterBasic from 'components/FooterBasic';
import FilterContainer from 'pages/Filter Page/components/FilterContainer';
import GameCard from 'pages/Filter Page/components/GameCard';
import FilterHeader from 'pages/Filter Page/components/FilterHeader';
import SortingDropdown from 'pages/Filter Page/components/SortingDropdown';
import { games } from 'data/games';

function FilterPage() {

  
  return (
    <>
      <div
        className="flex min-h-screen items-center justify-center pt-28 pb-8
          bg-lp-darkisher text-white"
      >
        <div
          className="flex min-w-6xl max-w-7xl flex-col items-center
            justify-center gap-4"
        >
          {/* Popular Games Header */}

          <div className="flex flex-col items-center fade-in-1">
            <div className="text-4xl font-bold mb-4">Popular Games</div>
            <FilterHeader className="self-start" />
          </div>

          {/* <div
            className="flex w-full flex-row items-center justify-between pt-6
              border-t border-white/10 mt-6"
          ></div> */}

          <div className="text-4xl font-bold flex justify-start mt-6 fade-in-2">
            Browse
          </div>
          <div className="grid grid-cols-[auto_1fr] gap-6">
           

            <div></div>

            {/* Results Header */}
            <div className="flex flex-row items-center justify-between gap-4 fade-in-2">
              <div
                className="flex w-full flex-col rounded-3xl border
                  border-lp-normal bg-lp-darkish p-4 shadow-xl"
              >
                <div className="flex flex-row items-center justify-between">
                  <div className="flex flex-row items-center gap-2">
                    <p className="text-sm">Sort by:</p>
                    <SortingDropdown />
                  </div>

                  <div className="flex items-center gap-4">
                    <p className="text-sm">Selected: 0 of 3 games</p>
                    <button
                      className="rounded-md bg-lp-orange px-6 py-3 text-sm
                        text-white transition-all duration-150 transform
                        hover:bg-lp-orange-dark active:scale-95"
                    >
                      Recommend
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <FilterContainer />

            {/* Game Grid */}
            <div className="grid grid-cols-4 gap-4 fade-in-4">
              {games.map((game) => (
                <GameCard
                  key={game.title}
                  image={game.image}
                  title={game.title}
                  rating={game.rating}
                  releaseDate={game.releaseDate}
                  description={game.description}
                  price={game.price}
                  tags={game.tags}
                />
              ))}
            </div>
          </div>

          <div className="flex w-full justify-center">
            <button
              className="rounded-md bg-lp-orange px-6 py-3 text-sm text-white
                transition-all duration-150 transform hover:bg-lp-orange-dark
                active:scale-95"
            >
              Load More
            </button>
          </div>
        </div>
      </div>
      <FooterBasic />
    </>
  );
}

export default FilterPage;
