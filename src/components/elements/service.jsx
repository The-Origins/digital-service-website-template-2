import React from "react";
import {Box, Typography, Button, styled } from "@mui/material";
import { Info, ArrowForward } from "@mui/icons-material";

const DetailsButton = styled(Button)({
  borderRadius:"25px"
})

const ServiceElement = (props) => {

  return (
    <Box
      width={"300px"}
      height={"300px"}
      position={"relative"}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"space-evenly"}
      alignItems={"center"}
      boxShadow={"0px 0px 10px 0px #797979"}
      overflow={"hidden"}
      borderRadius={"50%"}  
      sx={{
        ":hover .info": {
          top: "0",
          opacity:1
        }
      }}
    >
      <img src={props.image} alt="" style={{ width: "40%" }} />
      <Typography variant="h5">{props.title}</Typography>
      <Box
        className={"info"}
        position={"absolute"}
        width={"100%"}
        height={"100%"}
        bgcolor={"#797979"}
        top={"100%"}
        sx={{ transition: "0.5s", opacity:0 }}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"space-evenly"}
      >
        <Info sx={{fontSize:"55px", color:"white"}} />
        <Box width={"70%"}>
        <Typography textAlign={"center"} color={"white"}>{props.description}</Typography>
        </Box>
        <DetailsButton endIcon={<ArrowForward />} variant="contained" disableElevation>more details</DetailsButton>
      </Box>
    </Box>
  );
};

export default ServiceElement;
