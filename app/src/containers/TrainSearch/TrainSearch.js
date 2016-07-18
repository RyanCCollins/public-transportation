import React, { PropTypes, Component } from 'react';
import styles from './TrainSearch.module.scss';
import cssModules from 'react-css-modules';
import {
  TextField,
  Paper,
  Divider,
  RaisedButton
} from 'material-ui';
import {
  Column,
  Row
} from 'react-foundation';

class TrainSearch extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit() {
    const {
      departureInput,
      arrivalInput
    } = this.refs;
    console.log(`Submitting value for train: ${departureInput} and ${arrivalInput}`)
  }
  render() {
    return (
      <div className={styles.container}>
        <Row>
          <Column isColumn small={12} medium={8} large={6} centerOnSmall>
            <Paper zDepth={2}>
              <TextField
                hintText="Departure"
                floatingLabelText="Enter a departure for the train"
                ref="departureInput"
                fullWidth
              />
              <Divider />
              <TextField
                hintText="Arrival"
                ref="arrivalInput"
                floatingLabelText="Enter an arrival for the train"
                fullWidth
              />
              <Divider />
              <RaisedButton
                label="Submit"
                onClick={this.handleSubmit}
                fullWidth={true}
              />
            </Paper>
          </Column>
        </Row>
      </div>
    );
  }
}

TrainSearch.propTypes = {

};

export default cssModules(TrainSearch, styles);
