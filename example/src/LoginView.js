import React from 'react';

import { withLinkState } from 'link-state-hoc';

class LoginView extends React.Component {
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <div>
                            <label for='username'>
                                Username
                            </label>
                        </div>
                        <div>
                            <input
                                ref="username"
                                name='username'
                                {...this.props.linkState('username')}
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
                                ref="password"
                                name='password'
                                {...this.props.linkState('password')}
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
            username: this.refs.username.value,
            password: this.refs.password.value
        };

        console.log(`These are the values -> ${JSON.stringify(formValues, null, 2)}`);
    }
}

export default withLinkState(LoginView);
