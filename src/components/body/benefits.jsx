import React from "react";
import { useMediaQuery, Box, Typography } from "@mui/material";
import BenefitsElement from "../elements/benefits";
import Cup from "../../assets/images/cup.png";
import Devices from "../../assets/images/devices.png";

const Benefits = () => {
  const isNotPhone = useMediaQuery("(min-width:1000px)");
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      bgcolor={"white"}
      marginTop={isNotPhone ? undefined : "25px"}
      sx={{borderRadius:isNotPhone ? "0 0 25% 25%" : '0 0 50px 50px'}}
    >
      <Box width={isNotPhone ? "70%" : "90%"}>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          flexDirection={isNotPhone ? "row" : "column"}
        >
          <BenefitsElement
            image={Cup}
            title="Creative design"
            description={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure eius error accusantium."
            }
          />
          <BenefitsElement
            image={Cup}
            title="Awesome feature"
            description={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure eius error accusantium."
            }
          />
          <BenefitsElement
            image={Cup}
            title="Customizable"
            description={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure eius error accusantium."
            }
          />
        </Box>
        <Box
          margin={"40px"}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Typography variant={isNotPhone ? "h3" : "h5"}>
            Fully responsive design
          </Typography>
          <img src={Devices} alt="" style={{ width: "80%" }} />
        </Box>
      </Box>
    </Box>
  );
};

export default Benefits;
