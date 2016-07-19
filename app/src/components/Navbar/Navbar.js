import React, { PropTypes, Component } from 'react';
import {
  AppBar,
  IconButton,
  IconMenu,
  MenuItem
} from 'material-ui';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

const NavIconMenu = ({
  onRefresh,
  onMoreInfo
}) => (
  <IconMenu
    iconButtonElement={
      <IconButton>
        <MoreVertIcon />
      </IconButton>
    }
    targetOrigin={{ horizontal: 'right', vertical: 'top' }}
    anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
  >
    <MenuItem onClick={onRefresh} primaryText="Refresh" />
    <MenuItem onClick={onMoreInfo} primaryText="More Info" />
  </IconMenu>
);

NavIconMenu.propTypes = {
  onRefresh: PropTypes.func.isRequired,
  onMoreInfo: PropTypes.func.isRequired
};

class Navbar extends Component {
  render() {
    return (
      <AppBar
        title="Metro"
        iconElementRight={
          <NavIconMenu onRefresh={this.handleRefresh} onMoreInfo={this.handleMoreInfo} />
        }
      />
    );
  }
}

export default Navbar;
