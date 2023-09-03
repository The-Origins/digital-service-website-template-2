import React, { useState } from "react";
import { useMediaQuery, Box, Typography, IconButton } from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import SwipeableViews from "react-swipeable-views";
import FeaturedCard from "../elements/featured";
import img1 from "../../assets/images/image1.jpg";
import img2 from "../../assets/images/image2.jpg";
import img3 from "../../assets/images/image3.jpg";


const Featured = () => {
  const isNotPhone = useMediaQuery("(min-width:1000px)");
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    if ((isNotPhone && index < 1) || (!isNotPhone && index < 5)) {
      setIndex((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    if (index !== 0) {
      setIndex((prev) => prev - 1);
    }
  };

  const changeIndex = (index) => {
    setIndex(index);
  };

  return (
    <Box
      marginBottom={isNotPhone ? undefined : "60px"}
      width={"100%"}
      height={"100vh"}
      display={"flex"}
      justifyContent={"center"}
    >
      <Box width={isNotPhone ? "70%" : "90%"} height={"100%"}>
        <Box
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"space-around"}
          alignItems={"center"}
        >
          <Typography
            marginTop={"40px"}
            variant={isNotPhone ? "h3" : "h4"}
            fontWeight={"bold"}
          >
            Featured Projects
          </Typography>
          <Typography textAlign={"center"} color={"#898989"}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            labore alias suscipit, <br /> quaerat earum nihil rerum repudiandae
            autem minima neque veritatis.
          </Typography>
        </Box>
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          height={"80%"}
        >
          <IconButton onClick={handleBack} disabled={index === 0}>
            <ChevronLeft />
          </IconButton>
          <Box
            height={"100%"}
            width={"85%"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            {isNotPhone ? (
              <SwipeableViews
                height={"100%"}
                width={"100%"}
                index={index}
                onChangeIndex={changeIndex}
              >
                <Box
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"space-between"}
                  height={"100%"}
                  width={"100%"}
                >
                  <FeaturedCard
                    image={img1}
                    title="Project 001"
                    description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa
        voluptates"
                  />
                  <FeaturedCard
                    image={img2}
                    title="Project 002"
                    description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa
        voluptates"
                  />
                  <FeaturedCard
                    image={img3}
                    title="Project 003"
                    description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa
        voluptates"
                  />
                </Box>
                <Box
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"space-between"}
                  height={"100%"}
                  width={"100%"}
                >
                  <FeaturedCard
                    image={img1}
                    title="Project 004"
                    description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa
        voluptates"
                  />
                  <FeaturedCard
                    image={img2}
                    title="Project 005"
                    description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa
        voluptates"
                  />
                  <FeaturedCard
                    image={img3}
                    title="Project 006"
                    description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa
        voluptates"
                  />
                </Box>
              </SwipeableViews>
            ) : (
              <SwipeableViews
                height={"100%"}
                width={"100%"}
                index={index}
                onChangeIndex={changeIndex}
              >
                <FeaturedCard
                    image={img1}
                    title="Project 001"
                    description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa
      voluptates"
                  />
                  <FeaturedCard
                    image={img2}
                    title="Project 002"
                    description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa
      voluptates"
                  />
                  <FeaturedCard
                    image={img3}
                    title="Project 003"
                    description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa
      voluptates"
                  />
                <FeaturedCard
                    image={img1}
                    title="Project 004"
                    description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa
      voluptates"
                  />
                  <FeaturedCard
                    image={img2}
                    title="Project 005"
                    description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa
      voluptates"
                  />
                  <FeaturedCard
                    image={img3}
                    title="Project 006"
                    description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa
      voluptates"
                  />
              </SwipeableViews>
            )}
          </Box>
          <IconButton onClick={handleNext} disabled={(isNotPhone && index === 1) || (!isNotPhone && index === 5)}>
            <ChevronRight />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Featured;
