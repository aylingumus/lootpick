import React, { useState } from "react";
import { Button, Box } from "@mui/material";
import Typography from "@mui/material/Typography";

import FooterBasic from "components/FooterBasic";
import FilterContainer from "pages/Filter Page/components/FilterContainer";
import GameCard from "pages/Filter Page/components/GameCard";
import FilterHeader from "pages/Filter Page/components/FilterHeader";
import SortingDropdown from "pages/Filter Page/components/SortingDropdown";

import "pages/Filter Page/styles/filter-page.css";

function FilterPage() {
    const games = [
        {
            image: "https://cdn.mos.cms.futurecdn.net/Usdru3W58p6g8NGpxzUfyi-1200-80.jpg",
            title: "Grand Theft Auto 5",
            rating: 85,
            releaseDate: "Mar 1, 2023",
            description:
                "Open-world crime saga with a deep story and vast freedom.",
            price: "€29.99",
        },
        {
            image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/292030/96b8627588997030e5a6b56ca5e9944756c8f288/capsule_616x353.jpg?t=1749199563",
            title: "The Witcher 3",
            rating: 80,
            releaseDate: "May 19, 2015",
            description: "Fantasy RPG.",
            price: "€19.99",
        },
        {
            image: "https://images.ctfassets.net/wn7ipiv9ue5v/478DkKMV6s8264JSaZlZcN/85f9527f4af4b0930052ae5c371e776e/RGL_RDR2_UltimateEdition_1310x738_R02.jpg",
            title: "Red Dead Redemption 2",
            rating: 90,
            releaseDate: "Oct 26, 2018",
            description:
                "Epic Western adventure with cinematic realism and depth.",
            price: "€39.99",
        },
        {
            image: "https://gaming-cdn.com/images/products/2616/orig/the-legend-of-zelda-breath-of-the-wild-switch-spel-nintendo-eshop-europe-cover.jpg?v=1730381682",
            title: "The Legend of Zelda",
            rating: 93,
            releaseDate: "Mar 3, 2017",
            description:
                "Revolutionary open-world design with exploration and discovery.",
            price: "€59.99",
        },
        {
            image: "https://fanatical.imgix.net/product/original/f7729888-af11-42c2-bdf4-423bdd310204.jpeg?auto=compress,format&w=870&fit=crop&h=489",
            title: "God of War Ragnarök",
            rating: 94,
            releaseDate: "Nov 9, 2022",
            description:
                "Mythological action-adventure with a strong emotional narrative.",
            price: "€49.99",
        },
        {
            image: "https://www.budgetgaming.nl/plaatjes/reviews/Cyberpunk%202077%20Ultimate%20Edition/CP2077UES2_Logo.jpg",
            title: "Cyberpunk 2077",
            rating: 90,
            releaseDate: "Dec 10, 2020",
            description:
                "Futuristic RPG set in a sprawling neon city with a long and winding storyline.",
            price: "€39.99",
        },
        {
            image: "https://www.nixxes.com/wp-content/uploads/2024/03/featured-img-hfw.jpg",
            title: "Horizon Forbidden West",
            rating: 92,
            releaseDate: "Feb 18, 2022",
            description:
                "Post-apocalyptic open-world game with mechanical beasts.",
            price: "€49.99",
        },
        {
            image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1245620/capsule_616x353.jpg?t=1748630546",
            title: "Elden Ring",
            rating: 77,
            releaseDate: "Feb 25, 2022",
            description:
                "Dark fantasy RPG with open-world exploration and challenge.",
            price: "€59.99",
        },
        {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrWO9hEIU1FNN9yI5OgXfh1m1CCtNRl_aK6A&s",
            title: "Spider-Man: Miles Morales",
            rating: 86,
            releaseDate: "Nov 12, 2020",
            description: "Superhero action with smooth web-swinging mechanics.",
            price: "€39.99",
        },
        {
            image: "https://gaming-cdn.com/images/products/6147/orig/assassin-s-creed-valhalla-pc-spel-ubisoft-connect-europe-cover.jpg?v=1709130520",
            title: "Assassin’s Creed Valhalla",
            rating: 95,
            releaseDate: "Nov 10, 2020",
            description:
                "Viking-era action RPG with large open-world regions and immersive lore.",
            price: "€29.99",
        },
        {
            image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1196590/capsule_616x353.jpg?t=1741142800",
            title: "Resident Evil Village",
            rating: 99,
            releaseDate: "May 7, 2021",
            description:
                "Survival horror with intense atmosphere and storytelling.",
            price: "€34.99",
        },
        {
            image: "https://image.api.playstation.com/vulcan/ap/rnd/202407/1020/91fe046f742042e3b31e57f7731dbe2226e1fd1e02a36223.jpg",
            title: "Minecraft",
            rating: 79,
            releaseDate: "Nov 18, 2011",
            description: "Block-based sandbox building and survival adventure.",
            price: "€26.95",
        },
        {
            image: "https://i.guim.co.uk/img/media/01512e0bd1d78a9a85026844386c02c544c01084/38_0_1200_720/master/1200.jpg?width=1200&quality=85&auto=format&fit=max&s=cef05f7f90efd180648f5aa5ce0d3690",
            title: "Fortnite",
            rating: 88,
            releaseDate: "Jul 25, 2017",
            description:
                "Battle royale with unique building mechanics and constant updates.",
            price: "Free",
        },
        {
            image: "https://blz-contentstack-images.akamaized.net/v3/assets/bltf408a0557f4e4998/bltec310a912eb6ceb1/67ffe15675d9ef1e30e1c799/Browsing_Card-and-Asset_Gallery_1.png",
            title: "Overwatch 2",
            rating: 84,
            releaseDate: "Oct 4, 2022",
            description: "Team-based shooter with a diverse roster of heroes.",
            price: "Free",
        },
        {
            image: "https://britishesports.org/wp-content/uploads/fly-images/11474/ts-apex-legends-free-to-play-battle-royale_0-767x710.jpg",
            title: "Apex Legends",
            rating: 91,
            releaseDate: "Feb 4, 2019",
            description: "Fast-paced battle royale with hero-based mechanics.",
            price: "Free",
        },
        {
            image: "https://gaming-cdn.com/images/products/1767/orig/stardew-valley-pc-mac-spel-steam-cover.jpg?v=1704800467",
            title: "Stardew Valley",
            rating: 93,
            releaseDate: "Feb 26, 2016",
            description:
                "Charming farming sim with deep character interactions and a relaxing pace.",
            price: "€14.99",
        },
        {
            image: "https://www.nintendo.com/eu/media/images/10_share_images/games_15/nintendo_switch_download_software_1/H2x1_NSwitchDS_AmongUs_image1600w.jpg",
            title: "Among Us",
            rating: 94,
            releaseDate: "Jun 15, 2018",
            description:
                "Social deduction game set in a sci-fi universe with simple, addictive gameplay.",
            price: "€4.99",
        },
        {
            image: "https://cdn1.epicgames.com/offer/24b9b5e323bc40eea252a10cdd3b2f10/EGS_LeagueofLegends_RiotGames_S1_2560x1440-80471666c140f790f28dff68d72c384b",
            title: "League of Legends",
            rating: 87,
            releaseDate: "Oct 27, 2009",
            description:
                "Competitive MOBA with deep strategy and high skill ceiling.",
            price: "Free",
        },
    ];

    return (
        <>
            <div className="filter">
                <div className="filter__container">
                    <FilterHeader className="fade-in-1" />

                    <div className="filter__body">
                        <FilterContainer className="filter__side-panel" />

                        <div className="filter__results fade-in-3">
                            <Box className="filter__results-header">
                                <Box className="filter__sorting">
                                    <Typography
                                        className=""
                                        variant="subtitle1"
                                        sx={{ fontSize: "1rem" }}
                                    >
                                        Sort by:
                                    </Typography>
                                    <SortingDropdown />
                                </Box>

                                <Box className="filter__compare">
                                    <Typography
                                        className="filter__compare-text"
                                        variant="subtitle1"
                                        sx={{ fontSize: "1rem" }}
                                    >
                                        Selected: 0 of 3 games
                                    </Typography>
                                    <Button
                                        className="filter__compare-button"
                                        variant="contained"
                                        sx={{
                                            fontSize: "1rem",
                                            backgroundColor: "var(--orange)", // orange fill

                                            borderColor: "var(--orange)", // optional: make border match
                                            "&:hover": {
                                                backgroundColor:
                                                    "var(--orange-dark)", // darker orange on hover
                                                borderColor:
                                                    "var(--orange-dark)",
                                            },
                                        }}
                                    >
                                        Recommend
                                    </Button>
                                </Box>
                            </Box>

                            <div className="filter__grid">
                                {games.map((game) => (
                                    <GameCard
                                        key={game.title}
                                        image={game.image}
                                        title={game.title}
                                        rating={game.rating}
                                        releaseDate={game.releaseDate}
                                        description={game.description}
                                        price={game.price}
                                    />
                                ))}
                            </div>

                            <Button
                                variant="contained"
                                className="filter__load-button"
                                sx={{
                                    fontSize: "1rem",
                                    backgroundColor: "var(--orange)", // orange fill

                                    borderColor: "var(--orange)", // optional: make border match
                                    "&:hover": {
                                        backgroundColor: "var(--orange-dark)", // darker orange on hover
                                        borderColor: "var(--orange-dark)",
                                    },
                                }}
                            >
                                Load More
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <FooterBasic />
        </>
    );
}

export default FilterPage;
