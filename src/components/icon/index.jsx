import React from "react";
import { Box } from "@mui/system";

const Custom = (props) => {
  return (
    <Box
      margin={"10px"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      height={"80px"}
      width={"80px"}
      borderRadius={"50%"}
      sx={{ overflow: "hidden" }}
    >
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        height={"90%"}
        width={"90%"}
        sx={{ boxShadow: "0px 2px 10px 0px #797979", borderRadius: "50%" }}
      >
        <img
          width={"60%"}
          src={props.image}
          alt={props.alt}
          style={{ marginLeft: "5px" }}
        />
      </Box>
    </Box>
  );
};

export default Custom;
