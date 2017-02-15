import React, { PropTypes } from 'react';
import { MuiThemeProvider } from 'material-ui';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';

import LoginView from './LoginView';
import PureLoginView from './PureLoginView';

const MainApp = ({ pureView }) => (
    <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
        {pureView ? <PureLoginView/> : <LoginView/>}
    </MuiThemeProvider>
)

MainApp.propTypes = {
    pureView: PropTypes.bool.isRequired
}

export default MainApp;