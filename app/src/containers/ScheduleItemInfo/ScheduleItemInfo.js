import React, { PropTypes } from 'react';
import { MoreInfo } from 'components';
import {
  Dialog,
  FlatButton
} from 'material-ui';


const ModalStyle = {
  width: '95%',
  maxWidth: 'none',
  overflow: 'scroll'
};

const ScheduleItemInfo = ({
  item,
  onClose,
  onSubmit,
  isOpen
}) => (
  <div>
    <Dialog
      title="More Info"
      modal={false}
      open={isOpen}
      contentStyle={ModalStyle}
      onRequestClose={onClose}
      actions={[
        <FlatButton
          label="close"
          primary
          onTouchTap={onClose}
        />,
        <FlatButton
          label="Purchase Ticket"
          primary
          keyboardFocused
          onTouchTap={onSubmit}
        />
      ]}
    >
      <MoreInfo item={item} />
    </Dialog>
  </div>
);

ScheduleItemInfo.propTypes = {
  item: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired
};

export default ScheduleItemInfo;
