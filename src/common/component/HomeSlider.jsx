import React from "react";
import Slider from "react-slick";
import { Box, Button, Typography, Container } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import sliderIMG1 from '../../assets/sliderIMG1.jpg'
import sliderIMG2 from '../../assets/sliderIMG2.jpg'

// Slider images
const slides = [
    {
        image: sliderIMG1,
        title: "EXPERT SOLUTION",
        subtitle: "MAKE YOUR STRATEGY STRONG",
        description: "Una justo odio ultrices aliquet vitae sollicitudin gravida...",
    },
    {
        image: sliderIMG2,
        title: "INNOVATIVE IDEAS",
        subtitle: "BUILD YOUR BUSINESS",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    },
];

const HomeSlider = () => {
    // Slick slider settings
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
    };

    return (
        <Box sx={{marginTop:8}}>
            <Slider {...settings}>
                {slides.map((slide, index) => (
                    <Box
                        key={index}
                        sx={{
                            height: "90vh",
                            backgroundImage: `url(${slide.image})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            position: "relative",
                        }}
                    >
                        {/* Overlay */}
                        <Box
                            sx={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: "100%",
                                height: "100%",
                                backgroundColor: "rgba(0,0,0,0.5)",
                            }}
                        ></Box>

                        {/* Content */}
                        <Container sx={{ position: "relative", textAlign: "center", color: "white" }}>
                            <Typography variant="h6">{slide.subtitle}</Typography>
                            <Typography variant="h2" sx={{ fontWeight: "bold" }}>{slide.title}</Typography>
                            <Typography variant="body1" sx={{ maxWidth: "600px", margin: "20px auto" }}>
                                {slide.description}
                            </Typography>
                            <Button variant="contained" sx={{ backgroundColor: "#0066FF", marginRight: "10px" }}>
                                Get Started
                            </Button>
                            <Button variant="outlined" sx={{ color: "white", borderColor: "white" }}>
                                About Us
                            </Button>
                        </Container>
                    </Box>
                ))}
            </Slider>
        </Box>
    );
};

export default HomeSlider;
