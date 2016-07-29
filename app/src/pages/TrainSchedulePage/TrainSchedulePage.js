import React, { Component } from 'react';
import { TrainSchedule } from 'containers';
import { Header } from 'components';

class TrainSchedulePage extends Component {
  render() {
    return (
      <div>
        <Header text="Train Schedule" />
        <TrainSchedule />
      </div>
    );
  }
}

export default TrainSchedulePage;
