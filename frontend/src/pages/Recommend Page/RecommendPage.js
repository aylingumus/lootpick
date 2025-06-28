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
        image: "https://imaginus.ca/cdn/shop/files/HP536_Genshin_Impact_16x24_e0281634-62c6-42d4-9795-c93c2ba3aaef.jpg?v=1712272917",
        title: "Genshin Impact",
        subtitle: "Step Into a Vast Magical World of Adventure",
        rating: 4.7,
        releaseDate: "Sep 28, 2020",
        description:
            "Anime-style open world with elemental combat, exploration, and character collecting.",
        price: "Free",
        genre: "Action RPG",
    },
    {
        tag: "Strong match",
        image: "https://cdn2.unrealengine.com/egs-horizonzerodawnremastered-guerrillagames-g1a-00-1920x1080-c0d45f881715.jpg",
        title: "Horizon Zero Dawn",
        rating: 4.6,
        releaseDate: "Feb 28, 2017",
        description:
            "Post-apocalyptic open world filled with robotic creatures and a gripping story.",
        price: "€19.99",
        genre: "Action RPG",
    },
    {
        tag: "Worth exploring",
        image: "https://www.nintendo.com/eu/media/images/10_share_images/games_15/nintendo_switch_4/H2x1_NSwitch_ImmortalisFenixRising_image1600w.jpg",
        title: "Immortals Fenyx Rising",
        rating: 4.3,
        releaseDate: "Dec 3, 2020",
        description:
            "Colorful, mythological open world with puzzles, combat, and Zelda-style exploration.",
        price: "€24.99",
        genre: "Action Adventure",
    },
    {
        tag: "Noteworthy pick",
        image: "https://image.api.playstation.com/vulcan/ap/rnd/202110/2000/YMUoJUYNX0xWk6eTKuZLr5Iw.jpg?w=1920&thumb=false",
        title: "Elden Ring",
        rating: 4.9,
        releaseDate: "Feb 25, 2022",
        description:
            "Massive fantasy open world with freedom, deep lore, and challenging gameplay.",
        price: "€59.99",
        genre: "Action RPG",
    },
    {
        tag: "Decent option",
        image: "https://static1.srcdn.com/wordpress/wp-content/uploads/2022/03/Tunic-Review-Cover-Art.jpg",
        title: "Tunic",
        rating: 4.4,
        releaseDate: "Mar 16, 2022",
        description:
            "Isometric adventure with puzzles, secrets, and nostalgic Zelda-inspired gameplay.",
        price: "€27.99",
        genre: "Adventure",
    },
    {
        tag: "Consider if curious",
        image: "https://images.gog-statics.com/3ea193960da2817ff6b4763a3878ed1ecdcedd76c07927104a01233ed636d8e2_product_card_v2_mobile_slider_639.jpg",
        title: "Sable",
        rating: 4.0,
        releaseDate: "Sep 23, 2021",
        description:
            "Peaceful open-world exploration with striking cel-shaded visuals and a coming-of-age story.",
        price: "€24.99",
        genre: "Exploration",
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
                                    fontSize="1.0rem"
                                    padding="var(--spacing-xs) var(--spacing-sm)"
                                    tag={recommendations[0].tag}
                                    title={recommendations[0].title}
                                    subtitle={recommendations[0].subtitle}
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
                                    fontSize="0.8rem"
                                    padding="var(--spacing-xs) var(--spacing-md)"
                                    title={recommendations[1].title}
                                      subtitle={recommendations[1].subtitle}
                                    titleSize="1.7rem"
                                    rating={recommendations[1].rating}
                                    price={recommendations[1].price}
                                    genre={recommendations[1].genre}
                                />

                                <RecommendCard
                                    key={recommendations[2].title}
                                    tag={recommendations[2].tag}
                                    fontSize="0.8rem"
                                    padding="var(--spacing-xs) var(--spacing-md)"
                                    image={recommendations[2].image}
                                    title={recommendations[2].title}
                                      subtitle={recommendations[2].subtitle}
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
                                    fontSize="0.8rem"
                                    padding="var(--spacing-xs) var(--spacing-sm)"
                                    image={recommendations[3].image}
                                    title={recommendations[3].title}
                                      subtitle={recommendations[3].subtitle}
                                    titleSize="1.5rem"
                                    rating={recommendations[3].rating}
                                    price={recommendations[3].price}
                                    genre={recommendations[3].genre}
                                />

                                <RecommendCard
                                    key={recommendations[4].title}
                                    tag={recommendations[4].tag}
                                    fontSize="0.8rem"
                                    padding="var(--spacing-xs) var(--spacing-sm)"
                                    image={recommendations[4].image}
                                    title={recommendations[4].title}
                                      subtitle={recommendations[4].subtitle}
                                    titleSize="1.5rem"
                                    rating={recommendations[4].rating}
                                    price={recommendations[4].price}
                                    genre={recommendations[4].genre}
                                />

                                <RecommendCard
                                    key={recommendations[5].title}
                                    tag={recommendations[5].tag}
                                    fontSize="0.8rem"
                                    padding="var(--spacing-xs) var(--spacing-sm)"
                                    image={recommendations[5].image}
                                    title={recommendations[5].title}
                                      subtitle={recommendations[5].subtitle}
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
