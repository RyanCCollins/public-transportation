import React, { Component, PropTypes } from 'react';
import styles from './HowItWorks.module.scss';
import cssModules from 'react-css-modules';
import {
  Step,
  Stepper,
  StepLabel
} from 'material-ui/Stepper';
import {
  RaisedButton,
  FlatButton
} from 'material-ui';

const StepContent = ({
  step
}) => (
  <p>
    {(() => {
      switch (step) {
        case 1:
          return "Go to the home page and select a route from the list"
        case 2:
          return "Once the route loads, select an arrival and a departure train station."
        case 3:
          return "Go catch the train!"
        default:
          break;
      }
    })()}
  </p>
);

StepContent.propTypes = {
  step: PropTypes.number.isRequired
};

const HowItWorks = ({
  stepIndex,
  onForward,
  onBackward
}) => (
  <div style={styles.root}>
    <Stepper activeStep={stepIndex}>
      <Step>
        <StepLabel>Select a route</StepLabel>
      </Step>
      <Step>
        <StepLabel>Select an arrival and departure train station</StepLabel>
      </Step>
      <Step>
        <StepLabel>Load a list of train schedules</StepLabel>
      </Step>
    </Stepper>
    <div style={styles.content}>
      <StepContent step={stepIndex} />
      {stepIndex !== null && (
        <div style={styles.actions}>
          <FlatButton
            label="Back"
            disabled={stepIndex === 0}
            onTouchTap={onBackward}
            style={styles.backButton}
          />
          <RaisedButton
            label="Next"
            primary
            onTouchTap={onForward}
          />
        </div>
      )}
    </div>
  </div>
);

HowItWorks.propTypes = {
  stepIndex: PropTypes.number.isRequired,
  visited: PropTypes.array,
  onForward: PropTypes.func.isRequired,
  onBackward: PropTypes.func.isRequired
};

export default HowItWorks;
