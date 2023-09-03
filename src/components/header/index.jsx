import React, { useState } from "react";
import {
  useMediaQuery,
  Box,
  Typography,
  IconButton,
  MenuItem,
  Menu,
} from "@mui/material";
import { Search, MenuRounded, Close } from "@mui/icons-material";
import { HeaderLink } from "../link";

const Header = () => {
  const isNotPhone = useMediaQuery("(min-width:1000px)");
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      width={"100%"}
      height={"80px"}
      bgcolor={"rgba(87 87 87 / 0.7)"}
    >
      <Box
        width={isNotPhone ? "70%" : "90%"}
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Typography variant="h2" color={"#FFFF"}>
          Sleek
        </Typography>

        {isNotPhone ? (
          <Box
            width={"50%"}
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <HeaderLink>Home</HeaderLink>
            <HeaderLink>Portfolio</HeaderLink>
            <HeaderLink>Blog</HeaderLink>
            <HeaderLink>Pages</HeaderLink>
            <HeaderLink>Contact</HeaderLink>
            <IconButton>
              <Search sx={{ color: "#FFFF" }} />
            </IconButton>
          </Box>
        ) : (
          <Box display={"flex"}>
            <IconButton>
              <Search sx={{ color: "#FFFF" }} />
            </IconButton>
            <IconButton
              id="menu-button"
              aria-controls={open ? "menu" : undefined}
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              {open ? (
                <Close sx={{ color: "white" }} />
              ) : (
                <MenuRounded sx={{ color: "white" }} />
              )}
            </IconButton>
            <Menu
              id="menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{ "aria-labelledby": "menu-button" }}
            >
              <MenuItem>Protfolio</MenuItem>
              <MenuItem>Blog</MenuItem>
              <MenuItem>Pages</MenuItem>
              <MenuItem>Contact</MenuItem>
            </Menu>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Header;
