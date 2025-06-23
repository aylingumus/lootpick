import React, { useState } from "react";

import "pages/Filter Page/styles/game-card.css";

import Typography from "@mui/material/Typography";
import { Box, Button } from "@mui/material";
import IconButton from "@mui/material/IconButton";

import { IoGitCompare } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

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
                <Typography
                    variant="h6"
                    className="gamecard__title"
                    sx={{ fontSize: "var(--font-size-xl)" }}
                >
                    {title}
                </Typography>

                {/* <Typography variant="subtitle2" className="gamecard__date">
                    {releaseDate}
                </Typography> */}
                <Typography
                    variant="body2"
                    className="gamecard__description"
                    sx={{
                        fontSize: "0.95rem",
                        lineHeight: "1.3rem",
                        minHeight: "2.6rem",
                    }}
                >
                    {description}
                </Typography>

                <Box className="gamecard__info">
                    <Typography
                        sx={{
                            width: "fit-content",
                            fontSize: "var(--font-size-md)",
                        }}
                        variant="body1"
                        className="gamecard__price"
                    >
                        {price}
                    </Typography>

                    <Typography
                        variant="body1"
                        className="gamecard__rating"
                        sx={{
                            whiteSpace: "nowrap",
                            display: "flex",
                            alignItems: "center",
                            gap: "5px",
                            fontSize: "var(--font-size-md)",
                        }}
                    >
                        <FaStar /> {rating}%
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
}
