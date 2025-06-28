import React, { useState } from "react";

import { PiSword } from "react-icons/pi";
import { BiGame } from "react-icons/bi";
import { LuGhost } from "react-icons/lu";
import { BiGhost } from "react-icons/bi";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { IoIosRemoveCircleOutline } from "react-icons/io";
import { IoIosRemoveCircle } from "react-icons/io";

import "pages/Recommend Page/styles/recommend-header.css";

import Typography from "@mui/material/Typography";

export default function RecommendHeader() {
    const [isLiked, setIsLiked] = useState(false);
    const handleClick = () => {
        setIsLiked(!isLiked);
    };

    return (
        <>
            <div className="recommend__header-container fade-in-1">
                <div
                    className="recommend__header-avatar"
                    style={{
                        backgroundImage: "url(/images/avatar-c.png)",
                    }}
                ></div>
                <div className="recommend__header-text-container fade-in-2">
                    <Typography
                        className="recommend__header-text"
                        variant="h1"
                        sx={{
                            fontSize: "2.3rem",
                        }}
                    >
                        Select up to three games
                    </Typography>

                    <div className="recommend_game-selection">
                        <div>
                            <div className="recommend__game1">
                                <img
                                    className="recommend__game1-img"
                                    src="https://upload.wikimedia.org/wikipedia/en/c/c6/The_Legend_of_Zelda_Breath_of_the_Wild.jpg"
                                    alt="video game"
                                ></img>
                                <button
                                    className="recommend__game1-img-delete"
                                    onClick={handleClick}
                                >
                                    {isLiked ? (
                                        <IoIosRemoveCircle size={22} />
                                    ) : (
                                        <IoIosRemoveCircleOutline size={22} />
                                    )}
                                </button>
                            </div>
                            <div
                                className="mt-2"
                                style={{
                                    fontSize: "0.9rem",
                                    color: "white"
                                  
                                }}
                            >
                                The Legend of Zelda
                            </div>
                        </div>

                        <button className="recommend__add-button hover-scale">
                            <BiGame
                                size={60}
                                color="rgba(255, 255, 255, 0.5)"
                            />
                        </button>

                        <button className="recommend__add-button hover-scale">
                            <BiGhost
                                size={60}
                                color="rgba(255, 255, 255, 0.5)"
                            />
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
