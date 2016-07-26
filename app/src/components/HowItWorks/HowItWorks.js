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
import * as constants from './constants';

const StepContent = ({
  step
}) => (
  <p>
    {(() => {
      const {
        zero,
        one,
        two
      } = constants;
      switch (step) {
        case 0:
          return zero;
        case 1:
          return one;
        case 2:
          return two;
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
