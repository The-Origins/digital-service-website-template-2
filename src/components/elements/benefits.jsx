import React from "react";
import { Card, CardContent, Typography} from "@mui/material";
import Custom from "../icon";

const BenefitsElement = (props) => {
  return (
    <Card sx={{ boxShadow: "0px 0px 0px 0px", }} key={"1"}>
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Custom image={props.image} alt="" />
        <Typography variant="h4" textAlign={"center"} m={"10px 0px"}>
          {props.title}
        </Typography>
        <Typography textAlign={"center"} color={"#898989"}>
            {props.description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default BenefitsElement;
