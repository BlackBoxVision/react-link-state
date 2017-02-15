import React, { Component, PropTypes } from 'react';

import withLinkState from '../../../../../src/lib/withLinkState';
import LoginView from '../components/LoginView';

@withLinkState(['email', 'password', 'emailError', 'passwordError'])
class LoginContainer extends React.Component {
    static propTypes = {
        getState: PropTypes.func,
        linkState: PropTypes.func,
        getValue: PropTypes.func,
        updateState: PropTypes.func
    };

    render () {
        const { getState, getValue, linkState, updateState } = this.props;

        return (
            <LoginView
                getState={getState}
                getValue={getValue}
                linkState={linkState}
                updateState={updateState}
            />
        );
    }
}

export default LoginContainer;