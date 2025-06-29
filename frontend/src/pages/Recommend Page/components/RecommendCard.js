import React, { useState } from "react";

import "pages/Recommend Page/styles/recommend-card.css";

import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

export default function RecommendCard({
    image,
    title,
    rating,
    key,
    tag,
    fontSize,
    padding,
    price,
    titleSize,
    genre,
    subtitle,
}) {
    return (
        <Box
            id={key}
            className="recommendcard__container hover-scale fade-in-4"
        >
            <Box className="recommendcard__image">
                <img src={image} alt={title} className="" />
            </Box>
            <Box className="recommendcard__text">
                <div className="recommendcard_tags flex flex-row flex-wrap gap-3">
                    <Typography
                        variant="h4"
                        className="recommendcard__rank"
                        sx={{ fontSize: fontSize, padding: padding }}
                    >
                        {tag}
                    </Typography>
                    {/* <Typography
                        variant="h4"
                        className="recommendcard__genre"
                        sx={{ fontSize: fontSize, padding: padding }}
                    >
                        {genre}
                    </Typography> */}

                    <Typography
                        className="recommendcard__price"
                        variant="h4"
                        sx={{ fontSize: fontSize, padding: padding }}
                    >
                        {price}
                    </Typography>
                </div>
                <Box className="recommendcard__info">
                    <Typography
                        variant="h6"
                        className="recommendcard__title"
                        sx={{ fontSize: titleSize }}
                    >
                        {title}
                    </Typography>

                    {/* <Typography
                        variant="h6"
                        className="recommendcard__title"
                        sx={{ fontSize: "1.3rem", color: "rgba(255, 255, 255, 0.5)" }}
                    >
                        {subtitle}
                    </Typography> */}

                    {/* <Typography
                        variant="body1"
                        className="recommendcard__rating"
                    >
                        {rating}
                    </Typography> */}
                </Box>
            </Box>
        </Box>
    );
}
