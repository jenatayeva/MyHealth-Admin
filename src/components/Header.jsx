import { useTheme } from '@emotion/react'
import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const Header = ({title, subtitle}) => {
  return (
    <Box mb='20px'>
      <Typography variant="h4" fontWeight='bold' color='grey[100]'>{title}</Typography>
      <Typography variant="h6" color='grey[500]'>{subtitle}</Typography>
    </Box>
  )
}

export default Header