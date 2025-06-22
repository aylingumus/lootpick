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
    const [ratingRange, setRatingRange] = useState([0, 10]);

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
        setRatingRange([0, 10]);

        setSelectedPlatforms([]);
    };

    return (
        <Box className="filter-container">
            <Typography variant="h6" >
                Filters
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
            />


            {/* Genres */}
            <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                Genre
            </Typography>

            <Box className="filter__genres" sx={{ fontWeight: 'bold' }}>
                {genres.map((genre) => (
                    <FormControlLabel
                        key={genre}
                        control={
                            <Checkbox
                                checked={selectedGenres.includes(genre)}
                                onChange={() => handleGenreChange(genre)}
                            />
                        }
                        label={genre}
                    />
                ))}
            </Box>

            {/* Price range */}
            <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                Price range
            </Typography>
            <Slider
                value={priceRange}
                onChange={(e, newValues) => setPriceRange(newValues)}
                valueLabelDisplay="auto"
                min={0}
                max={100}
            />

            {/* Rating range */}
            <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                Rating (min to max)
            </Typography>
            <Slider
                value={ratingRange}
                onChange={(e, newValues) => setRatingRange(newValues)}
                valueLabelDisplay="auto"
                min={0}
                max={10}
                step={0.5}
            />

            {/* Platform */}
            <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                Platform
            </Typography>

            <Box className="filter__platform">
            {platforms.map((platform) => (
                <FormControlLabel
                    key={platform}
                    control={
                        <Checkbox
                            checked={selectedPlatforms.includes(platform)}
                            onChange={() => handlePlatformChange(platform)}
                        />
                    }
                    label={platform}
                />
            ))}
            </Box>

            {/* Clear button */}
            <Button
                variant="outlined"
                color="secondary"
                onClick={clearFilters}
                fullWidth
                
            >
                Clear Filters
            </Button>
        </Box>
    );
}
