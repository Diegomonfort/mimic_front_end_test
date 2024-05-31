import React from 'react';
import { Box, Typography, Button } from '@mui/material';

function DetailsBox({ task }) {
  if (!task) {
    task = {
      name: 'Collect Tokens',
      taskConfig: {
        nextBalanceConnector: 'Next Balance Connector information for Collect Tokens',
        previousBalanceConnector: 'Previous Balance Connector information for Collect Tokens',
      },
    };
  }

  return (
    <Box sx={{ padding: '20px', textAlign: 'left' }}>
      <Typography sx={{ fontWeight: '600', color: '#6F5CE6', fontSize: '15px' }}>Name</Typography>
      <Typography sx={{ color: '#D4D4D4', marginBottom: '15px', fontSize: '14px' }}>{task.name}</Typography>

      <Typography sx={{ fontWeight: '600', color: '#6F5CE6', marginBottom: '10px', fontSize: '15px' }}>Next Balance Connector</Typography>
      <Typography sx={{ color: '#D4D4D4', marginBottom: '15px', wordBreak: 'break-all', fontSize: '14px' }}>{task.taskConfig.nextBalanceConnector}</Typography>

      <Typography sx={{ fontWeight: '600', color: '#6F5CE6', marginBottom: '10px', fontSize: '15px' }}>Previous Balance Connector</Typography>
      <Typography sx={{ color: '#D4D4D4', fontSize: '14px', wordBreak: 'break-all' }}>{task.taskConfig.previousBalanceConnector}</Typography>

    </Box>
  );
}

export default DetailsBox;