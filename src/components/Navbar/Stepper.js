import React, { useState } from 'react';
import { Stepper } from '@mantine/core';

function Stepper() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div style={{ padding: '20px', background: '#f4f4f4', width: '100%' }}>
      <Stepper active={activeStep} onStepClick={setActiveStep} orientation="vertical">
        <Stepper.Step label="Upload & Setup" description="Define SKU ID and select folder">
          {/* Add form fields or other components here */}
        </Stepper.Step>
        <Stepper.Step label="Segmentation" description="Choose segmentation parameters">
          {/* Add form fields or other components here */}
        </Stepper.Step>
        <Stepper.Step label="Model Selection" description="Select a model for processing">
          {/* Add form fields or other components here */}
        </Stepper.Step>
      </Stepper>
    </div>
  );
}

export default Stepper;
