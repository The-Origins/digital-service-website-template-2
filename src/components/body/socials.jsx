import React from "react";
import { useMediaQuery, Box, Typography } from "@mui/material";
import { Facebook, Instagram, Twitter, LinkedIn } from "@mui/icons-material";

const Socials = () => {
  const isNotPhone = useMediaQuery("(min-width:1000px)");
  return (
    <Box
      width={"100%"}
      height={"20vh"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      bgcolor={"#797979"}
    >
      <Box
        width={isNotPhone ? "70%" : "90%"}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Typography
          variant="h5"
          fontWeight={"bold"}
          margin={"20px 0px"}
          color={"white"}
        >
          Follow us on our socials
        </Typography>
        <Box
          display={"flex"}
          width={"100%"}
          height={"90%"}
          justifyContent={"space-evenly"}
          alignItems={"center"}
        >
          <Box
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            sx={{
              ":hover > svg": {
                transform: "rotate(360deg)",
              },
              ":hover": {
                cursor: "pointer",
              },
              ":hover > p": {
                letterSpacing: "1px",
              },
              userSelect: "none",
            }}
          >
            <Facebook sx={{ color: "white", transition: "0.3s" }} />
            <Typography
              margin={"10px 0px"}
              color={"white"}
              sx={{ transition: "0.3s" }}
            >
              Facebook
            </Typography>
          </Box>
          <Box
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            sx={{
              ":hover > svg": {
                transform: "rotate(360deg)",
              },
              ":hover": {
                cursor: "pointer",
              },
              ":hover > p": {
                letterSpacing: "1px",
              },
              userSelect: "none",
            }}
          >
            <Instagram sx={{ color: "white", transition: "0.3s" }} />
            <Typography
              margin={"10px 0px"}
              color={"white"}
              sx={{ transition: "0.3s" }}
            >
              Instagram
            </Typography>
          </Box>
          <Box
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            sx={{
              ":hover > svg": {
                transform: "rotate(360deg)",
              },
              ":hover": {
                cursor: "pointer",
              },
              ":hover > p": {
                letterSpacing: "1px",
              },
              userSelect: "none",
            }}
          >
            <Twitter sx={{ color: "white", transition: "0.3s" }} />
            <Typography
              margin={"10px 0px"}
              color={"white"}
              sx={{ transition: "0.3s" }}
            >
              Twitter
            </Typography>
          </Box>
          <Box
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            sx={{
              ":hover > svg": {
                transform: "rotate(360deg)",
              },
              ":hover": {
                cursor: "pointer",
              },
              ":hover > p": {
                letterSpacing: "1px",
              },
              userSelect: "none",
            }}
          >
            <LinkedIn sx={{ color: "white", transition: "0.3s" }} />
            <Typography
              margin={"10px 0px"}
              color={"white"}
              sx={{ transition: "0.3s" }}
            >
              LinkedIn
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Socials;
