import React, { PropTypes } from 'react';
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
import { sections } from './constants';
import StepItem from './StepItem';

const HowItWorks = ({
  stepIndex,
  onForwards,
  onBackwards
}) => (
  <div className={styles.root}>
    <Stepper activeStep={stepIndex}>
      <Step>
        <StepLabel>{sections[0].header}</StepLabel>
      </Step>
      <Step>
        <StepLabel>{sections[1].header}</StepLabel>
      </Step>
      <Step>
        <StepLabel>{sections[2].header}</StepLabel>
      </Step>
    </Stepper>
    <div className={styles.content}>
      <StepItem
        section={sections.filter(i => i.stepIndex === stepIndex)[0] || sections[0]}
      />
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
