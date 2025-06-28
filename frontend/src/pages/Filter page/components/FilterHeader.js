import React, { useState } from "react";

import "pages/Filter Page/styles/filter-header.css";

import Typography from "@mui/material/Typography";

export default function FilterHeader() {
    return (
        <>
            <div className="filter__header-container fade-in-1">
                <div
                    className="filter__header-avatar"
                    style={{
                        backgroundImage: "url(/images/avatar-d.png)",
                    }}
                ></div>
                <div className="filter__header-text-container">
                    <Typography
                        className="filter__header-text"
                        variant="h1"
                        sx={{
                            fontSize: "3.5rem",
                        }}
                    >
                        Find Your Next Loot
                    </Typography>
                    <Typography
                        className="filter__header-text"
                        variant="body2"
                        sx={{
                            fontSize: "1.3rem",
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
