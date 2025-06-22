import "components/footer-basic.css";
import { Box, Typography } from "@mui/material";

function FooterBasic() {
    return (
        <Box component="footer" className="footer">
            <Typography variant="body2">© 2025 Lootpick App</Typography>
            <Typography variant="body2">Built with React</Typography>
        </Box>
    );
}

export default FooterBasic;
