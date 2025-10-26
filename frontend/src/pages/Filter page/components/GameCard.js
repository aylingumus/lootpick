import React, { useState } from 'react';
import { Heart, HeartOff, Star } from 'lucide-react';

export default function GameCard({
  image,
  title,
  rating,
  releaseDate,
  description,
  price,
  tags,
}) {
  //
  const [isLiked, setIsLiked] = useState(false);

  const handleClick = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div
      className="relative group bg-lp-darkish rounded-3xl overflow-hidden
        shadow-xl border border-lp-normal transform transition-all duration-300
        hover:scale-[1.02] hover:border-lp-purple hover:ring-2
        hover:ring-lp-purple flex flex-col h-full"
    >
      {/* Game Image */}
      <div className="relative w-full h-48 overflow-hidden">
        <img
          src={image || '/placeholder.svg'}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover
            transition-transform duration-300 group-hover:scale-105"
        />
        {/* Badges */}

        {/* Overlay for buttons */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/60
            to-transparent opacity-0 group-hover:opacity-100 transition-opacity
            duration-300 flex flex-col justify-end p-4"
        >
          <div className="flex justify-end space-x-2">
            {/* <button
              className={`p-2 rounded-full backdrop-blur-sm transition-all duration-200`}
            >
              <GitCompare className="w-5 h-5" />
            </button> */}

            <button
              onClick={handleClick}
              className={`p-2 rounded-full backdrop-blur-sm transition-all
                duration-200 ${
                  isLiked
                    ? 'bg-red-500 text-white shadow-lg'
                    : `bg-white/40 text-white/70 hover:bg-white/60
                      hover:text-white`
                }`}
            >
              {isLiked ? (
                <Heart className="w-5 h-5 fill-current" />
              ) : (
                <HeartOff className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Game Info */}
      <div className="flex flex-col px-3 pt-2 pb-3 gap-1 flex-grow">
        <h3 className="text-lg text-white font-semibold"> {title}</h3>

        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-1 z-10 pb-1">
            {tags.map((tag) => (
              <span
                key={tag}
                className={` px-2 py-0.5 text-[0.60rem] font-semibold
                rounded-full border-white/20 bg-white/10 text-lp-light`}
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <div className="flex flex-col flex-grow">
          <p
            className="text-xs text-lp-lightest h-9 line-clamp-2
              overflow-hidden"
          >
            {description}
          </p>{' '}
          <p className="text-xs text-lp-lightish">{releaseDate}</p>
        </div>

        <div className="flex items-center justify-between pt-1">
          <div
            className="flex items-center space-x-1 bg-lp-orange rounded-full
              px-3 py-1 text-white shadow-md"
          >
            <Star className="w-4 h-4 fill-white" />
            <span className="text-md font-medium">{rating}%</span>
          </div>

          <div
            className="flex items-center space-x-1 bg-lp-purple rounded-full
              px-3 py-1 text-white shadow-md"
          >
            <span className="text-md font-semibold">{price}</span>
          </div>
        </div>
      </div>

      {/* View Details Button */}
      {/* <div className="p-4 pt-0 mt-auto">
               
                <button className="w-full px-4 py-2 bg-gradient-to-r from-lp-purple to-lp-pink rounded-lg font-semibold text-sm hover:from-lp-purple hover:to-lp-orange transition-all duration-300 transform hover:scale-[1.02] shadow-md">
                    View Details
                </button>
            </div> */}
    </div>
  );
}
