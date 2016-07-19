import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
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
import {
  FaCog
} from 'react-icons/lib/fa';

class SelectRoute extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.renderLoading = this.renderLoading.bind(this);
    this.renderSelectBox = this.renderSelectBox.bind(this);
    this.handleCloseSnackbar = this.handleCloseSnackbar.bind(this);
  }
  componentDidMount() {
    const {
      actions
    } = this.props;
    actions.fetchRoutes();
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
      <div>
        <SelectField
          value={selectedRoute}
          onChange={this.handleChange}
          floatingLabelText="Select a Transit Route"
          autoWidth
          fullWidth
        >
          {routes.map((route, i) =>
            <MenuItem key={i} value={route.RouteId} primaryText={route.Name} />
          )
          }
        </SelectField>
        <div onClick={this.handleClearRoute}>Clear</div>
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectRoute);
