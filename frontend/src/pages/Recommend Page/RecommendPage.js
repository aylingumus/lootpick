import FooterBasic from "components/FooterBasic";
import RecommendCard from "pages/Recommend Page/components/RecommendCard";
import RecommendHeader from "pages/Recommend Page/components/RecommendHeader";
import Typography from "@mui/material/Typography";
import { Grid, Box } from "@mui/material";

import "pages/Recommend Page/styles/recommend-page.css";

function RecommendPage() {
    const recommendations = [
        {
            tag: "Top Hit",
            image: "https://gaming-cdn.com/images/products/6147/orig/assassin-s-creed-valhalla-pc-spel-ubisoft-connect-europe-cover.jpg?v=1709130520",
            title: "Assassin’s Creed Valhalla",
            rating: 95,
            releaseDate: "Nov 10, 2020",
            description:
                "Viking-era action RPG with large open-world regions and immersive lore.",
            price: "€29.99",
            genre: "Battle Royale",
        },
        {
            image: "https://britishesports.org/wp-content/uploads/fly-images/11474/ts-apex-legends-free-to-play-battle-royale_0-767x710.jpg",
            tag: "Strong match",
            title: "Apex Legends",
            rating: 4.4,
            releaseDate: "Feb 4, 2019",
            description: "Fast-paced battle royale with hero-based mechanics.",
            price: "Free",
            genre: "Battle Royale",
        },
        {
            image: "https://gaming-cdn.com/images/products/1767/orig/stardew-valley-pc-mac-spel-steam-cover.jpg?v=1704800467",
            tag: "Worth exploring",
            title: "Stardew Valley",
            rating: 4.9,
            releaseDate: "Feb 26, 2016",
            description:
                "Charming farming sim with deep character interactions and a relaxing pace.",
            price: "€14.99",
            genre: "Simulation",
        },
        {
            image: "https://www.nintendo.com/eu/media/images/10_share_images/games_15/nintendo_switch_download_software_1/H2x1_NSwitchDS_AmongUs_image1600w.jpg",
            tag: "Noteworthy pick",
            title: "Among Us",
            rating: 4.2,
            releaseDate: "Jun 15, 2018",
            description:
                "Social deduction game set in a sci-fi universe with simple, addictive gameplay.",
            price: "€4.99",
            genre: "Party Game",
        },
        {
            image: "https://cdn1.epicgames.com/offer/24b9b5e323bc40eea252a10cdd3b2f10/EGS_LeagueofLegends_RiotGames_S1_2560x1440-80471666c140f790f28dff68d72c384b",
            tag: "Decent option",
            title: "League of Legends",
            rating: 4.0,
            releaseDate: "Oct 27, 2009",
            description:
                "Competitive MOBA with deep strategy and high skill ceiling.",
            price: "Free",
            genre: "MOBA",
        },
        {
            image: "https://assets.xboxservices.com/assets/4e/bc/4ebcb533-e184-42f3-833b-9aa47a81f39e.jpg?n=153142244433_Poster-Image-1084_1920x720.jpg",
            tag: "Consider if curious",
            title: "Valorant",
            rating: 4.3,
            releaseDate: "Jun 2, 2020",
            description:
                "Tactical FPS combining precise gunplay with unique agents.",
            price: "Free",
            genre: "Tactical Shooter",
        },
    ];

    return (
        <>
            <div className="recommend">
                <div className="recommend__container">
                    <RecommendHeader className="" />

                    <div className="recommend__results fade-in-3">
                        <div className="recommend__grid">
                            <Box className="recommend__row1">
                                <RecommendCard
                                    key={recommendations[0].title}
                                    image={recommendations[0].image}
                                    fontSize="1.1rem"
                                    padding="var(--spacing-xs) var(--spacing-sm)"
                                    tag={recommendations[0].tag}
                                    title={recommendations[0].title}
                                    titleSize="2.4rem"
                                    rating={recommendations[0].rating}
                                    price={recommendations[0].price}
                                    genre={recommendations[0].genre}
                                />
                            </Box>

                            {/* Row 2: Two items (each takes 6/12 columns) */}
                            <Box className="recommend__row2">
                                <RecommendCard
                                    key={recommendations[1].title}
                                    tag={recommendations[1].tag}
                                    image={recommendations[1].image}
                                    fontSize="0.9rem"
                                    padding="var(--spacing-xs) var(--spacing-md)"
                                    title={recommendations[1].title}
                                    titleSize="1.7rem"
                                    rating={recommendations[1].rating}
                                    price={recommendations[1].price}
                                    genre={recommendations[1].genre}
                                />

                                <RecommendCard
                                    key={recommendations[2].title}
                                    tag={recommendations[2].tag}
                                    fontSize="0.9rem"
                                    padding="var(--spacing-xs) var(--spacing-md)"
                                    image={recommendations[2].image}
                                    title={recommendations[2].title}
                                    titleSize="1.7rem"
                                    rating={recommendations[2].rating}
                                    price={recommendations[2].price}
                                    genre={recommendations[2].genre}
                                />
                            </Box>

                            {/* Row 3: Three items (each takes 4/12 columns) */}
                            <Box className="recommend__row3">
                                <RecommendCard
                                    key={recommendations[3].title}
                                    tag={recommendations[3].tag}
                                    fontSize="0.9rem"
                                    padding="var(--spacing-xs) var(--spacing-sm)"
                                    image={recommendations[3].image}
                                    title={recommendations[3].title}
                                    titleSize="1.5rem"
                                    rating={recommendations[3].rating}
                                    price={recommendations[3].price}
                                    genre={recommendations[3].genre}
                                />

                                <RecommendCard
                                    key={recommendations[4].title}
                                    tag={recommendations[4].tag}
                                    fontSize="0.9rem"
                                    padding="var(--spacing-xs) var(--spacing-sm)"
                                    image={recommendations[4].image}
                                    title={recommendations[4].title}
                                    titleSize="1.5rem"
                                    rating={recommendations[4].rating}
                                    price={recommendations[4].price}
                                    genre={recommendations[4].genre}
                                />

                                <RecommendCard
                                    key={recommendations[5].title}
                                    tag={recommendations[5].tag}
                                    fontSize="0.9rem"
                                    padding="var(--spacing-xs) var(--spacing-sm)"
                                    image={recommendations[5].image}
                                    title={recommendations[5].title}
                                    titleSize="1.5rem"
                                    rating={recommendations[5].rating}
                                    price={recommendations[5].price}
                                    genre={recommendations[5].genre}
                                />
                            </Box>
                        </div>
                    </div>
                </div>
            </div>

            <FooterBasic />
        </>
    );
}

export default RecommendPage;
