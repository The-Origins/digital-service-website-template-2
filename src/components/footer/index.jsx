import React from "react";
import {
  useMediaQuery,
  Box,
  Typography,
  TextField,
  styled,
  Avatar,
} from "@mui/material";

import {
  WhatsApp,
  EmailOutlined,
  PublicOutlined,
  PlaceOutlined,
  Copyright,
} from "@mui/icons-material";

const NewsletterInput = styled(TextField)({
  backgroundColor: "white",
  textAlign: "center",
  width: "100%",
  borderRadius: "5px",
});

const Footer = () => {
  const isNotPhone = useMediaQuery("(min-width:1000px)");
  return (
    <Box width={"100%"} height={isNotPhone ? "50vh" : "100vh"}>
      <Box
        width={"100%"}
        height={isNotPhone ? "80%" : "100%"}
        bgcolor={"primary.main"}
        display={"flex"}
        justifyContent={"center"}
      >
        <Box
          width={isNotPhone ? "70%" : "90%"}
          height={"100%"}
          display={"flex"}
          justifyContent={"space-between"}
          flexDirection={isNotPhone ? "row" : "column"}
        >
          <Box
            width={isNotPhone ? "30%" : "100%"}
            height={"100%"}
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"space-evenly"}
          >
            <Typography variant="h4" color={"white"}>
              About us
            </Typography>
            <Typography color={"white"} fontWeight={"light"}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem magni, temporibus error repellendus optio culpa
              deserunt assumenda totam facilis pariatur cumque.
            </Typography>
            <NewsletterInput
              variant="filled"
              type="text"
              label="email"
              placeholder="subscribe to our newsletter"
            />
          </Box>
          <Box
            width={isNotPhone ? "30%" : "100%"}
            height={"100%"}
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"space-evenly"}
            color={"#F5F5F5"}
          >
            <Typography fontWeight={"bold"} color={"white"}>
              Latest tweets
            </Typography>
            <Box
              height={"30%"}
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"space-between"}
            >
              <Avatar sx={{ width: "17px", height: "17px", fontSize: "10px" }}>
                JD
              </Avatar>
              <Typography fontWeight={"light"} fontSize={"13px"}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro,
                ipsum excepturi vitae repellat cumque qui.
              </Typography>
              <Typography fontSize={"15px"}>Posted 2 days ago</Typography>
            </Box>
            <Box
              height={"30%"}
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"space-between"}
            >
              <Avatar sx={{ width: "17px", height: "17px", fontSize: "10px" }}>
                JM
              </Avatar>
              <Typography fontWeight={"light"} fontSize={"13px"}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro,
                ipsum excepturi vitae repellat cumque qui.
              </Typography>
              <Typography fontSize={"15px"}>Posted 26 days ago</Typography>
            </Box>
          </Box>
          <Box
            width={isNotPhone ? "30%" : "100%"}
            height={"100%"}
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"space-evenly"}
            color={"#F5F5F5"}
          >
            <Typography fontWeight={"bold"} color={"white"}>
              Contact
            </Typography>
            <Box display={"flex"}>
              <WhatsApp />
              <Typography marginLeft={"10px"} fontWeight={"light"}>
                +23 000 0070 00
              </Typography>
            </Box>
            <Box display={"flex"}>
              <EmailOutlined />
              <Typography marginLeft={"10px"} fontWeight={"light"}>
                someone@company.com
              </Typography>
            </Box>
            <Box display={"flex"}>
              <PublicOutlined />
              <Typography marginLeft={"10px"} fontWeight={"light"}>
                www.website.com
              </Typography>
            </Box>
            <Box display={"flex"}>
              <PlaceOutlined />
              <Typography marginLeft={"10px"} fontWeight={"light"}>
                City, Country
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        width={"100%"}
        height={isNotPhone ? "20%" : "10%"}
        display={"flex"}
        justifyContent={"center"}
      >
        <Box
          width={isNotPhone ? "70%" : "90%"}
          height={"100%"}
          display={"flex"}
          justifyContent={isNotPhone ? "space-between" : "center"}
          alignItems={"center"}
        >
          {isNotPhone && (
            <Box
              height={"100%"}
              width={"60%"}
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Typography>Home</Typography>
              <Typography>Portfolio</Typography>
              <Typography>Blog</Typography>
              <Typography>Pages</Typography>
              <Typography>Contact</Typography>
            </Box>
          )}
          <Box
            height={"100%"}
            width={isNotPhone ? "20%" : "60%"}
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Typography fontSize={"13px"}>Copyright</Typography>
            <Copyright fontSize={"13px"} />
            <Typography fontSize={"13px"}>2023</Typography>
            <Typography fontSize={"13px"}>Wega studios</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
