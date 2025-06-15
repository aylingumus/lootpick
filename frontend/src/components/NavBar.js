import React from "react";
import "components/nav-bar.css";

import { useContext } from "react";
import { useState } from "react";
import { MyContext } from "context/CurrentPageContext";

import { LuGamepad2 } from "react-icons/lu";

function NavBar() {
    const { page, setPage } = useContext(MyContext);
    const { key, setKey } = useContext(MyContext);
    const { activeButton, setActiveButton } = useContext(MyContext);

    return (
        <nav id="navbar">
            {/* Logo Section */}
            <div className="logo">
                <LuGamepad2 size={30} />
                <span>Lootpick</span>
            </div>

            {/* Search Section */}
            <input
                type="text"
                placeholder="Search games..."
                className="search"
            />

            {/* Button Section */}
            <div className="nav-buttons">
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
            </div>
        </nav>
    );
}

export default NavBar;
