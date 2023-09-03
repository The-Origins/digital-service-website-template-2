import React from "react";
import { Box, Typography } from "@mui/material";

const FeaturedCard = (props) => {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      height={"100%"}
      width={"300px"}
    >
      <img
        src={props.image}
        alt=""
        style={{
          width: "250px",
          height: "250px",
          borderRadius: "50%",
        }}
      />
      <Typography fontSize={"30px"} fontWeight={"light"} margin={"20px 0px"}>
        {props.title}
      </Typography>
      <Typography fontWeight={"light"} textAlign={"center"}>
        {props.description}
      </Typography>
    </Box>
  );
};

export default FeaturedCard;
