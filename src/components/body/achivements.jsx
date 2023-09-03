import React from 'react'
import { useMediaQuery, Box, Typography } from '@mui/material'

const Achivements = () => {
    const isNotPhone = useMediaQuery("(min-width:1000px)")
  return (
    <Box width={"100%"} minHeight={"50vh"} display={"flex"} justifyContent={"center"} alignItems={"center"}>
        <Box height={"100%"} width={isNotPhone ? "70%" : "90%"} display={"flex"} justifyContent={"space-evenly"}>
            <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
            <Typography margin={"10px 0px"} variant={isNotPhone ? 'h3' : "h5"}>10,000+</Typography>
            <Typography color={"#898989"}>Achivement 1</Typography>
            </Box>
            <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
            <Typography margin={"10px 0px"} variant={isNotPhone ? 'h3' : "h5"}>2M+</Typography>
            <Typography color={"#898989"}>Achivement 2</Typography>
            </Box>
            <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
            <Typography margin={"10px 0px"} variant={isNotPhone ? 'h3' : "h5"}>5K+</Typography>
            <Typography color={"#898989"}>Achivement 3</Typography>
            </Box>
        </Box>
    </Box>
  )
}

export default Achivements