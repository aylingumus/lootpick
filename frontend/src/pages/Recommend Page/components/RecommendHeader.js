import React, { useState } from 'react';
import { X } from 'lucide-react';
import { BiGame, BiGhost } from 'react-icons/bi';
import { mockRecommendationResults } from 'data/mockRecommendationResults';

export default function RecommendHeader() {
  const [selectedGames, setSelectedGames] = useState([
    {
      id: 1,
      title: 'The Legend of Zelda: Breath of the Wild',
      image:
        'https://prodigits.co.uk/thumbs/wallpapers/p2ls/drawings/49/8981a8dd12496376.jpg',
    },
  ]);

  const [recommendations, setRecommendations] = useState([]);

  const handleRemove = (id) => {
    setSelectedGames((prev) => prev.filter((g) => g.id !== id));
  };

  const handleAddGame = () => {
    alert('Open game selection modal (to be implemented)');
  };

  const handleGetRecommendations = () => {
    // Mock analysis logic — replace with real API or algorithm later
    setRecommendations(mockRecommendationResults);
  };

  return (
    <div
      className="w-full max-w-6xl mx-auto flex flex-row justify-center
        items-center gap-12 fade-in-1"
    >
      {/* Header Text */}
      <div className="flex flex-col items-center max-w-md gap-4">
        <h1 className="text-5xl font-bold text-white tracking-tight text-center">
          Select up to three games
        </h1>
        <p className="text-lp-light text-lg text-center max-w-sm">
          Get personalized game recommendations based on your picks.
        </p>
      </div>

      {/* Game Container */}
      <div
        className="inline-flex flex-col bg-lp-darkish border border-lp-normal
          rounded-3xl shadow-2xl overflow-hidden p-6 gap-6"
      >
        {/* Selected Games + Empty Slots */}
        <div className="flex flex-row gap-6 items-start justify-center">
          {/* Selected Games */}
          {selectedGames.map((game) => (
            <div
              key={game.id}
              className="group relative w-64 h-72 rounded-2xl overflow-hidden
                border border-lp-normal bg-lp-dark/60 backdrop-blur-sm transform
                transition-all duration-300 hover:border-lp-purple hover:ring-2
                hover:ring-lp-purple/50 hover:shadow-lg
                hover:shadow-lp-purple/10 hover:-translate-y-1"
            >
              {/* Game Image */}
              <div className="w-full h-full overflow-hidden">
                <img
                  src={game.image}
                  alt={game.title}
                  className="w-full h-full object-cover transition-transform
                    duration-500 group-hover:scale-105"
                />
              </div>

              {/* Gradient Overlay (faint by default, stronger on hover) */}
              <div
                className="absolute inset-0 bg-gradient-to-t from-black/80
                  via-black/30 to-transparent opacity-60 group-hover:opacity-100
                  pointer-events-none transition-all duration-500
                  group-hover:scale-105"
              />

              {/* Game Title */}
              <div
                className="absolute bottom-0 left-0 right-0 p-4 text-center
                  translate-y-2 group-hover:translate-y-0 transition-transform
                  duration-300"
              >
                <h3
                  className="text-md font-semibold text-white leading-snug
                    line-clamp-2"
                >
                  {game.title}
                </h3>
              </div>

              {/* Remove Button */}
              <button
                onClick={() => handleRemove(game.id)}
                className="absolute top-3 right-3 bg-black/60 backdrop-blur-md
                  p-2 rounded-full text-white opacity-0 group-hover:opacity-100
                  hover:bg-black/80 hover:scale-110 transition-all duration-200"
                aria-label="Remove game"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          ))}

          {/* Empty Slots */}
          {selectedGames.length < 3 &&
            Array.from({ length: 3 - selectedGames.length }).map((_, i) => (
              <button
                key={i}
                onClick={handleAddGame}
                className="flex flex-col items-center justify-center w-64 h-72
                  border-2 border-dashed border-lp-normal rounded-2xl
                  text-lp-lightish bg-lp-dark/40 backdrop-blur-sm
                  hover:border-lp-purple hover:text-white hover:shadow-lg
                  hover:shadow-lp-purple/10 transition transform
                  hover:scale-[1.03]"
              >
                {i === 0 ? (
                  <BiGame size={56} className="opacity-50" />
                ) : (
                  <BiGhost size={56} className="opacity-50" />
                )}
                <span className="text-sm font-medium mt-3">Add Game</span>
              </button>
            ))}
        </div>

        {/* Get Recommendations Button */}
        <div className="flex justify-center">
          <button
            onClick={handleGetRecommendations}
            disabled={selectedGames.length === 0}
            className={`px-6 py-3 rounded-xl font-semibold text-white transition
              ${
                selectedGames.length === 0
                  ? 'bg-gray-600 cursor-not-allowed'
                  : 'bg-lp-purple hover:bg-lp-purple/80 hover:scale-[1.03]'
              }`}
          >
            Get Recommendations
          </button>
        </div>
      </div>
    </div>
  );
}
