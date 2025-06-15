import React, { useState, useContext } from "react";
import { MyProvider, MyContext } from "context/CurrentPageContext";

import "./App.css";

import NavBar from "components/NavBar";
import FilterPage from "pages/Filter Page/FilterPage";
import RecommendPage from "pages/Recommend Page/RecommendPage";

function App() {
    const { page } = useContext(MyContext);
    const { navBar } = useContext(MyContext);

    const renderPage = () => {
        switch (page) {
            case "filter":
                return <FilterPage />;
            case "recommend":
                return <RecommendPage />;
            default:
                return <FilterPage />;
        }
    };

    const renderNavBar = () => {
        switch (navBar) {
            case true:
                return <NavBar />;
            case false:
                return null;
            default:
                return <NavBar />;
        }
    };

    return (
        <>
            <div className="app-wrapper">
                <div className="phone-frame">
                    <div className="phone-bezel">
                        {renderNavBar()}
                        <div className="app-content">
                            <div className="page-div">{renderPage()}</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

function AppWrapper() {
    // Wrap the entire app in the PageProvider to make context available
    return (
        <MyProvider>
            <App />
        </MyProvider>
    );
}

export default AppWrapper;
