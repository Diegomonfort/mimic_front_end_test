import React from 'react';
import { Box, Typography } from '@mui/material';
import logo from './logo_mimic_color.png';

function LogoAndName() {
  return (
    <Box variant="outlined" sx={{ 
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    }}>
      <img src={logo} alt="logo" style={{ width: '150px', pointerEvents: 'none' }} />
      <Typography sx={{ margin: '10px 0', fontFamily: 'Montserrat' }}>
        Diego <span style={{ fontWeight: 'bold', color: '#6F5CE6' }}>Monfort</span>
      </Typography>
    </Box>
  );
}

export default LogoAndName;