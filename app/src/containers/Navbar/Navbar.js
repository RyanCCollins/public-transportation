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
  onReset,
  onToggleFunMode,
  funMode
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
      primaryText="Refresh"
    />
    <MenuItem
      className={styles.pointerCursor}
      onClick={onReset}
      primaryText="Reset"
    />
    <MenuItem>
      <Toggle
        label="Toggle Fun Mode"
        onToggle={onToggleFunMode}
        toggled={funMode}
      />
    </MenuItem>
  </IconMenu>
);

NavIconMenu.propTypes = {
  onRefresh: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
  onToggleFunMode: PropTypes.func.isRequired,
  funMode: PropTypes.bool.isRequired
};

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.handleOpen = this.handleOpen.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleRefresh = this.handleRefresh.bind(this);
    this.handleToggleFunMode = this.handleToggleFunMode.bind(this);
  }
  handleRefresh() {

  }
  handleToggleFunMode() {
    const {
      actions
    } = this.props;
    actions.toggleFunMode();
  }
  handleReset() {
    const {
      actions
    } = this.props;
    actions.reset();
  }
  handleOpen() {
    const {
      actions
    } = this.props;
    actions.toggleNav();
  }
  render() {
    const {
      isOpen,
      children,
      funMode
    } = this.props;
    return (
      <div>
        <AppBar
          title="Metro"
          onLeftIconButtonTouchTap={this.handleOpen}
          iconElementRight={
            <NavIconMenu
              onRefresh={this.handleRefresh}
              onReset={this.handleReset}
              onToggleFunMode={this.handleToggleFunMode}
              funMode={funMode}
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
  funMode: PropTypes.bool.isRequired
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
  funMode: state.settings.funMode
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
