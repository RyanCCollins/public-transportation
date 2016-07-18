import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import Main from './Main';

// Map the global state to global props here.
// See: https://egghead.io/lessons/javascript-redux-generating-containers-with-connect-from-react-redux-visibletodolist
const mapStateToProps = (state) => ({
  messages: state.messages,
  errors: state.errors
});

// Map the dispatch and bind the action creators.
// See: http://redux.js.org/docs/api/bindActionCreators.html
function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    actionCreators,
    dispatch
  );
}

// Use connect both here and in your components.
// See: https://egghead.io/lessons/javascript-redux-generating-containers-with-connect-from-react-redux-visibletodolist
const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);

export default App;
