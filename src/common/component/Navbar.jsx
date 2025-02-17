import React, { useState } from "react";
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    Menu,
    MenuItem,
    Box,
} from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import DehazeIcon from "@mui/icons-material/Dehaze";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"; // Dropdown icon
import HomeSlider from "./HomeSlider";

import logo from '../../assets/logo.png'
const Navbar = () => {
    const [servicesAnchor, setServicesAnchor] = useState(null);
    const [pagesAnchor, setPagesAnchor] = useState(null);

    // Services Dropdown Handlers
    const handleServicesOpen = (event) => {
        setServicesAnchor(event.currentTarget);
    };
    const handleServicesClose = () => {
        setServicesAnchor(null);
    };

    // Pages Dropdown Handlers
    const handlePagesOpen = (event) => {
        setPagesAnchor(event.currentTarget);
    };
    const handlePagesClose = () => {
        setPagesAnchor(null);
    };




    return (
        <Box>
            <AppBar position="fixed" sx={{ backgroundColor: "#012970" }}>
                <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>

                    <Box sx={{display:'flex'}}>

                        <img src={logo} style={{ width: 50, filter: "invert(1) brightness(2)" }} />



                        <Typography sx={{ fontWeight: "bold", marginLeft: 2,marginTop:1 ,fontSize:30}}>
                            Finbiz
                        </Typography>

                    </Box>



                    {/* Center Section - Navigation Links */}
                    <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3 }}>
                        <Button color="inherit">Home</Button>

                        {/* Services Dropdown (Mouse Hover) */}
                        <Box
                            onMouseEnter={handleServicesOpen}
                            onMouseLeave={handleServicesClose}
                            sx={{ display: "flex", alignItems: "center", gap: 0.5 }}
                        >
                            <Button color="inherit" endIcon={<KeyboardArrowDownIcon />}>Services</Button>
                            <Menu
                                anchorEl={servicesAnchor}
                                open={Boolean(servicesAnchor)}
                                onClose={handleServicesClose}
                                MenuListProps={{ onMouseLeave: handleServicesClose }}
                            >
                                <MenuItem onClick={handleServicesClose}>Consulting</MenuItem>
                                <MenuItem onClick={handleServicesClose}>IT Solutions</MenuItem>
                                <MenuItem onClick={handleServicesClose}>Business Strategy</MenuItem>
                            </Menu>
                        </Box>

                        {/* Pages Dropdown (Mouse Hover) */}
                        <Box
                            onMouseEnter={handlePagesOpen}
                            onMouseLeave={handlePagesClose}
                            sx={{ display: "flex", alignItems: "center", gap: 0.5 }}
                        >
                            <Button color="inherit" endIcon={<KeyboardArrowDownIcon />}>Pages</Button>
                            <Menu
                                anchorEl={pagesAnchor}
                                open={Boolean(pagesAnchor)}
                                onClose={handlePagesClose}
                                MenuListProps={{ onMouseLeave: handlePagesClose }}
                            >
                                <MenuItem onClick={handlePagesClose}>About Us</MenuItem>
                                <MenuItem onClick={handlePagesClose}>Careers</MenuItem>
                                <MenuItem onClick={handlePagesClose}>Case Studies</MenuItem>
                            </Menu>
                        </Box>



                        <Button color="inherit">Blog</Button>




                        <Button color="inherit">Elements</Button>
                        <Button color="inherit">Contact</Button>
                    </Box>

                    {/* Right Section - Call & Button */}
                    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                            <PhoneIcon />
                            <Typography variant="body1">+256 21458.2146</Typography>
                        </Box>

                        <Button variant="contained" sx={{ backgroundColor: "#0066FF" }}>
                            Book a Meeting
                        </Button>

                        {/* Mobile Menu Button */}
                        <Box sx={{ display: { xs: "block", md: "none" } }}>
                            <Button>
                                <DehazeIcon sx={{ color: "white" }} />
                            </Button>
                        </Box>
                    </Box>
                </Toolbar>
            </AppBar>

            {/* Home Slider */}
            <Box>
                <HomeSlider />
            </Box>
        </Box>
    );
};

export default Navbar;
