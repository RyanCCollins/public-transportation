import React, { PropTypes } from 'react';
import styles from './AboutPage.module.scss';
import cssModules from 'react-css-modules';
import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText
} from 'material-ui/Card';
import { FlatButton } from 'material-ui';
import { Link } from 'react-router';
import {
  Column,
  Row
} from 'react-foundation';

const AboutPage = () => (
  <Row>
    <Column small={12} medium={12} large={12} className={styles.outer}>
      <Card>
        <CardHeader
          title="By Ryan Collins"
          subtitle="Web Engineer"
          avatar="https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAQyAAAAJDU3YWY4Nzk1LWQ0YzEtNGIyMy1iOWI3LTBmMTllMmI1Y2Q5NQ.jpg"
        />
        <CardMedia
          overlay={
            <CardTitle title="Public Transportation" subtitle="Offline First Web App" />
          }
        >
          <img
            src="http://www.eurail.com/sites/eurail.com/files/tgv_high-spped_train_france.jpg"
            alt="Super Fast Train"
          />
        </CardMedia>
        <CardTitle title="About" subtitle="" />
        <CardText>
          An offline first web application built using progressive web technologies, including React, Redux and Service Worker.
          Allows users to select a departure and arrival train station, and see a list of trains, times, and durations. A default train schedule is provided that is used when the application is offline. If a network connection exists, the application queries an endpoint that provides information about all arrival and departure times.
        </CardText>
        <CardActions>
          <a href="https://github.com/RyanCCollins/public-transportation">
            <FlatButton label="View on Github" />
          </a>
          <a href="https://www.ryancollins.io">
            <FlatButton label="View Portfolio" />
          </a>
        </CardActions>
      </Card>
    </Column>
  </Row>
);

export default cssModules(AboutPage, styles);
