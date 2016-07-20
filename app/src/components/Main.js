import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Navbar } from 'containers';

const Main = (props) => (
  <div>
    <MuiThemeProvider>
      <Navbar>
        {React.cloneElement(props.children, props)}
      </Navbar>
    </MuiThemeProvider>
  </div>
);

export default Main;
