import FooterBasic from "components/FooterBasic";
import FilterContainer from "pages/Filter Page/components/FilterContainer";
import GameCard from "pages/Filter Page/components/GameCard";

import "pages/Filter Page/styles/filter-page.css";

function FilterPage() {
    const games = [
    {
        image: "https://digitalcine.b-cdn.net/wp-content/uploads/2014/12/grand-theft-auto-5-ps4-une.jpg",
        title: "Grand Theft Auto 5",
        rating: 4.9,
        releaseDate: "Mar 1, 2023",
        description:
            "Open-world crime saga with a deep story and vast freedom.",
        price: "€29.99",
        
    },
    {
        image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/292030/96b8627588997030e5a6b56ca5e9944756c8f288/capsule_616x353.jpg?t=1749199563",
        title: "The Witcher 3",
        rating: 4.8,
        releaseDate: "May 19, 2015",
        description: "Fantasy RPG.",
        price: "€19.99",
    },
    {
        image: "https://images.ctfassets.net/wn7ipiv9ue5v/478DkKMV6s8264JSaZlZcN/85f9527f4af4b0930052ae5c371e776e/RGL_RDR2_UltimateEdition_1310x738_R02.jpg",
        title: "Red Dead Redemption 2: The Ultimate Western Experience",
        rating: 4.9,
        releaseDate: "Oct 26, 2018",
        description:
            "Epic Western adventure with cinematic realism and depth.",
        price: "€39.99",
    },
    {
        image: "https://gaming-cdn.com/images/products/2616/orig/the-legend-of-zelda-breath-of-the-wild-switch-spel-nintendo-eshop-europe-cover.jpg?v=1730381682",
        title: "The Legend of Zelda: Breath of the Wild",
        rating: 4.9,
        releaseDate: "Mar 3, 2017",
        description:
            "Revolutionary open-world design with exploration and discovery.",
        price: "€59.99",
    },
    {
        image: "https://fanatical.imgix.net/product/original/f7729888-af11-42c2-bdf4-423bdd310204.jpeg?auto=compress,format&w=870&fit=crop&h=489",
        title: "God of War Ragnarök",
        rating: 4.7,
        releaseDate: "Nov 9, 2022",
        description:
            "Mythological action-adventure with a strong emotional narrative.",
        price: "€49.99",
    },
    {
        image: "https://www.budgetgaming.nl/plaatjes/reviews/Cyberpunk%202077%20Ultimate%20Edition/CP2077UES2_Logo.jpg",
        title: "Cyberpunk 2077",
        rating: 4.1,
        releaseDate: "Dec 10, 2020",
        description:
            "Futuristic RPG set in a sprawling neon city with a long and winding storyline to test text overflow and layout stability.",
        price: "€39.99",
    },
    {
        image: "https://www.nixxes.com/wp-content/uploads/2024/03/featured-img-hfw.jpg",
        title: "Horizon Forbidden West",
        rating: 4.5,
        releaseDate: "Feb 18, 2022",
        description:
            "Post-apocalyptic open-world game with mechanical beasts.",
        price: "€49.99",
    },
    {
        image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1245620/capsule_616x353.jpg?t=1748630546",
        title: "Elden Ring",
        rating: 4.9,
        releaseDate: "Feb 25, 2022",
        description:
            "Dark fantasy RPG with open-world exploration and challenge.",
        price: "€59.99",
    },
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrWO9hEIU1FNN9yI5OgXfh1m1CCtNRl_aK6A&s",
        title: "Spider-Man: Miles Morales",
        rating: 4.6,
        releaseDate: "Nov 12, 2020",
        description: "Superhero action with smooth web-swinging mechanics.",
        price: "€39.99",
    },
    {
        image: "https://gaming-cdn.com/images/products/6147/orig/assassin-s-creed-valhalla-pc-spel-ubisoft-connect-europe-cover.jpg?v=1709130520",
        title: "Assassin’s Creed Valhalla",
        rating: 4.3,
        releaseDate: "Nov 10, 2020",
        description:
            "Viking-era action RPG with large open-world regions and immersive lore.",
        price: "€29.99",
    },
    {
        image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1196590/capsule_616x353.jpg?t=1741142800",
        title: "Resident Evil Village",
        rating: 4.4,
        releaseDate: "May 7, 2021",
        description:
            "Survival horror with intense atmosphere and storytelling.",
        price: "€34.99",
    },
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0YsbFwuvEXxti-0bd7amQRk9xYYs4BFwfmw&s",
        title: "Call of Duty: Modern Warfare II",
        rating: 4.2,
        releaseDate: "Oct 28, 2022",
        description:
            "Tactical shooter with modern graphics and multiplayer modes.",
        price: "€69.99",
    },
    {
        image: "https://image.api.playstation.com/vulcan/ap/rnd/202407/1020/91fe046f742042e3b31e57f7731dbe2226e1fd1e02a36223.jpg",
        title: "Minecraft",
        rating: 4.8,
        releaseDate: "Nov 18, 2011",
        description:
            "Block-based sandbox building and survival adventure.",
        price: "€26.95",
    },
    {
        image: "https://i.guim.co.uk/img/media/01512e0bd1d78a9a85026844386c02c544c01084/38_0_1200_720/master/1200.jpg?width=1200&quality=85&auto=format&fit=max&s=cef05f7f90efd180648f5aa5ce0d3690",
        title: "Fortnite",
        rating: 4.0,
        releaseDate: "Jul 25, 2017",
        description:
            "Battle royale with unique building mechanics and constant updates.",
        price: "Free",
    },
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
        description:
            "Fast-paced battle royale with hero-based mechanics.",
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
            <div className="filter">
                <div className="filter__container">
                    <div className="filter__header">
                        This is Filter Page header
                    </div>

                    <div className="filter__body">
                        <div className="filter__side-panel">
                            <FilterContainer />
                        </div>
                        <div className="filter__results">
                            <div className="filter__results-header">
                                <div className="filter__sorting">Sort by:</div>
                                <div className="filter__compare">
                                    Select and compare
                                </div>
                                <button className="filter__compare-button"></button>
                            </div>
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
                        </div>
                    </div>
                </div>
            </div>
            <FooterBasic />
        </>
    );
}

export default FilterPage;
