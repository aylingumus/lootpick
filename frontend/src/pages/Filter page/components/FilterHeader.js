import React, { useState } from "react";

import "pages/Filter Page/styles/filter-header.css";

import Typography from "@mui/material/Typography";

export default function FilterHeader({
    image,
    title,
    rating,
    releaseDate,
    description,
    price,
    key,
}) {
    return (
        <>
            <div className="filter__header-container">
                <div
                    className="filter__header"
                    style={{
                        position: "absolute",
                        bottom: "-1em",
                        left: "2em",
                        width: "100%",
                        height: "30rem",
                        backgroundImage: "url(/images/avatar-a.png)",
                        backgroundSize: "auto 70%",
                        backgroundPosition: "left 3em bottom 0",
                        backgroundRepeat: "no-repeat",
                        zIndex: 0,
                        pointerEvents: "none",
                        backgroundColor: "transparent", // ensures no background behind PNG
                    }}
                ></div>
                <div className="filter__header-text-container">
                    <Typography
                        className="filter__header-text"
                        variant="h1"
                        sx={{
                            fontSize: "3rem",
                        }}
                    >
                        Find Your Next Loot
                    </Typography>
                    <Typography
                        className="filter__header-text"
                        variant="body2"
                        sx={{
                            fontSize: "1.4rem",
                            color: "rgba(255, 255, 255, 0.6)",
                        }}
                    >
                        No more endless searching — just great games, instantly.
                    </Typography>
                </div>
            </div>
        </>
    );
}
