import React from 'react'
import { Box } from '@mui/material'
import Section1 from './section1'
import Benefits from './benefits'
import Featured from './featured'
import Reviews from './reviews'
import Services from './services'
import Achivements from './achivements'
import Socials from './socials'

const Body = () => {
  return (
    <Box>
        < Section1 />
        <Benefits />
        <Featured />
        <Reviews />
        <Services />
        <Achivements />
        <Socials />
    </Box>
  )
}

export default Body