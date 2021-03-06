import React, { PropTypes } from 'react';
import SelectTrainsImage from './images/select-trains.png';
import SearchButtonImage from './images/search-button.png';
import MenuImage from './images/menu-final.png';
import SelectScheduleImage from './images/select-schedule.png';
import styles from './StepItem.module.scss';
import cssModules from 'react-css-modules';

const StepItemImage = ({
  stepIndex
}) => (
  <img
    className={styles.imageContainer}
    alt="Descriptive for how it works"
    src={(() => {
      switch (stepIndex) {
        case 1:
          return SelectTrainsImage;
        case 2:
          return SearchButtonImage;
        case 3:
          return SelectScheduleImage;
        case 4:
          return MenuImage;
        default:
          break;
      }
    })()}
  />
);

StepItemImage.propTypes = {
  stepIndex: PropTypes.number.isRequired
};

const StepContentItem = ({
  section
}) => (
  <div className={styles.containHeight}>
    <h4>{section.header}</h4>
    <p>{section.content}</p>
    <StepItemImage stepIndex={section.stepIndex} />
  </div>
);

StepContentItem.propTypes = {
  section: PropTypes.object.isRequired
};

const StepItem = ({
  section
}) => (
  <div>
    <StepContentItem section={section} />
  </div>
);

StepItem.propTypes = {
  section: PropTypes.object.isRequired
};

export default cssModules(StepItem, styles);
