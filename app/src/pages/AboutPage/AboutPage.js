import React, { Component } from 'react';
import styles from './AboutPage.module.scss';
import cssModules from 'react-css-modules';
import { AboutCard } from 'components';
import {
  Column,
  Row
} from 'react-foundation';

class AboutPage extends Component {
  constructor() {
    super();
    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseOut = this.handleMouseOut.bind(this);
  }
  handleMouseOver() {
    console.log(`Mousing over`);
    this.setState({
      shadowDepth: 5
    });
  }
  handleMouseOut() {
    console.log(`Mousing out`);
    this.setState({
      shadowDepth: 1
    });
  }
  render() {
    const {
      shadowDepth
    } = this.state;
    return (
      <Row>
        <Column small={12} medium={12} large={12} className={styles.outer}>
          <AboutCard
            shadowDepth={shadowDepth}
            onMouseOver={this.handleMouseOver}
            onMouseOut={this.handleMouseOut}
          />
        </Column>
      </Row>
    );
  }
}

export default cssModules(AboutPage, styles);
