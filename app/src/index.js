import React from 'react';
import { render } from 'react-dom';
import router from './utils/router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import '../styles/styles.scss';

injectTapEventPlugin();
render(router, document.getElementById('app'));
