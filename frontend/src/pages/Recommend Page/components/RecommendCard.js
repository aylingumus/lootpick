import React, { useState } from 'react';
import { Star, Heart, HeartOff } from 'lucide-react';

export default function RecommendCard({
  tag,
  image,
  title,
  subtitle,
  rating,
  releaseDate,
  description,
  price,
  genres,
  big,
}) {
  const [liked, setLiked] = useState(false);

  return (
    <div
      className={` group flex bg-lp-darkish rounded-3xl overflow-hidden
        shadow-xl border border-lp-normal transform transition-all duration-300
        hover:ring-2 hover:border-lp-purple hover:ring-lp-purple flex-row
        hover:scale-[1.02] ${big ? 'h-43' : 'h-32'} `}
    >
      {/* Thumbnail */}
      <div className={`relative ${big ? 'w-64 ' : 'w-48 '} overflow-hidden `}>
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform
            duration-300 group-hover:scale-105"
        />
        {tag && (
          <span
            className="absolute top-3 left-3 bg-lp-purple-dark bg-opacity-60
              backdrop-blur-sm text-white text-sm px-3 py-1 rounded-full"
          >
            {tag}
          </span>
        )}

        <div
          className="absolute inset-0 bg-gradient-to-t from-black/60
            to-transparent opacity-0 group-hover:opacity-100 transition-opacity
            duration-300 flex flex-col justify-end p-4"
        >
          {' '}
          <button
            onClick={() => setLiked(!liked)}
            className={` absolute bottom-3 right-3 p-2 rounded-full transition
              ${
                liked
                  ? 'bg-red-500 text-white'
                  : 'bg-white/40 text-white/70 hover:bg-white/60'
              }`}
          >
            {liked ? (
              <Heart className="w-5 h-5 fill-current" />
            ) : (
              <HeartOff className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Middle Info */}
      <div className="flex flex-col flex-grow py-3 px-4 gap-1">
        <h3
          className={` ${big ? 'text-2xl pb-1' : 'text-lg'} font-semibold
            text-white`}
        >
          {title}
        </h3>

        {/* Genre tags */}
        {genres && (
          <div className="flex flex-wrap gap-1 z-10 pb-1">
            {genres.map((genre) => (
              <span
                key={genre}
                className={` ${big ? 'text-xs' : 'text-[0.60rem] '} px-2 py-0.5
                font-semibold rounded-full border-white/20 bg-white/10
                text-lp-light `}
              >
                {genre}
              </span>
            ))}
          </div>
        )}

        {/* {subtitle && <p className="text-sm text-purple-300">{subtitle}</p>} */}
        <p
          className={`${big ? 'text-md max-w-lg' : 'text-sm max-w-lg'}
            text-lp-lightest line-clamp-2 overflow-hidden`}
        >
          {description}
        </p>

        <p className={`${big ? 'text-sm' : 'text-xs'} text-lp-lightish`}>
          {releaseDate}
        </p>
      </div>

      {/* Right Side */}
      <div className="flex flex-col items-end justify-between p-4 w-32">
        <div
          className="flex items-center space-x-1 bg-lp-orange rounded-full px-3
            py-1 text-white shadow-md"
        >
          <Star className="w-4 h-4 fill-white" />
          <span className="text-sm">{rating}</span>
        </div>
        <div
          className="flex items-center space-x-1 bg-lp-purple rounded-full px-3
            py-1 text-white shadow-md"
        >
          {' '}
          <span className="text-white text-sm font-semibold">{price}</span>
        </div>
      </div>
    </div>
  );
}
