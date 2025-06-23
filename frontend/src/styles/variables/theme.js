import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        primary: {
            main: "rgb(90, 90, 193)", // primary color
            light: "rgb(158, 162, 224)", // custom light
            dark: "#3A3A99", // optional
            contrastText: "#fff", // optional
        },
        secondary: {
            main: "#E2E9FF",
        },
        grey: {
            100: "#f5f5f5",
            300: "#E0E0E0",
        },
    },

    typography: {
        fontSize: 13, // base font size (default is 14)
        h1: { fontSize: "2rem" }, // override as needed
        h2: { fontSize: "1.75rem" },
        h3: { fontSize: "1.5rem" },
        body1: { fontSize: "0.8rem" },
        body2: { fontSize: "0.7rem" },
    },

    spacing: 4,
});

export default theme;
