import React, { useState } from 'react';

// STEPS FOR THE VERTICAL STEPPER
const steps = [
  { label: 'Collect Tokens', taskName: 'relayer-funder-unwrapper' },
  { label: 'Swap to USDC', taskName: 'withdrawer-usdc' },
  { label: 'Bridge to Mainnet', taskName: 'fantom-depositor' },
  { label: 'Swap USDC to ETH', taskName: 'withdrawer-usdc' },
];

function VerticalStepper({ onStepSelect }) {
  // TRACK THE ACTIVE STEP
  const [activeStep, setActiveStep] = useState(0);

  // FUNCTION TO MANAGE CLICK EVENTS ON STEPS
  const handleStepClick = (index) => {
    setActiveStep(index);
    onStepSelect(steps[index].taskName);
  };

  return (
    // CONTAINER FOR THE VERTICAL STEPPER
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginTop: '30px' }}>
      {steps.map((step, index) => (
        // EACH STEP IN THE STEPPER
        <div key={index} onClick={() => handleStepClick(index)} // HANDLE CLICK EVENT ON STEP
          style={{ display: 'flex', alignItems: 'center', marginBottom: '20px', cursor: 'pointer' }}
        >
          <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
            <div
              style={{ width: '24px', height: '24px',
                borderRadius: '50%', backgroundColor: index === activeStep ? '#6F5CE6' : '#282c34', border: `2px solid ${index === activeStep ? '#6F5CE6' : '#D4D4D4'}`, color: index === activeStep ? 'white' : '#D4D4D4',
              }}
            ></div>
            {index < steps.length - 1 && (
              // CONNECTING LINE BETWEEN STEPS
              <div
                style={{
                  position: 'absolute', 
                  top: '100%',
                  left: '50%',
                  width: '2px',
                  height: '40px',
                  backgroundColor: '#D4D4D4',
                  zIndex: 0,
                }}
              ></div>
            )}
          </div>
          <div style={{ marginLeft: '10px', color: index === activeStep ? '#6F5CE6' : '#D4D4D4', fontFamily: 'Montserrat', fontWeight: '600' }}>
            {step.label}
          </div>
        </div>
      ))}
    </div>
  );
}

export default VerticalStepper;
