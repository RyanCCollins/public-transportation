import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styles from './HelpPage.module.scss';
import cssModules from 'react-css-modules';
import { HowItWorksContainer } from 'containers';
import * as HelpActionCreators from '../../actions/help';
import {
  Column,
  Row
} from 'react-foundation';

class HelpPage extends Component {
  constructor(props) {
    super(props);
    this.handleForwards = this.handleForwards.bind(this);
    this.handleBackwards = this.handleBackwards.bind(this);
    this.handleFinish = this.handleFinish.bind(this);
  }
  handleForwards() {
    const {
      actions
    } = this.props;
    actions.stepForwards();
  }
  handleBackwards() {
    const {
      actions
    } = this.props;
    actions.stepBackwards();
  }
  handleFinish() {
    const {
      actions
    } = this.props;
    actions.resetHelp();
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
            <p>
              {`This app was made to demonstrate utilizing
              service worker to making offline first web applications`}
            </p>
            <p>If was made as project 2 to the senior web nanodegree</p>
            <p>Made by <a href="https://www.ryancollins.io">Ryan Collins</a></p>
          </Column>
          <Column small={12} medium={4} large={6}>
            <img
              alt="Big train"
              className="img-responsive"
              src="https://i.ytimg.com/vi/aknUmKcEB7I/maxresdefault.jpg"
            />
          </Column>
          <Column small={12} medium={12} large={12}>
            <h1 className={styles.stepperHeader}>How It Works</h1>
            <HowItWorksContainer
              stepIndex={stepIndex}
              onForwards={this.handleForwards}
              onBackwards={this.handleBackwards}
              onFinish={this.handleFinish}
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

// mapStateToProps :: State -> {Props}
const mapStateToProps = (state) => ({
  stepIndex: state.help.stepIndex
});

// mapDispatchToProps :: Dispatch -> {Actions}
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(HelpActionCreators, dispatch)
});

const StyledComponent = cssModules(HelpPage, styles);
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StyledComponent);
