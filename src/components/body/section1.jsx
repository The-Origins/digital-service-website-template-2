import React, { useState } from "react";
import {
  useMediaQuery,
  Box,
  Typography,
  Button,
  IconButton,
  MobileStepper,
} from "@mui/material";
import Header from "../header";
import background from "../../assets/images/background.jpg";
import background2 from "../../assets/images/background2.jpg";
import background3 from "../../assets/images/background3.jpg";
import background916 from "../../assets/images/background-916.jpg";
import background2916 from "../../assets/images/background2916.jpg";
import background3916 from "../../assets/images/background3916.jpg";
import { LocalMall, ChevronLeft, ChevronRight } from "@mui/icons-material";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

let images = [
  {
    imgPath: background,
  },
  {
    imgPath: background2,
  },
  {
    imgPath: background3,
  },
];

const Section1 = () => {
  const isNotPhone = useMediaQuery("(min-width:1000px)");
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = images.length;

  if (!isNotPhone) {
    images = [
      {
        imgPath: background916,
      },
      {
        imgPath: background2916,
      },
      {
        imgPath: background3916,
      },
    ];
  } else {
    images = [
      {
        imgPath: background,
      },
      {
        imgPath: background2,
      },
      {
        imgPath: background3,
      },
    ];
  }
  const handleNext = () => {
    if (activeStep < maxSteps - 1) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleBack = () => {
    if (activeStep !== 0) {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    }
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };
  return (
    <Box position="relative" height={"150vh"}>
      <AutoPlaySwipeableViews
        axis={"x"}
        index={activeStep}
        style={{ top: 0, left: 0, position: "absolute" }}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                key={index}
                component="img"
                sx={{
                  height: "128vh",
                  width: "100%",
                  overflow: "hidden",
                }}
                src={step.imgPath}
                alt={""}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <Box
        position={"absolute"}
        top={0}
        left={0}
        width={"100%"}
        height={"128vh"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        bgcolor={"rgba(0 0 0 / 0.4)"}
      >
        <Box width={"100%"} height={"100%"}>
          <Header />
          <Box
            height={"71%"}
            width={"100%"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Box
              height={"100%"}
              width={"90%"}
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Box
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                {isNotPhone && (
                  <IconButton
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    sx={{
                      fontSize: "40px",
                      bgcolor: "rgba(87 87 87 / 0.4)",
                      ":hover": {
                        transform: "scale(1.05)",
                        bgcolor: "rgba(87 87 87 / 0.7)",
                      },
                    }}
                  >
                    <ChevronLeft fontSize="50px" />
                  </IconButton>
                )}
              </Box>
              <Box
                display={"flex"}
                flexDirection={"column"}
                width={"50%"}
                height={"70%"}
                justifyContent={"space-around"}
                alignItems={"center"}
                color={"#FFFF"}
              >
                <Typography variant="h1">Sleek</Typography>
                <Typography textAlign={"center"}>
                  Simple yet powerful content content content <br /> content
                  content content
                </Typography>
                <Button
                  variant="contained"
                  disableElevation
                  startIcon={<LocalMall />}
                  sx={{
                    bgcolor: "#FFFF",
                    color: "black",
                    ":hover": { color: "white" },
                  }}
                >
                  purchase
                </Button>
                <MobileStepper
                  variant="dots"
                  steps={maxSteps}
                  activeStep={activeStep}
                  position="static"
                  sx={{ bgcolor: "transparent" }}
                />
              </Box>
              <Box
                display={"flex"}
                height={"100%"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                {isNotPhone && (
                  <IconButton
                    disabled={activeStep === maxSteps - 1}
                    onClick={handleNext}
                    sx={{
                      fontSize: "40px",
                      bgcolor: "rgba(87 87 87 / 0.4)",
                      ":hover": {
                        transform: "scale(1.05)",
                        bgcolor: "rgba(87 87 87 / 0.7)",
                      },
                    }}
                  >
                    <ChevronRight fontSize="40px" />
                  </IconButton>
                )}
              </Box>
            </Box>
          </Box>
          <Box
            width={"100%"}
            
            display={"flex"}
            justifyContent={"center"}
            bgcolor={"#FFFF"}
            borderRadius={isNotPhone ? "50% 50%  0 0" : "50px 50px 0 0"}
          >
            <Box
              width={isNotPhone ? "70%" : "90%"}
              display={"flex"}
              flexDirection={"column"}
            >
              <Box
                margin={"50px 0px"}
                display={"flex"}
                flexDirection={"column"}
                alignItems={"center"}
                justifyContent={"space-evenly"}
                width={"100%"}
                height={"300px"}
              >
                <Typography variant={isNotPhone ? "h2" : "h3"}>Core service</Typography>
                <Box
                  border={"2px solid #797979"}
                  width={"50%"}
                  borderRadius={"50%"}
                  margin={"20px 0px"}
                ></Box>
                <Typography textAlign={"center"} color={"primary.light"}>
                  Content content content content content content content
                  content content content content
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Section1;
