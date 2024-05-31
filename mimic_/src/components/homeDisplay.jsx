import React, { useState, useEffect } from 'react';
import { Box, Typography, CircularProgress } from '@mui/material';
import { useQuery, gql } from '@apollo/client';
import CustomSelect from './select';
import LogoAndName from './logoAndName';
import VerticalStepper from './verticalStepper';
import DetailsBox from './detailsWorkflow';

const GET_WORKFLOWS = gql`
  {
    environment(id: "0xd28bd4e036df02abce84bc34ede2a63abcefa0567ff2d923f01c24633262c7f8") {
      tasks {
        name
        taskConfig {
          nextBalanceConnector
          previousBalanceConnector
        }
      }
    }
  }
`;

function DisplayHome() {
  const [selectedWorkflow, setSelectedWorkflow] = useState(''); // STATE FOR THE SELECTED WORKFLOW
  const [showWorkflowComponent, setShowWorkflowComponent] = useState(false); // STATE TO SHOW/HIDE COMPONENT
  const [workflowData, setWorkflowData] = useState(null); // STATE TO SAVE WORKFLOW DATA
  const [selectedTask, setSelectedTask] = useState(null); // STATE FOT SELECTED TASK


  const { data, loading, error } = useQuery(GET_WORKFLOWS, {
    skip: selectedWorkflow !== 'convertAssets',
  });


  // UPDATE STATUS OF WORKFLOW DATA
  useEffect(() => {
    if (data) {
      setWorkflowData(data.environment.tasks);
    }
  }, [data]);

  // SET THE WORKFLOW 
  const handleWorkflowSelect = (workflow) => {
    setSelectedWorkflow(workflow);
    if (workflow === 'convertAssets') {
      setShowWorkflowComponent(true); // SHOW WORKFLOW COMPONENT
      if (workflowData && workflowData.length > 0) {
        handleStepSelect(workflowData[0].name); // SELECT THE [0] TASK 
      }
    }
  };



  // CHANGE THE WORKFLOW VIEW TO FALSE
  const changeWorkflow = () => {
    setShowWorkflowComponent(false);
  }



 
  useEffect(() => {
    if (selectedWorkflow === 'convertAssets' && workflowData && workflowData.length > 0) {
      handleStepSelect(workflowData[0].name);
    }
  }, [selectedWorkflow, workflowData]);


 
   // HANDLE A SPECIFIC STEP ON THE WORKFLOW

  const handleStepSelect = (taskName) => {
    if (workflowData) {
      const task = workflowData.find(task => task.name === taskName);
      setSelectedTask(task);
    }
  };

  return (
    <Box
      sx={{ textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', flexDirection: 'column', backgroundColor: '#282c34', color: 'white' }}
    >
      <LogoAndName /> {/* LOGO */}

      {/* SHOW DETAILS BOX OR SELECT BOX */}
      {showWorkflowComponent ? ( 
        <Box
          sx={{ width: '50%', height: 'auto', marginTop: '20px', display: 'flex', justifyContent: 'center', gap: '30px' }}
        >
          <Box
            sx={{ width: 'auto', height: '100%', textAlign: 'left' }}
          >
            <Typography component="p" sx={{ fontFamily: 'Montserrat', fontSize: '20px', fontWeight: '600' }}>
              CONVERT ALL ASSETS
            </Typography>

            <Typography component="p" onClick={changeWorkflow} sx={{ fontFamily: 'Montserrat', fontSize: '13px', fontWeight: '500', color: '#6F5CE6', cursor: 'pointer' }}>
              Change
            </Typography>

            <VerticalStepper onStepSelect={handleStepSelect} />
          </Box>

          <Box
            sx={{ width: '50%', height: '100%', backgroundColor: '#313441', borderRadius: '8px', position: 'relative' }}
          >
            {loading ? (
              <Box
                sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
              >
                <CircularProgress color="inherit" />
              </Box>
            ) : error ? (
              <Typography>Error fetching data</Typography>
            ) : (
              <DetailsBox task={selectedTask} />
            )}
          </Box>
        </Box>
      ) : (
        <Typography variant="body1" component="p" sx={{ margin: '20px 0', fontFamily: 'Montserrat', fontSize: '20px', fontWeight: '600' }}>
          SELECT A WORKFLOW TO START
        </Typography>
      )}
      {!showWorkflowComponent && (
        <CustomSelect onSelect={handleWorkflowSelect} />
      )}
    </Box>
  );
}

export default DisplayHome;