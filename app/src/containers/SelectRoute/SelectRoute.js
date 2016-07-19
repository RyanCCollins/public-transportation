import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styles from './SelectRoute.module.scss';
import cssModules from 'react-css-modules';
import {
  SelectField,
  MenuItem,
  Snackbar
} from 'material-ui';
import {
  Row,
  Column
} from 'react-foundation';
import * as RouteActionCreators from '../../actions/routes';
import { FaCog } from 'react-icons/lib/fa';
import { MdClose } from 'react-icons/lib/md';
import { IconButton } from 'material-ui';

class SelectRoute extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.renderLoading = this.renderLoading.bind(this);
    this.renderSelectBox = this.renderSelectBox.bind(this);
    this.handleCloseSnackbar = this.handleCloseSnackbar.bind(this);
    this.handleClearRoute = this.handleClearRoute.bind(this);
  }
  componentDidMount() {
    const {
      actions
    } = this.props;
    actions.fetchRoutes();
  }
  handleClearRoute() {

  }
  handleCloseSnackbar() {
    const {
      actions
    } = this.props;
    actions.clearRoutesErrors();
  }
  handleChange(event, index, value) {
    const {
      actions
    } = this.props;
    actions.selectRoute(value);
  }
  renderLoading() {
    return (
      <div className="flex-center">
        <FaCog className="icon icon-big spin" />
      </div>
    );
  }
  renderSelectBox() {
    const {
      routes,
      selectedRoute,
      errors
    } = this.props;
    return (
      <div className={styles.alignButton}>
        <SelectField
          value={selectedRoute}
          onChange={this.handleChange}
          floatingLabelText="Select a Transit Route"
          autoWidth
          fullWidth
          disabled={routes.length < 0}
        >
          {routes.map((route, i) =>
            <MenuItem key={i} value={route.id} primaryText={route.display_name} />
          )
          }
        </SelectField>
        <IconButton onClick={this.handleClearRoute} className="close-button">
          <MdClose />
        </IconButton>
        <Snackbar
          open={errors.length > 0}
          message={errors.length > 0 ? errors[0].message : ''}
          autoHideDuration={4000}
          action="Close"
          onActionTouchTap={this.handleCloseSnackbar}
          onRequestClose={this.handleCloseSnackbar}
        />
      </div>
    );
  }
  render() {
    const {
      isLoading
    } = this.props;
    return (
      <Row>
        <Column isColumn small={12} medium={10} large={8} centerOnSmall>
          {isLoading ?
            this.renderLoading()
          :
            this.renderSelectBox()
          }
        </Column>
      </Row>
    );
  }
}

SelectRoute.propTypes = {
  routes: PropTypes.array,
  selectedRoute: PropTypes.string,
  isLoading: PropTypes.bool.isRequired,
  errors: PropTypes.array,
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  routes: state.routes.items,
  selectedRoute: state.routes.selectedRoute,
  isLoading: state.routes.isLoading,
  errors: state.routes.errors
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(RouteActionCreators, dispatch)
});

const StyledComponent = cssModules(SelectRoute);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StyledComponent);
