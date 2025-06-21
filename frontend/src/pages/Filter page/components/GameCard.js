import React, { useState } from "react";

import "pages/Filter Page/styles/game-card.css";

import Typography from "@mui/material/Typography";
import { Box, Button } from "@mui/material";
import IconButton from "@mui/material/IconButton";

import { IoGitCompare } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

export default function GameCard({
    image,
    title,
    rating,
    releaseDate,
    description,
    price,
    key,
}) {
    //
    const [isLiked, setIsLiked] = useState(false);
    const handleClick = () => {
        setIsLiked(!isLiked);
    };

    return (
        <Box id={key} className="gamecard__container hover-scale">
            <Box className="gamecard__image">
                <img src={image} alt={title} className="" />
                <button className="gamecard__compare" onClick={handleClick}>
                    {isLiked ? <FaHeart /> : <FaRegHeart />}
                </button>
            </Box>
            <Box className="gamecard__text">
                <Box className="gamecard__info">
                    <Typography
                        variant="h6"
                        className="gamecard__title"
                        sx={{ lineHeight: "1.4rem", minHeight: "2.8rem" }}
                    >
                        {title}
                    </Typography>
                    <Typography variant="body1" className="gamecard__rating">
                        {rating}
                    </Typography>
                </Box>
                {/* <Typography variant="subtitle2" className="gamecard__date">
                    {releaseDate}
                </Typography> */}
                <Typography
                    variant="body2"
                    className="gamecard__description"
                    sx={{
                        fontSize: "0.9rem",
                        lineHeight: "1.1rem",
                        minHeight: "3.3rem",
                    }}
                >
                    {description}
                </Typography>

                <Typography
                    sx={{ width: "fit-content" }}
                    variant="body1"
                    className="gamecard__price"
                >
                    {price}
                </Typography>
            </Box>
        </Box>
    );
}
