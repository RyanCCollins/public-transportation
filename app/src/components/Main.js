import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const Main = (props) => (
  <div>
    <MuiThemeProvider>
      {React.cloneElement(props.children, props)}
    </MuiThemeProvider>
  </div>
);

export default Main;
