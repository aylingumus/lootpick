import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        primary: {
            main: "rgb(85, 37, 130)", // primary color
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
        fontSize: 12, // base font size (default is 14)

    },

    spacing: 4,
});

export default theme;
