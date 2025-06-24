import React, { useState } from "react";
import {
    Box,
    TextField,
    FormControlLabel,
    Checkbox,
    Slider,
    Typography,
    Button,
} from "@mui/material";
import "pages/Filter Page/styles/filter-container.css";

// Filter options
const genres = [
    "Action",
    "RPG",
    "Strategy",
    "Simulator",
    "Adventure",
    "FPS",
    "Tactical",
];
const platforms = ["Windows", "macOS", "Linux"];

export default function FilterContainer() {
    const [searchTag, setSearchTag] = useState("");

    const [selectedGenres, setSelectedGenres] = useState([]);

    const [priceRange, setPriceRange] = useState([0, 100]);
    const [ratingRange, setRatingRange] = useState([0, 100]);

    const [selectedPlatforms, setSelectedPlatforms] = useState([]);

    // Handle multiselect
    const handleGenreChange = (genre) => {
        setSelectedGenres((prev) =>
            prev.includes(genre)
                ? prev.filter((g) => g !== genre)
                : [...prev, genre]
        );
    };

    const handlePlatformChange = (platform) => {
        setSelectedPlatforms((prev) =>
            prev.includes(platform)
                ? prev.filter((p) => p !== platform)
                : [...prev, platform]
        );
    };

    // Clear all filters
    const clearFilters = () => {
        setSearchTag("");
        setSelectedGenres([]);

        setPriceRange([0, 100]);
        setRatingRange([0, 100]);

        setSelectedPlatforms([]);
    };

    return (
        <Box className="filter-container">
            <Typography
                variant="h6"
                sx={{ fontWeight: "bold", fontSize: "1.4em" }}
            >
                FILTERS
            </Typography>

            {/* Search box */}
            <TextField
                label="Search tag"
                variant="outlined"
                size="small"
                fullWidth
                margin="normal"
                value={searchTag}
                onChange={(e) => setSearchTag(e.target.value)}
                sx={{
                    input: {
                        color: "white",
                        backgroundColor: "rgba(255, 255, 255, 0.1)",
                    },
                    label: {
                        color: "white",
                        "&.Mui-focused": {
                            color: "white", // Prevent purple on focus
                        },
                    },
                    "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                            borderColor: "white",
                        },
                        "&:hover fieldset": {
                            borderColor: "white",
                        },
                        "&.Mui-focused fieldset": {
                            borderColor: "white",
                        },
                    },
                }}
            />

            {/* Genres */}
            <Typography
                variant="subtitle1"
                sx={{
                    fontWeight: "bold",
                    fontSize: "1.1rem",
                    marginTop: "0.2em",
                }}
            >
                GENRE
            </Typography>

            <Box className="filter__genres pl-6">
                {genres.map((genre) => (
                    <FormControlLabel
                        key={genre}
                        control={
                            <Checkbox
                                checked={selectedGenres.includes(genre)}
                                onChange={() => handleGenreChange(genre)}
                                sx={{
                                    color: "white",
                                    "&.Mui-checked": {
                                        color: "var(--orange)", // checked box color
                                    },
                                }}
                            />
                        }
                        label={genre}
                    />
                ))}
            </Box>

            {/* Price range */}
            <Typography
                variant="subtitle1"
                sx={{
                    fontWeight: "bold",
                    fontSize: "1.1rem",
                    marginTop: "0.2em",
                }}
            >
                PRICE RANGE
            </Typography>
            <div className="pl-3 pr-3">
                <Slider
                    value={priceRange}
                    onChange={(e, newValues) => setPriceRange(newValues)}
                    valueLabelDisplay="auto"
                    min={0}
                    max={100}
                    sx={{
                        color: "var(--orange)", // orange thumb and track
                        "& .MuiSlider-rail": {
                            color: "rgba(255, 255, 255, 0.5)", // white background line (unfilled part)
                            opacity: 1,
                        },
                        "& .MuiSlider-valueLabel": {
                            backgroundColor: "var(--light)", // optional: value label background
                            color: "black", // optional: value label text
                        },
                    }}
                />
            </div>

            {/* Rating range */}
            <Typography
                variant="subtitle1"
                sx={{
                    fontWeight: "bold",
                    fontSize: "1.1rem",
                    marginTop: "0.2em",
                }}
            >
                RATING
            </Typography>
            <div className="pl-3 pr-3">
                <Slider
                    value={ratingRange}
                    onChange={(e, newValues) => setRatingRange(newValues)}
                    valueLabelDisplay="auto"
                    min={0}
                    max={100}
                    step={1}
                    sx={{
                        color: "var(--orange)", // orange thumb and track
                        "& .MuiSlider-rail": {
                            color: "rgba(255, 255, 255, 0.5)", // white background line (unfilled part)
                            opacity: 1,
                        },
                        "& .MuiSlider-valueLabel": {
                            backgroundColor: "var(--light)", // optional: value label background
                            color: "black", // optional: value label text
                        },
                    }}
                />
            </div>

            {/* Platform */}
            <Typography
                variant="subtitle1"
                sx={{
                    fontWeight: "bold",
                    fontSize: "1.1rem",
                    marginTop: "0.2em",
                }}
            >
                PLATFORM
            </Typography>

            <Box className="filter__platform pl-6">
                {platforms.map((platform) => (
                    <FormControlLabel
                        key={platform}
                        control={
                            <Checkbox
                                checked={selectedPlatforms.includes(platform)}
                                onChange={() => handlePlatformChange(platform)}
                                sx={{
                                    color: "white",
                                    "&.Mui-checked": {
                                        color: "var(--orange)", // checked box color
                                    },
                                }}
                            />
                        }
                        label={platform}
                    />
                ))}
            </Box>

            {/* Clear button */}
            <div className="mt-4">
                {" "}
                <Button
                    variant="outlined"
                    color="secondary"
                    onClick={clearFilters}
                    fullWidth
                    sx={{
                        fontWeight: "bold",
                        fontSize: "1em",
                        backgroundColor: "var(--orange)", // orange fill

                        borderColor: "var(--orange)", // optional: make border match
                        "&:hover": {
                            backgroundColor: "var(--orange-dark)", // darker orange on hover
                            borderColor: "var(--orange-dark)",
                        },
                    }}
                >
                    Clear Filters
                </Button>
            </div>
        </Box>
    );
}
