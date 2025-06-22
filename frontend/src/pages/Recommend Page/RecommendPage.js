import FooterBasic from "components/FooterBasic";
import RecommendCard from "pages/Recommend Page/components/RecommendCard";
import Typography from "@mui/material/Typography";
import { Grid, Box } from "@mui/material";

import "pages/Recommend Page/styles/recommend-page.css";

function RecommendPage() {
    const recommendations = [
        {
            image: "https://blz-contentstack-images.akamaized.net/v3/assets/bltf408a0557f4e4998/bltec310a912eb6ceb1/67ffe15675d9ef1e30e1c799/Browsing_Card-and-Asset_Gallery_1.png",
            title: "Overwatch 2",
            rating: 4.1,
            releaseDate: "Oct 4, 2022",
            description: "Team-based shooter with a diverse roster of heroes.",
            price: "Free",
        },
        {
            image: "https://britishesports.org/wp-content/uploads/fly-images/11474/ts-apex-legends-free-to-play-battle-royale_0-767x710.jpg",
            title: "Apex Legends",
            rating: 4.4,
            releaseDate: "Feb 4, 2019",
            description: "Fast-paced battle royale with hero-based mechanics.",
            price: "Free",
        },
        {
            image: "https://gaming-cdn.com/images/products/1767/orig/stardew-valley-pc-mac-spel-steam-cover.jpg?v=1704800467",
            title: "Stardew Valley",
            rating: 4.9,
            releaseDate: "Feb 26, 2016",
            description:
                "Charming farming sim with deep character interactions and a relaxing pace.",
            price: "€14.99",
        },
        {
            image: "https://www.nintendo.com/eu/media/images/10_share_images/games_15/nintendo_switch_download_software_1/H2x1_NSwitchDS_AmongUs_image1600w.jpg",
            title: "Among Us",
            rating: 4.2,
            releaseDate: "Jun 15, 2018",
            description:
                "Social deduction game set in a sci-fi universe with simple, addictive gameplay.",
            price: "€4.99",
        },
        {
            image: "https://cdn1.epicgames.com/offer/24b9b5e323bc40eea252a10cdd3b2f10/EGS_LeagueofLegends_RiotGames_S1_2560x1440-80471666c140f790f28dff68d72c384b",
            title: "League of Legends",
            rating: 4.0,
            releaseDate: "Oct 27, 2009",
            description:
                "Competitive MOBA with deep strategy and high skill ceiling.",
            price: "Free",
        },
        {
            image: "https://assets.xboxservices.com/assets/4e/bc/4ebcb533-e184-42f3-833b-9aa47a81f39e.jpg?n=153142244433_Poster-Image-1084_1920x720.jpg",
            title: "Valorant",
            rating: 4.3,
            releaseDate: "Jun 2, 2020",
            description:
                "Tactical FPS combining precise gunplay with unique agents.",
            price: "Free",
        },
    ];

    return (
        <>
            <div className="recommend">
                <div className="recommend__container">
                    <Typography variant="h4" className="recommend__header">
                        This is Recommend Page header
                    </Typography>

                    <div className="recommend__body"></div>
                    <div className="recommend__results">
                        <div className="recommend__grid">

                                <Box className="recommend__row1">
                                    <RecommendCard
                                        key={recommendations[0].title}
                                        image={recommendations[0].image}
                                        title={recommendations[0].title}
                                        rating={recommendations[0].rating}
                                    />
                                </Box>

                                {/* Row 2: Two items (each takes 6/12 columns) */}
                                <Box className="recommend__row2">
                                    <RecommendCard
                                        key={recommendations[1].title}
                                        image={recommendations[1].image}
                                        title={recommendations[1].title}
                                        rating={recommendations[1].rating}
                                    />

                                    <RecommendCard
                                        key={recommendations[2].title}
                                        image={recommendations[2].image}
                                        title={recommendations[2].title}
                                        rating={recommendations[2].rating}
                                    />
                                </Box>

                                {/* Row 3: Three items (each takes 4/12 columns) */}
                                <Box className="recommend__row3">
                                    <RecommendCard
                                        key={recommendations[3].title}
                                        image={recommendations[3].image}
                                        title={recommendations[3].title}
                                        rating={recommendations[3].rating}
                                    />
                                
                                    <RecommendCard
                                        key={recommendations[4].title}
                                        image={recommendations[4].image}
                                        title={recommendations[4].title}
                                        rating={recommendations[4].rating}
                                    />
                              
                                    <RecommendCard
                                        key={recommendations[5].title}
                                        image={recommendations[5].image}
                                        title={recommendations[5].title}
                                        rating={recommendations[5].rating}
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
