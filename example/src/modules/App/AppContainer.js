import React, { PropTypes } from 'react';
import { MuiThemeProvider } from 'material-ui';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';

import LoginContainer from '../Login/container/LoginContainer';
import PureLoginContainer from '../Login/container/PureLoginContainer';


const AppContainer = ({ pureView }) => (
    <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
        {pureView ? <PureLoginContainer/> : <LoginContainer/>}
    </MuiThemeProvider>
)

AppContainer.propTypes = {
    pureView: PropTypes.bool.isRequired
}

export default AppContainer;