import React from "react";
import "components/nav-bar.css";

import { useContext } from "react";
import { useState } from "react";
import { MyContext } from "context/CurrentPageContext";

function NavBar() {
    const { page, setPage } = useContext(MyContext);
    const { key, setKey } = useContext(MyContext);
    const { activeButton, setActiveButton } = useContext(MyContext);

    return (
        <nav id="navbar">
            {/* Logo Section */}
            <div className="logo">
                <img src="/logo.png" alt="Logo" />{" "}
                {/* Update src if you have a logo */}
                <span>Lootpick</span>
            </div>

            {/* Search Section */}
            <input
                type="text"
                placeholder="Search games..."
                className="search"
            />

            {/* Button Section */}
            <button
                onClick={() => {
                    setPage("filter");
                    setKey((prev) => prev + 1);
                    setActiveButton("filter");
                }}
                className={`${
                    activeButton === "filter" ? "active" : ""
                } nav-button`}
            >
                Filter
            </button>

            <button
                onClick={() => {
                    setPage("recommend");
                    setActiveButton("recommend");
                }}
                className={`${
                    activeButton === "recommend" ? "active" : ""
                } nav-button`}
            >
                Recommend
            </button>
        </nav>
    );
}

export default NavBar;
