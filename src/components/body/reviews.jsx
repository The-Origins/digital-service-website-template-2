import React, { useState } from "react";
import {
  useMediaQuery,
  Box,
  IconButton,
  Typography,
  Avatar,
} from "@mui/material";
import background from "../../assets/images/background.jpg";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const reviews = [
  {
    name: "John Doe",
    profile: "JD",
    title: "CEO/Founder",
    review:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis recusandae doloribus accusamus odio nemo dicta reprehenderit iusto hic explicabo. Quas sed quam enim temporibus aut earum atque nulla vitae dolores?",
    rating: 5,
  },
  {
    name: "Jane Maxwell",
    profile: "JM",
    title: "UI/UX designer",
    review:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis recusandae doloribus accusamus odio nemo dicta reprehenderit iusto hic explicabo. Quas sed quam enim temporibus aut earum atque nulla vitae dolores?",
    rating: 4,
  },
  {
    name: "Jack Black",
    profile: "JB",
    title: "CTO/Engineer",
    review:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis recusandae doloribus accusamus odio nemo dicta reprehenderit iusto hic explicabo. Quas sed quam enim temporibus aut earum atque nulla vitae dolores?",
    rating: 5,
  },
];

const Reviews = () => {
  const isNotPhone = useMediaQuery("(min-width:1000px)");
  const [index, setIndex] = useState(0);
  const maxIndices = reviews.length;

  const handleNext = () => {
    if (index < maxIndices - 1) {
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
    <Box width={"100%"} height={"50vh"}>
      <Box position={"relative"} width={"100%"} height={"100%"}>
        <img
          src={background}
          alt=""
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
          }}
        />
        <Box
          position={"absolute"}
          width={"100%"}
          height={"100%"}
          bgcolor={"rgba( 0 0 0 / 0.5)"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Box
            width={isNotPhone ? "70%" : "90%"}
            height={"100%"}
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"space-around"}
            alignItems={"center"}
          >
            <Typography variant="h4" fontWeight={"light"} color={"white"}>
              Reviews
            </Typography>
            <Box
              width={"400px"}
              height={"70%"}
              display={"flex"}
              alignItems={"center"}
            >
              <IconButton
                onClick={handleBack}
                disabled={index === 0}
                sx={{ ":disabled": { "& > svg": { color: "#898989" } } }}
              >
                <ChevronLeft sx={{ color: "white" }} />
              </IconButton>
              <AutoPlaySwipeableViews
                interval={5000}
                index={index}
                onChangeIndex={changeIndex}
              >
                {reviews.map((review, index) => (
                  <Box
                    key={index}
                    width={"100%"}
                    height={"100%"}
                    display={"flex"}
                    flexDirection={"column"}
                    alignItems={"center"}
                  >
                    <Avatar>{review.profile}</Avatar>
                    <Box
                      m={"10px 0px"}
                      display={"flex"}
                      flexDirection={"column"}
                      alignItems={"center"}
                    >
                      <Typography color={"white"}>{review.name}</Typography>
                      <Typography color={"white"} fontWeight={"Bold"}>
                        {review.title}
                      </Typography>
                    </Box>
                    <Typography
                      color={"white"}
                      textAlign={"center"}
                      fontWeight={"light"}
                    >
                      {review.review}
                    </Typography>
                  </Box>
                ))}
              </AutoPlaySwipeableViews>
              <IconButton
                onClick={handleNext}
                disabled={index > maxIndices - 2}
                sx={{ ":disabled": { "& > svg": { color: "#898989" } } }}
              >
                <ChevronRight sx={{ color: "white" }} />
              </IconButton>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Reviews;
