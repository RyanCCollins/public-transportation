import React, { Component, PropTypes } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Snackbar } from 'material-ui';
import { Navbar } from 'containers';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as SettingActionCreators from 'actions/settings';

class Main extends Component {
  constructor() {
    super();
    this.handleCloseSnackbar = this.handleCloseSnackbar.bind(this);
    this.state = {
      snackbar: {
        isOpen: false,
        message: ''
      }
    };
  }
  componentDidMount() {
    const {
      actions
    } = this.props;
    window.addEventListener('online', () => {
      const message = 'The browser is back online! Hurray!';
      actions.setOfflineMode(true, message);
    }, true);
    window.addEventListener('offline', () => {
      const message = 'The application is offline, but will load a default schedule for you!';
      actions.setOfflineMode(false, message);
    }, true);
  }
  componentWillReceiveProps(newProps) {
    const {
      isOffline,
      alertMessage
    } = newProps;
    if (this.props.isOffline !== isOffline) {
      this.setState({
        snackbar: {
          isOpen: true,
          message: alertMessage
        }
      });
    }
  }
  componentWillUnmount() {
    window.removeEventListener('online', (e) => e);
    window.removeEventListener('offline', (e) => e);
  }
  handleCloseSnackbar() {
    this.setState({
      snackbar: {
        isOpen: false,
        message: ''
      }
    });
  }
  render() {
    const {
      snackbar
    } = this.state;
    return (
      <div className="main">
        <MuiThemeProvider>
          <Navbar>
            {React.cloneElement(this.props.children, this.props)}
            <Snackbar
              open={snackbar.isOpen}
              message={snackbar.message}
              autoHideDuration={4000}
              action="Okay"
              onActionTouchTap={this.handleCloseSnackbar}
              onRequestClose={this.handleCloseSnackbar}
            />
          </Navbar>
        </MuiThemeProvider>
      </div>
    );
  }
}

Main.propTypes = {
  isOffline: PropTypes.bool.isRequired,
  children: PropTypes.element.isRequired,
  actions: PropTypes.object.isRequired,
  alertMessage: PropTypes.string.isRequired
};

const mapStateToProps = (state) => ({
  isOffline: state.settings.offlineMode,
  alertMessage: state.settings.alertMessage
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    SettingActionCreators,
    dispatch
  )
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
