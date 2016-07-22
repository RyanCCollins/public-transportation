import React, { PropTypes } from 'react';
import styles from './AboutCard.module.scss';
import cssModules from 'react-css-modules';
import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText,
  Paper
} from 'material-ui/Card';
import { FlatButton } from 'material-ui';
import * as constants from './constants';

const AboutCard = ({
  shadowDepth,
  onMouseOver,
  onMouseOut
}) => (
  <Paper
    onMouseOver={onMouseOver}
    onMouseOut={onMouseOut}
    zDepth={shadowDepth}
  >
    <Card>
      <CardHeader
        title={constants.name}
        subtitle={constants.title}
        avatar={constants.avatarUrl}
      />
      <CardMedia
        overlay={
          <CardTitle
            title={constants.projectTitle}
            subtitle={constants.projectSubTitle}
          />
        }
      >
        <img
          src={constants.trainUrl}
          alt="Super Fast Train"
        />
      </CardMedia>
      <CardTitle title="About" subtitle="" />
      <CardText>
        {constants.cardTextP1}
        {constants.cardTextP2}
      </CardText>
      <CardActions>
        <a href={constants.repoUrl}>
          <FlatButton label="View on Github" />
        </a>
        <a href={constants.portfolioUrl}>
          <FlatButton label="View Portfolio" />
        </a>
      </CardActions>
    </Card>
  </Paper>
);

AboutCard.propTypes = {
  onMouseOver: PropTypes.func.isRequired,
  onMouseOut: PropTypes.func.isRequired,
  shadowDepth: PropTypes.number.isRequired
};

export default cssModules(AboutCard, styles);
