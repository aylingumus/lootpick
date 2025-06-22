import React, { useContext } from "react";
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

    return (
        <AppBar position="sticky" className="navbar">
            <Toolbar className="navbar__toolbar">
                <Box className="navbar__logo">
                    <LuGamepad2 size={38} />
                    <Typography variant="h5" className="navbar__title">
                        Lootpick
                    </Typography>
                </Box>

                <TextField
                    placeholder="Search games..."
                    variant="outlined"
                    size="small"
                    className="navbar__search"
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
                    >
                        Wishlist
                    </Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default NavBar;
