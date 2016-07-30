import React from 'react';
import { TrainSchedule } from 'containers';
import { Header, BackButton } from 'components';

const TrainSchedulePage = () => (
  <div style={{ position: 'relative' }}>
    <BackButton />
    <Header text="Train Schedule" />
    <TrainSchedule />
  </div>
);

export default TrainSchedulePage;
