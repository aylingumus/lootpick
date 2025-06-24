import React, { useContext, useState } from "react";
import { MyContext } from "context/CurrentPageContext";
import { LuGamepad2 } from "react-icons/lu";

import {
    AppBar,
    Toolbar,
    Box,
    Typography,
    TextField,
    Button,
} from "@mui/material";

import "components/nav-bar.css";

function NavBar() {
    const { page, setPage } = useContext(MyContext);
    const { activeButton, setActiveButton } = useContext(MyContext);
    const [searchTag, setSearchTag] = useState("");

    return (
        <AppBar position="sticky" className="navbar">
            <Toolbar className="navbar__toolbar">
                <Box className="navbar__logo">
                    <LuGamepad2 size={40} />
                    <Typography variant="h4" className="navbar__title">
                        LootPick
                    </Typography>
                </Box>

                <TextField
                    className="navbar__search"
                    label="Search games"
                    variant="outlined"
                    size="small"
                    margin="normal"
                    value={searchTag}
                    onChange={(e) => setSearchTag(e.target.value)}
                    sx={{
                        my: 0,
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

                <Box className="navbar__buttons">
                    <Button
                        variant="standard"
                        className={`navbar__button ${
                            activeButton === "filter" ? "active" : ""
                        }`}
                        onClick={() => {
                            setPage("filter");
                            setActiveButton("filter");
                        }}
                        sx={{fontSize: "0.9rem"}}
                    >
                        Filter
                    </Button>

                    <Button
                        variant="standard"
                        className={`navbar__button ${
                            activeButton === "recommend" ? "active" : ""
                        }`}
                        onClick={() => {
                            setPage("recommend");
                            setActiveButton("recommend");
                        }}
                        sx={{fontSize: "0.9rem"}}
                    >
                        Recommend
                    </Button>

                    <Button
                        variant="standard"
                        className={`navbar__button ${
                            activeButton === "compare" ? "active" : ""
                        }`}
                        onClick={() => {
                            setPage("compare");
                            setActiveButton("compare");
                        }}
                        sx={{fontSize: "0.9rem"}}
                    >
                        Compare
                    </Button>

                    <Button
                        variant="standard"
                        className={`navbar__button ${
                            activeButton === "wishlist" ? "active" : ""
                        }`}
                        onClick={() => {
                            setPage("wishlist");
                            setActiveButton("wishlist");
                        }}
                        sx={{fontSize: "0.9rem"}}
                    >
                        Wishlist
                    </Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default NavBar;
