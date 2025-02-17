import React, { useState } from "react";
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    IconButton,
    Menu,
    MenuItem,
    Box,
} from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import DehazeIcon from "@mui/icons-material/Dehaze";

const Navbar = () => {
    const [menuAnchor, setMenuAnchor] = useState(null);

    const handleMenuOpen = (event) => {
        setMenuAnchor(event.currentTarget);
    };

    const handleMenuClose = () => {
        setMenuAnchor(null);
    };

    return (
        <AppBar position="fixed" sx={{ backgroundColor: "#012970"}}>
            <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
                {/* Left Section - Logo */}
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                    Finbiz
                </Typography>

                {/* Center Section - Navigation Links (Hidden on Mobile) */}
                <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3 }}>
                    <Button color="inherit">Home</Button>
                    <Button color="inherit">Services</Button>
                    <Button color="inherit">Pages</Button>
                    <Button color="inherit">Blog</Button>
                    <Button color="inherit">Elements</Button>
                    <Button color="inherit">Contact</Button>
                </Box>

                {/* Right Section - Call & Button */}
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    {/* Phone Number */}
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                        <PhoneIcon />
                        <Typography variant="body1">+256 21458.2146</Typography>
                    </Box>

                    {/* Book a Meeting Button */}
                    <Button variant="contained" sx={{ backgroundColor: "#0066FF" }}>
                        Book a Meeting
                    </Button>

                    {/* Mobile Menu Button (DehazeIcon) */}
                    <Box sx={{ display: { xs: "block", md: "none" } }}>
                        <Button onClick={handleMenuOpen}>
                            <DehazeIcon sx={{ color: "white" }} />
                        </Button>
                    </Box>
                </Box>
            </Toolbar>

            {/* Mobile Dropdown Menu */}
            <Menu anchorEl={menuAnchor} open={Boolean(menuAnchor)} onClose={handleMenuClose}>
                <MenuItem onClick={handleMenuClose}>Home</MenuItem>
                <MenuItem onClick={handleMenuClose}>Services</MenuItem>
                <MenuItem onClick={handleMenuClose}>Pages</MenuItem>
                <MenuItem onClick={handleMenuClose}>Blog</MenuItem>
                <MenuItem onClick={handleMenuClose}>Elements</MenuItem>
                <MenuItem onClick={handleMenuClose}>Contact</MenuItem>
            </Menu>
        </AppBar>
    );
};

export default Navbar;
