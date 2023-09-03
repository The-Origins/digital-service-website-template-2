import React from "react";
import { useTheme, useMediaQuery, Box, Typography } from "@mui/material";
import ServiceElement from "../elements/service";
import Wrench from "../../assets/images/wrench.png";

const Services = () => {
  const isNotPhone = useMediaQuery("(min-width:100px)");
  const theme = useTheme();
  return (
    <Box
      width={"100%"}
      minHeight={"100vh"}
      display={"flex"}
      justifyContent={"center"}
    >
      <Box
        width={isNotPhone ? "70%" : "90%"}
        height={"100%"}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"space-between"}
      >
        <Box
          height={"300px"}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Typography margin={"20px 0px"} variant="h3" fontWeight={"Bold"}>
            Services
          </Typography>
          <Box
            border={"2px solid #797979"}
            width={"80%"}
            borderRadius={"50%"}
          ></Box>
          <Typography textAlign={"center"} m={"20px 0px"} color={"#898989"}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam rem
            animi est sequi quam nihil pariatur temporibus dolore asperiores,
            <br /> Blanditiis eum doloremque laudantium iure quas praesentium.
          </Typography>
        </Box>
        <Box
          display={"grid"}
          gridTemplateColumns={"repeat(3, minmax(0, 1fr))"}
          gap={"50px"}
          sx={{
            [theme.breakpoints.down("lg")]:{gridTemplateColumns:"repeat(2, minmax(0, 1fr))"},
            [theme.breakpoints.down("md")]: {gridTemplateColumns:"repeat(1, minmax(0, 1fr))"}
          }}
        >
          <ServiceElement
            image={Wrench}
            title={"Service 1"}
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam rem animi est sequi."
          />
          <ServiceElement
            image={Wrench}
            title={"Service 2"}
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam rem animi est sequi."
          />
          <ServiceElement
            image={Wrench}
            title={"Service 3"}
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam rem animi est sequi."
          />
          <ServiceElement
            image={Wrench}
            title={"Service 4"}
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam rem animi est sequi."
          />
          <ServiceElement
            image={Wrench}
            title={"Service 5"}
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam rem animi est sequi."
          />
          <ServiceElement
            image={Wrench}
            title={"Service 6"}
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam rem animi est sequi."
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Services;
