import React, { useState } from "react";

import "pages/Recommend Page/styles/recommend-card.css";

import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

export default function RecommendCard({ image, title, rating, key }) {
    return (
        <Box
            id={key}
            className="recommendcard__container hover-scale fade-in-4"
        >
            <Box className="recommendcard__image">
                <img src={image} alt={title} className="" />
            </Box>
            <Box className="recommendcard__text">
                <Box className="recommendcard__info">
                    <Typography variant="h6" className="recommendcard__title">
                        {title}
                    </Typography>
                    <Typography
                        variant="body1"
                        className="recommendcard__rating"
                    >
                        {rating}
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
}
