import React from 'react';
import { MuiThemeProvider } from 'material-ui';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';

import LoginView from './LoginView.js';

const MainApp = props => (
    <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
        <LoginView/>
    </MuiThemeProvider>
)

export default MainApp;