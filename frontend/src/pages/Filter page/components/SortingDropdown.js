import React, { useState } from "react";
import "pages/Filter Page/styles/filter-container.css";
import {
    Button,
    Box,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
} from "@mui/material";

export default function FilterContainer() {
    const [value, setValue] = useState("popular");

    const handleChange = (event) => {
        setValue(event.target.value);
    };
    return (
        <FormControl size="small">
            <Select
                id="dropdown"
                value={value}
                onChange={handleChange}
                sx={{
                    color: "white",
                    width: "220px",
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    ".MuiSelect-icon": {
                        color: "white",
                    },
                    "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "white",
                    },
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                        borderColor: "white",
                    },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        borderColor: "white",
                    },
                }}
                MenuProps={{
                    PaperProps: {
                        sx: {
                            backgroundColor: "var(--dark)",
                            color: "white",
                        },
                    },
                }}
            >
                <MenuItem value="name-asc">Name (A–Z)</MenuItem>
                <MenuItem value="name-desc">Name (Z–A)</MenuItem>
                <MenuItem value="price-asc">Price (Low to High)</MenuItem>
                <MenuItem value="price-desc">Price (High to Low)</MenuItem>
                <MenuItem value="release-desc">Release Date (Newest)</MenuItem>
                <MenuItem value="release-asc">Release Date (Oldest)</MenuItem>
                <MenuItem value="rating-desc">Rating (High to Low)</MenuItem>
                <MenuItem value="popular">Most Popular</MenuItem>
                <MenuItem value="discount">Biggest Discount</MenuItem>
            </Select>
        </FormControl>
    );
}
