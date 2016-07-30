import React from 'react';
import styles from './BackButton.module.scss';
import cssModules from 'react-css-modules';
import { MdChevronLeft } from 'react-icons/lib/md';

class BackButton extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.handleGoBack = this.handleGoBack.bind(this);
  }
  handleGoBack() {
    this.context.router.goBack();
  }
  render() {
    return (
      <div
        className={styles.backButton}
        onClick={this.handleGoBack}
      >
        <MdChevronLeft />
      </div>
    );
  }
}

BackButton.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default cssModules(BackButton, styles);
