import { styled } from '@mui/system'
import {Link} from '@mui/material'


export const HeaderLink = styled(Link)({
  textDecoration:"none",
  userSelect:"none",
  color:"#FFFF",
  transition:"0.3s",
  ":hover":{
    borderBottom: "1px solid #FFFF",
    padding:"10px 0px",
    cursor:"pointer"
  },
  ":active":{
    color:"black"
  }
})
