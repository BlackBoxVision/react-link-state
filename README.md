# LinkState HOC
> :fire_engine: linkState comes to the rescue of your event handlers!

[![License: MIT](https://img.shields.io/badge/License-MIT-brightgreen.svg)](https://opensource.org/licenses/MIT) [![npm version](https://badge.fury.io/js/link-state-hoc.svg)](https://badge.fury.io/js/link-state-hoc) [![Build Status](https://travis-ci.org/BlackBoxVision/link-state-hoc.svg?branch=master)](https://travis-ci.org/BlackBoxVision/link-state-hoc) [![codecov](https://codecov.io/gh/BlackBoxVision/link-state-hoc/branch/master/graph/badge.svg)](https://codecov.io/gh/BlackBoxVision/link-state-hoc)

The idea of this module started from this post **[Using linkState in your React Components to simplify event handlers](https://medium.com/@jonatan_salas/using-linkstate-in-your-react-components-to-simplify-event-handlers-9d157cb75082#.ck4t4rij1)**

Also, this could be an upgrade from the [**linkState** mixin](https://facebook.github.io/react/docs/two-way-binding-helpers.html). 

##Installation

**YARN**

```javascript
yarn add link-state-hoc
```

**NPM**

```javascript
npm install --save link-state-hoc
```

##Usage

Import **withLinkState** and in your component export default declaration call it or use it as a decorator.

**You can also pass to withLinkState an Array defining the keys for the component state.**

**withLinkState** provides you with two functions injected as props: 

- **linkState** -> takes a **key** as a param and returns an Object containing the current value taken from the state, and  the onChange event handler for the input. 

- **getValue** -> takes a **key** and returns the value stored in the component's state.

- **updateState** -> takes a **key** and **value**, and then updates the component's state.

##**Calling as a Decorator**

```javascript
import React from 'react';
import { Card, CardText, CardTitle, RaisedButton, TextField } from 'material-ui';
import SendIcon from 'material-ui/svg-icons/content/send';

import withLinkState from '../../../src/lib/withLinkState';

import LoginContainer from '../styled-components/CenterContainer';
import RightContainer from '../styled-components/RightContainer';
import LoginForm from '../styled-components/Form';


@withLinkState(['email', 'password'])
class LoginView extends React.Component {
    render() {
        const emailLink = this.props.linkState('email');
        const passwordLink = this.props.linkState('password');

        const emailError = this.props.getValue('emailError');
        const passwordError = this.props.getValue('passwordError');

        return (
            <LoginContainer
                width='500px'
                height='600px'
                paddingTop='100px'
            >
                <Card containerStyle={{ padding: '20px' }}>
                    <CardTitle
                        title='Login'
                        subtitle='Please, log in with your credentials'
                    />
                    <CardText>
                        <LoginForm onSubmit={this.handleSubmit}>
                            <TextField
                                type='email'
                                name='username-input'
                                floatingLabelText='Email'
                                value={emailLink.value}
                                onChange={emailLink.onChange}
                                errorText={emailError}
                                floatingLabelFixed
                                fullWidth
                            />
                            <TextField
                                type='password'
                                name='password-input'
                                floatingLabelText='Password'
                                value={passwordLink.value}
                                onChange={passwordLink.onChange}
                                errorText={passwordError}
                                floatingLabelFixed
                                fullWidth
                            />
                            <RightContainer>
                                <RaisedButton
                                    icon={<SendIcon/>}
                                    labelPosition='before'
                                    type='submit'
                                    label='login'
                                    primary
                                />
                            </RightContainer>
                        </LoginForm>
                    </CardText>
                </Card>
            </LoginContainer>
        );
    }

    handleSubmit = event => {
        event.preventDefault();

        const email = this.props.getValue('email');
        const password = this.props.getValue('password');

        this.props.updateState('emailError', email ? '' : 'Email shouldn\'t be empty');
        this.props.updateState('passwordError', password ? '' : 'Password shouldn\'t be empty');

        if (email && password) {
            //TODO handle login
            console.log(`These are the values -> ${JSON.stringify({email, password}, null, 2)}`);
        }
    }
}

export default LoginView;
```

##**Calling in export default**

```javascript
import React from 'react';
import { Card, CardText, CardTitle, RaisedButton, TextField } from 'material-ui';
import SendIcon from 'material-ui/svg-icons/content/send';

import withLinkState from '../../../src/lib/withLinkState';

import LoginContainer from '../styled-components/CenterContainer';
import RightContainer from '../styled-components/RightContainer';
import LoginForm from '../styled-components/Form';


class LoginView extends React.Component {
    render() {
        const emailLink = this.props.linkState('email');
        const passwordLink = this.props.linkState('password');

        const emailError = this.props.getValue('emailError');
        const passwordError = this.props.getValue('passwordError');

        return (
            <LoginContainer
                width='500px'
                height='600px'
                paddingTop='100px'
            >
                <Card containerStyle={{ padding: '20px' }}>
                    <CardTitle
                        title='Login'
                        subtitle='Please, log in with your credentials'
                    />
                    <CardText>
                        <LoginForm onSubmit={this.handleSubmit}>
                            <TextField
                                type='email'
                                name='username-input'
                                floatingLabelText='Email'
                                value={emailLink.value}
                                onChange={emailLink.onChange}
                                errorText={emailError}
                                floatingLabelFixed
                                fullWidth
                            />
                            <TextField
                                type='password'
                                name='password-input'
                                floatingLabelText='Password'
                                value={passwordLink.value}
                                onChange={passwordLink.onChange}
                                errorText={passwordError}
                                floatingLabelFixed
                                fullWidth
                            />
                            <RightContainer>
                                <RaisedButton
                                    icon={<SendIcon/>}
                                    labelPosition='before'
                                    type='submit'
                                    label='login'
                                    primary
                                />
                            </RightContainer>
                        </LoginForm>
                    </CardText>
                </Card>
            </LoginContainer>
        );
    }

    handleSubmit = event => {
        event.preventDefault();

        const email = this.props.getValue('email');
        const password = this.props.getValue('password');

        this.props.updateState('emailError', email ? '' : 'Email shouldn\'t be empty');
        this.props.updateState('passwordError', password ? '' : 'Password shouldn\'t be empty');

        if (email && password) {
            //TODO handle login
            console.log(`These are the values -> ${JSON.stringify({email, password}, null, 2)}`);
        }
    }
}

export default LoginView;

export default withLinkState(['email', 'password'])(LoginView);
```

##Issues

If you found a bug, or you have an answer, or whatever. Please, open an [issue](https://github.com/BlackBoxVision/link-state-hoc/issues). I will do the best to fix it, or help you.

##Contributing

Of course, if you see something that you want to upgrade from this library, or a bug that needs to be solved, **PRs are welcome!**

##License

Distributed under the **MIT license**. See [LICENSE](https://github.com/BlackBoxVision/link-state-hoc/blob/master/LICENSE) for more information.
