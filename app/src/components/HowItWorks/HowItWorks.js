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
import StepItem from './StepItem/StepItem';

// isMobile :: None -> Bool
const isLikelyMobile = (width) =>
  width < 768;

const HowItWorks = ({
  stepIndex,
  onForwards,
  onBackwards,
  onFinish,
  sections,
  width
}) => (
  <div className={styles.root}>
    <Stepper
      activeStep={stepIndex - 1}
      orientation={isLikelyMobile(width) ? 'vertical' : 'horizontal'}
    >
      {sections.map((item, i) =>
        <Step key={i}>
          <StepLabel>{item.header}</StepLabel>
        </Step>
      )}
    </Stepper>
    <div className={styles.content}>
      <StepItem
        section={sections.filter(i => i.stepIndex === stepIndex)[0] || sections[0]}
      />
      {stepIndex !== null && (
        <div className={styles.actions}>
          <FlatButton
            label="Back"
            disabled={stepIndex === 1}
            onTouchTap={onBackwards}
            className={styles.backButton}
          />
          {stepIndex !== 4 ?
            <RaisedButton
              label="Next"
              disabled={stepIndex === 4}
              primary
              onTouchTap={onForwards}
            />
          :
            <RaisedButton
              label="Finish"
              primary
              onTouchTap={onFinish}
            />
          }
        </div>
      )}
    </div>
  </div>
);

HowItWorks.propTypes = {
  stepIndex: PropTypes.number.isRequired,
  onForwards: PropTypes.func.isRequired,
  onBackwards: PropTypes.func.isRequired,
  onFinish: PropTypes.func.isRequired,
  width: PropTypes.number.isRequired,
  sections: PropTypes.array.isRequired
};

export default cssModules(HowItWorks, styles);
