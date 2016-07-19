import React, { PropTypes, Component } from 'react';
import {
  AppBar,
  IconButton,
  IconMenu,
  MenuItem,
  Drawer
} from 'material-ui';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as NavbarActionCreators from '../../actions/navbar';
import styles from './Navbar.module.scss';
import cssModules from 'react-css-modules';

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
  constructor(props) {
    super(props);
  }
  render() {
    const {
      isOpen
    } = this.props;
    return (
      <div>
        <AppBar
          title="Metro"
          iconElementRight={
            <NavIconMenu onRefresh={this.handleRefresh} onMoreInfo={this.handleMoreInfo} />
          }
        />
        <Drawer width={200} openSecondary open={isOpen}>
          <MenuItem>Menu Item</MenuItem>
          <MenuItem>Menu Item 2</MenuItem>
        </Drawer>
      </div>
    );
  }
}

Navbar.propTypes = {
  isOpen: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => ({
  isOpen: state.navbar.isOpen
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(NavbarActionCreators, dispatch)
});

const StyledNavbar = cssModules(Navbar, styles);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StyledNavbar);
