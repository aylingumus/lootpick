import React from "react";
import "@/components/nav-bar.module.css";
import { GoHome } from "react-icons/go";
import { GrAnalytics } from "react-icons/gr";
import { IoSettingsOutline } from "react-icons/io5";
import { IoAddCircle } from "react-icons/io5";
import { LuLeaf } from "react-icons/lu";
import { useContext } from "react";
import { useState } from "react";
import { MyContext } from "../context/pages";

function NavBar() {
    const { page, setPage } = useContext(MyContext);
    const { key, setKey } = useContext(MyContext);
    const { activeButton, setActiveButton } = useContext(MyContext);

    return (
        <nav id="navbar">
            <button
                onClick={() => {
                    setPage("home");
                    setKey((prev) => prev + 1);
                    setActiveButton("home");
                }}
                className={`${activeButton === "home" ? "active" : ""} nav-button`}
            >
                <GoHome
                    size={24}
                    style={{ strokeWidth: 0, stroke: "currentColor" }}
                />
            </button>

            <button
                onClick={() => {
                    setPage("analytics");
                    setActiveButton("analytics");
                }}
                className={`${activeButton === "analytics" ? "active" : ""} nav-button`}
            >
                <GrAnalytics size={22} />
            </button>

            <button
                onClick={() => {
                    setPage("input");
                    setActiveButton("input");
                }}
                className={`${activeButton === "input" ? "active" : ""} nav-button-input`}
            >
                <IoAddCircle size={50} />
            </button>

            <button
                onClick={() => {
                    setPage("reduce");
                    setActiveButton("reduce");
                }}
                className={`${activeButton === "reduce" ? "active" : ""} nav-button`}
            >
                <LuLeaf size={24} />
            </button>

            <button
                onClick={() => {
                    setPage("settings");
                    setActiveButton("settings");
                }}
                className={`${activeButton === "settings" ? "active" : ""} nav-button`}
            >
                <IoSettingsOutline size={24} />
            </button>
        </nav>
    );
}

export default NavBar;
