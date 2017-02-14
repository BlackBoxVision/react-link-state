import React from 'react';

import { withLinkState } from 'link-state-hoc';

class LoginView extends React.Component {
    render() {
        const usernameLink = this.props.linkState('username');
        const passwordLink = this.props.linkState('password');

        return (
            <div>
                <form method="GET" onSubmit={this.handleSubmit}>
                    <div>
                        <div>
                            <label for='username'>
                                Username
                            </label>
                        </div>
                        <div>
                            <input
                                name='username'
                                ref={username => this.username = username}
                                value={usernameLink.value}
                                onChange={usernameLink.onChange}
                            />
                        </div>
                    </div>
                    <div>
                        <div>
                            <label for='password'>
                                Password
                            </label>
                        </div>
                        <div>
                            <input
                                name='password'
                                ref={password => this.password = password}
                                value={passwordLink.value}
                                onChange={passwordLink.onChange}
                            />
                        </div>
                    </div>
                    <div>
                        <button type='submit'>
                            Login
                        </button>
                    </div>
                </form>
            </div>
        );
    }

    handleSubmit = e => {
        const formValues = {
            username: this.props.getValue('username'),
            password: this.props.getValue('password')
        };

        console.log(`These are the values -> ${JSON.stringify(formValues, null, 2)}`);
    }
}

export default withLinkState(LoginView);
