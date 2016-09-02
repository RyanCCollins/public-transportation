import React, { PropTypes, Component } from 'react';
import {
  AppBar,
  IconButton,
  IconMenu,
  MenuItem,
  Drawer,
  Toggle
} from 'material-ui';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as NavbarActionCreators from '../../actions/navbar';
import * as GlobalActionCreators from '../../actions/index';
import * as SettingsActionCreators from '../../actions/settings';
import styles from './Navbar.module.scss';
import cssModules from 'react-css-modules';
import { Link } from 'react-router';

const NavIconMenu = ({
  onRefresh,
  onToggleFunMode,
  funMode,
  mapMode,
  onToggleMapMode,
  onToggleOfflineMode,
  offlineMode
}) => (
  <IconMenu
    iconButtonElement={
      <IconButton>
        <MoreVertIcon className={styles.whiteIcon} />
      </IconButton>
    }
    targetOrigin={{ horizontal: 'right', vertical: 'top' }}
    anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
  >
    <MenuItem
      className={styles.pointerCursor}
      onClick={onRefresh}
      primaryText="Reset / Refresh"
    />
    <MenuItem>
      <Toggle
        label={`The app is ${offlineMode ? 'Offline' : 'Online'}`}
        onToggle={onToggleOfflineMode}
        toggled={offlineMode}
        disabled
      />
    </MenuItem>
    <MenuItem>
      <Toggle
        label="Toggle Fun Mode"
        onToggle={onToggleFunMode}
        toggled={funMode}
      />
    </MenuItem>
    <MenuItem>
      <Toggle
        label="Toggle Map Mode"
        onToggle={onToggleMapMode}
        toggled={mapMode}
      />
    </MenuItem>
  </IconMenu>
);

NavIconMenu.propTypes = {
  onRefresh: PropTypes.func.isRequired,
  onToggleFunMode: PropTypes.func.isRequired,
  funMode: PropTypes.bool.isRequired,
  mapMode: PropTypes.bool.isRequired,
  onToggleMapMode: PropTypes.func.isRequired,
  offlineMode: PropTypes.bool.isRequired,
  onToggleOfflineMode: PropTypes.func.isRequired
};

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.handleOpen = this.handleOpen.bind(this);
    this.handleRefresh = this.handleRefresh.bind(this);
    this.handleToggleFunMode = this.handleToggleFunMode.bind(this);
    this.handleToggleMapMode = this.handleToggleMapMode.bind(this);
    this.handleToggleOfflineMode = this.handleToggleOfflineMode.bind(this);
  }
  handleRefresh() {
    const {
      actions
    } = this.props;
    actions.refreshAndReload();
  }
  handleToggleMapMode() {
    const {
      actions
    } = this.props;
    actions.toggleMapMode();
  }
  handleToggleFunMode() {
    const {
      actions
    } = this.props;
    actions.toggleFunMode();
  }
  handleOpen() {
    const {
      actions
    } = this.props;
    actions.toggleNav();
  }
  handleToggleOfflineMode() {
    const {
      actions
    } = this.props;
    actions.toggleOfflineMode();
  }
  render() {
    const {
      isOpen,
      children,
      funMode,
      mapMode,
      offlineMode
    } = this.props;
    return (
      <div>
        <AppBar
          title="Metro"
          onLeftIconButtonTouchTap={this.handleOpen}
          iconElementRight={
            <NavIconMenu
              onRefresh={this.handleRefresh}
              offlineMode={offlineMode}
              onToggleOfflineMode={this.handleToggleOfflineMode}
              onToggleFunMode={this.handleToggleFunMode}
              funMode={funMode}
              mapMode={mapMode}
              onToggleMapMode={this.handleToggleMapMode}
            />
          }
        />
        <Drawer
          width={200}
          open={isOpen}
          onRequestChange={this.handleOpen}
          docked={false}
        >
          <Link className={styles.navbarLink} to="/">
            <MenuItem onTouchTap={this.handleOpen}>
              Home
            </MenuItem>
          </Link>
          <Link className={styles.navbarLink} to="help">
            <MenuItem onTouchTap={this.handleOpen}>
              Help
            </MenuItem>
          </Link>
          <Link className={styles.navbarLink} to="about">
            <MenuItem onTouchTap={this.handleOpen}>
              About
            </MenuItem>
          </Link>
        </Drawer>
        {children}
      </div>
    );
  }
}

Navbar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  children: PropTypes.node,
  actions: PropTypes.object.isRequired,
  funMode: PropTypes.bool.isRequired,
  mapMode: PropTypes.bool.isRequired,
  offlineMode: PropTypes.bool.isRequired
};

/**
 * @function mapStateToProps
 * @description map redux store state to local state
 * @param {state} the redux store's state
 * @note - Experimenting with style guide where
           the arrow function starts on a new line
 */
const mapStateToProps =
  (state) => ({
    isOpen: state.navbar.isOpen,
    funMode: state.settings.funMode,
    mapMode: state.settings.mapMode,
    offlineMode: state.settings.offlineMode
  });

/**
 * @function mapDispatchToProps
 * @description Map action creators from the redux store to local props
 * @param {dispatch} - the store's dispatcher
 * @note - Experimenting with style guide where
           the arrow function starts on a new line
 */
const mapDispatchToProps =
  (dispatch) => ({
    actions: bindActionCreators(
      Object.assign({},
        NavbarActionCreators,
        GlobalActionCreators,
        SettingsActionCreators
      ), dispatch)
  });

const StyledNavbar = cssModules(Navbar, styles);
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StyledNavbar);
