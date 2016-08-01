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
      hasSnackbar: false
    };
  }
  componentDidMount() {
    if (typeof window !== 'undefined') {
      const {
        actions
      } = this.props;
      window.addEventListener('online', (_) => {
        actions.toggleOfflineMode(true);
      }, true);
      window.addEventListener('offline', (_) => {
        actions.toggleOfflineMode(false);
      }, true);
    }
    this.state = {
      hasSnackbar: true
    };
  }
  componentWillReceiveProps(newProps) {
    const {
      isOffline
    } = this.props;
    if (newProps.isOffline !== isOffline) {
      this.setState({
        hasSnackbar: true
      });
    }
  }
  componentWillUnmount() {
    window.removeEventListener('online', (e) => {
      /* eslint-disable */
      console.log(`Removing event listenter for event ${e}`);
      /* eslint-enable */
    });
    window.removeEventListener('offline', (e) => {
      /* eslint-disable */
      console.log(`Removing event listenter for event ${e}`);
      /* eslint-enable */
    });
  }
  handleCloseSnackbar() {
    this.setState({
      hasSnackbar: false
    });
  }
  render() {
    const {
      isOffline
    } = this.props;
    const {
      hasSnackbar
    } = this.state;
    return (
      <div>
        <MuiThemeProvider>
          <Navbar>
            {React.cloneElement(this.props.children, this.props)}
            <Snackbar
              open={hasSnackbar && isOffline}
              message={'The application is offline, but will load a default schedule for you!'}
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
  actions: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  isOffline: state.settings.offlineMode
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
