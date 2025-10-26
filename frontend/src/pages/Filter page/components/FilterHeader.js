import React, { useState } from 'react';
import {
  Heart,
  Star,
  ChevronLeft,
  ChevronRight,
  Users,
  Clock,
} from 'lucide-react';
import { trendingGames } from 'data/trendingGames';

export default function FilterHeader() {

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % trendingGames.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + trendingGames.length) % trendingGames.length
    );
  };

  const currentGame = trendingGames[currentSlide];

  return (
    <div>
      <div
        className="flex w-[1280px] h-[480px] bg-lp-darkish border
          border-lp-normal flex-row rounded-3xl shadow-2xl overflow-hidden"
      >
        {/* Game Image */}
        <div className="relative">
          <img
            src={currentGame.image}
            alt={currentGame.title}
            className="max-w-4xl h-full object-cover"
          />
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/30
              hover:bg-white/70 text-white rounded-full p-2"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/30
              hover:bg-white/60 text-white rounded-full p-2"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>

        {/* Game Info */}
        <div className="p-8 flex flex-col justify-between">
          <div className="flex justify-end">
            <button
              onClick={() => setIsLiked(!isLiked)}
              className={`border border-slate-600 p-2 rounded hover:bg-slate-800
                ${isLiked ? 'text-red-500' : 'text-slate-300'}`}
            >
              <Heart className="h-5 w-5" />
            </button>
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-1">
              <div className="flex items-center">
                <span
                  className="bg-lp-purple/30 text-lp-light text-xs px-3 py-1
                    rounded-full uppercase tracking-wide"
                >
                  {currentGame.status}
                </span>
              </div>

              <h1 className="text-4xl font-bold text-white leading-tight mb-4">
                {currentGame.title}
              </h1>
            </div>

            {/* Genre Badges */}
            <div className="flex flex-wrap gap-2">
              {currentGame.genre.map((g) => (
                <span
                  key={g}
                  className="border border-white/20 bg-white/10 text-lp-light
                    px-3 py-1 rounded-full text-xs font-medium"
                >
                  {g}
                </span>
              ))}
            </div>

            <span className="text-md text-white leading-relaxed">
              {currentGame.description}
            </span>

            {/* Meta Info */}
            <div className="flex flex-wrap gap-4 text-sm text-lp-lightish mb-6">
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>{currentGame.releaseDate}</span>
              </div>
              <div className="flex items-center gap-1">
                <Users className="w-4 h-4" />
                <span>{currentGame.playersOnline} online</span>
              </div>
            </div>

            {/* Price & Actions */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div
                  className="flex items-center space-x-1 bg-lp-orange
                    rounded-full px-4 py-2 text-white font-semibold shadow-md"
                >
                  <Star className="w-4 h-4 fill-white" />
                  <span className="text-lg font-medium">
                    {currentGame.rating}%
                  </span>
                </div>
              </div>

              <button
                disabled={currentGame.status === 'Coming soon'}
                className={`px-5 py-2 rounded-3xl font-semibold text-lg
                  transition ${
                    currentGame.status === 'Now on sale'
                      ? 'bg-lp-purple hover:bg-lp-purple/80'
                      : 'bg-gray-500 cursor-not-allowed'
                  } text-white`}
              >
                {currentGame.status === 'Now on sale'
                  ? `Buy Now – €${currentGame.price}`
                  : 'Coming Soon'}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Carousel Indicators */}
      <div className="flex justify-center space-x-2 mt-4">
        {trendingGames.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-lp-orange w-8'
                : 'bg-slate-600 hover:bg-slate-500'
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
}
