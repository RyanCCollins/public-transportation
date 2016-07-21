import React, { Component, PropTypes } from 'react';
import styles from './HowItWorks.module.scss';
import cssModules from 'react-css-modules';
import { Link } from 'react-router';
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
        case 0:
          return "Go to the home page and select a route from the list"
        case 1:
          return "Once the route loads, select an arrival and a departure train station."
        case 2:
          return "Pick out the corresponding time that best matches your schedule and go catch the train.";
        case 3:
          return (
            <Link to="/">Back to Home</Link>
          );
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
  onForwards,
  onBackwards
}) => (
  <div className={styles.root}>
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
    <div className={styles.content}>
      <StepContent step={stepIndex} />
      {stepIndex !== null && (
        <div className={styles.actions}>
          <FlatButton
            label="Back"
            disabled={stepIndex === 0}
            onTouchTap={onBackwards}
            className={styles.backButton}
          />
          <RaisedButton
            label="Next"
            disabled={stepIndex === 2}
            primary
            onTouchTap={onForwards}
          />
        </div>
      )}
    </div>
  </div>
);

HowItWorks.propTypes = {
  stepIndex: PropTypes.number.isRequired,
  onForwards: PropTypes.func.isRequired,
  onBackwards: PropTypes.func.isRequired
};

export default cssModules(HowItWorks, styles);
