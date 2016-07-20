import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styles from './HelpPage.module.scss';
import cssModules from 'react-css-modules';
import { HowItWorks } from 'components';
import * as HelpActionCreators from '../actions/help';
import {
  Column,
  Row
} from 'react-foundation';

class HelpPage extends Component {
  constructor(props) {
    super(props);
    this.handleForward = this.handleForward.bind(this);
    this.handleBackward = this.handleBackward.bind(this);
  }
  handleBackward() {
    const {
      actions
    } = this.props;
    actions.stepForwards();
  }
  handleForward() {
    const {
      actions
    } = this.props;
    actions.stepBackwards();
  }
  render() {
    const {
      stepIndex
    } = this.props;
    return (
      <Row>
        <Column small={12} medium={12} large={12} className={styles.outer}>
          <Column small={12} medium={8} large={6} className={styles.inner}>
            <h4>Public Transportation App</h4>
            <p>This app was made to demonstrate utilizing service worker to making offline first web applications</p>
            <p>If was made as project 2 to the senior web nanodegree</p>
            <p>Made by <a href="https://www.ryancollins.io">Ryan Collins</a></p>
          </Column>
          <Column small={12} medium={4} large={6}>
            <img
              alt="Big train"
              className="img-responsive"
              src="http://www.eurail.com/sites/eurail.com/files/tgv_high-spped_train_france.jpg"
            />
          </Column>
          <Column small={12} medium={4} large={6}>
            <HowItWorks
              stepIndex={stepIndex}
              onForward={this.handleForward}
              onBackward={this.handleBackward}
            />
          </Column>
        </Column>
      </Row>
    );
  }
}

HelpPage.propTypes = {
  stepIndex: PropTypes.number.isRequired,
  actions: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  stepIndex: state.help.stepIndex
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(HelpActionCreators, dispatch)
});

const StyledComponent = cssModules(HelpPage, styles);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StyledComponent);
