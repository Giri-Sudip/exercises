import { Typography, Button } from '@mui/material'
import React from 'react'
import { Box } from '@mui/system'
import BannerImage from '../assets/images/banner.png'


const HeroBanner = () => {
  return (
    <Box sx={{ mt: { lg: '212px', xs: '70px' }, ml: { sm: '50px' } }} position="relaive" p="20px">
      <Typography color="#FF2625" fontWeight="600" fontSize="26px">
        Fitness Club
      </Typography>
      <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '40px' } }} mb="23px" mt="30px">
        Sweat,Smile <br /> and Repeat.
      </Typography>
      <Typography fontSize="22px" lineHeight="35px" mb="20px">
        Check out he most effective exercises.
      </Typography>
      <Button variant='contained' color="error" href='#exercises' sx={{ backgrondColor: '#ff2625' }} mt={3}>
        Explore Exercises.
      </Button>
      <Typography fontWeight={600} color='##ff2625' sx={{ opacity: 0.1, display: { lg: 'block', xs: 'none' } }} fontSize="200px">
        Exercises
      </Typography>
      <img src={BannerImage} alt="banner" className="hero-banner-img" justifycontent='relative' />
    </Box>
  )
}

export default HeroBanner