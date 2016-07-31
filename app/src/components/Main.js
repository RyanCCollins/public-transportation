import React, { Component, PropTypes } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Snackbar } from 'material-ui';
import { Navbar } from 'containers';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Main extends Component {
  render() {
    const {
      isOffline,
      hasSnackbar
    } = this.props;
    return (
      <div>
        <Snackbar
          open={hasSnackbar && isOffline}
          message={'The application is offline, but will load a default schedule for you!'}
          autoHideDuration={4000}
          action="Close"
          onActionTouchTap={this.handleCloseSnackbar}
          onRequestClose={this.handleCloseSnackbar}
        />
        <MuiThemeProvider>
          <Navbar>
            {React.cloneElement(props.children, props)}
          </Navbar>
        </MuiThemeProvider>
      </div>
    );
  }
}

Main.propTypes = {
  hasSnackbar: PropTypes.bool.isRequired,
  isOffline: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => ({

});

export default connect(
  mapStateToProps
)(Main);
