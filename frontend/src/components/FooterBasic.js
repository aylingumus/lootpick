import { Box, Typography, Link } from "@mui/material";
import React, { useContext } from "react";
import { MyContext } from "context/CurrentPageContext";
import "components/footer-basic.css";
import { LuGamepad2 } from "react-icons/lu";

function FooterBasic() {
    const { setPage } = useContext(MyContext);

    const sections = [
        {
            title: "Sections",
            links: [
                { label: "Filter", page: "filter" },
                { label: "Recommend", page: "recommend" },
                { label: "Compare", page: "compare" },
                { label: "Wishlist", page: "wishlist" },
            ],
        },
        {
            title: "Support",
            links: [
                { label: "Email" },
                { label: "Twitter" },
                { label: "Feedback" },
            ],
        },
        {
            title: "Important",
            links: [
                { label: "Terms & Conditions" },
                { label: "Privacy Policy" },
                { label: "FAQ" },
                { label: "Terms of use" },
            ],
        },
    ];

    return (
        <Box component="footer" className="footer">
            <Box className="footer__content">
                <Box className="footer__section-about">
                    {/* <Typography variant="h6" >About Lootpick</Typography>
                    <Typography
                        variant="body2"
                        sx={{
                            fontSize: "1rem",
                            color: "rgba(255, 255, 255, 0.7)",
                        }}
                    >
                        Lootpick helps you filter, compare, and discover games
                        tailored to your taste. Whether you're building a
                        wishlist or seeking fresh recommendations, we've got you
                        covered.
                    </Typography> */}
                    <div className="flex flex-row items-center gap-3">
                        <LuGamepad2 size={42} />
                        <Typography
                            variant="h6"
                            sx={{
                                fontSize: "2.5rem",
                            }}
                        >
                            LootPick
                        </Typography>
                    </div>
                    <Typography
                        variant="body2"
                        sx={{
                            fontSize: "1.2rem",
                            color: "rgba(255, 255, 255, 0.7)",
                        }}
                    >
                        Built with passion for gaming
                    </Typography>
                </Box>

                {sections.map((section) => (
                    <Box className="footer__section-lists" key={section.title}>
                        <Typography
                            variant="h6"
                            sx={{
                                fontSize: "1.4rem",
                                color: "white",
                            }}
                        >
                            {section.title}
                        </Typography>
                        <ul>
                            {section.links.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href="#"
                                        underline="hover"
                                        onClick={
                                            link.page
                                                ? () => setPage(link.page)
                                                : undefined
                                        }
                                        sx={{
                                            fontSize: "1rem",
                                            color: "rgba(255, 255, 255, 0.7)",
                                        }}
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </Box>
                ))}
            </Box>

            <Box className="footer__bottom">
                <Typography
                    variant="caption"
                    sx={{
                        fontSize: "0.9rem",
                        color: "rgba(255, 255, 255, 0.7)",
                    }}
                >
                    © 2025 LootPick. All rights reserved.
                </Typography>
            </Box>
        </Box>
    );
}

export default FooterBasic;
