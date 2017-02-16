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

##API Docs

Import **withLinkState** and in your component export default declaration call it or use it as a decorator.

**You can also pass to withLinkState an Array defining the keys for the component state.**

**withLinkState** provides you with a set of functions injected as props: 

- **linkState** -> takes a **key** and a **callback** as params and returns an Object containing the current value taken from the state, and  the onChange event handler for the input. The **callback** parameter is a function that takes the value received by the onChange event and performs a mutation over it. Just like this one:

```javascript
const callback = value => value + 'aaa';
```

- **getValue** -> takes a **key** and returns the value stored in the component's state.

- **updateState** -> takes a **key** and **value**, and then updates the component's state.

- **getState** -> returns the component state.

##Example usage

The code of this snippets is located at [Example Folder](https://github.com/BlackBoxVision/link-state-hoc/tree/master/example).

The example code snippets show also how to separate concerns, so, you can call **withLinkState** in an outer component (Smart) and render a simple pure component (Dumb).

###ES6 Class + Decorator Example

- **LoginContainer.js**

```javascript
import React, { Component, PropTypes } from 'react';

import { withLinkState } from 'link-state-hoc';
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
```

- **LoginView.js**

```javascript
import React, { Component, PropTypes } from 'react';
import { Card, CardText, CardTitle, RaisedButton, TextField } from 'material-ui';
import SendIcon from 'material-ui/svg-icons/content/send';

import createSubmitHandler from '../../../helpers/createSubmitHandler';

import LoginContainer from './styled/CenterContainer';
import RightContainer from './styled/RightContainer';
import LoginForm from './styled/Form';


class LoginView extends Component {
    static propTypes = {
        getState: PropTypes.func,
        linkState: PropTypes.func,
        getValue: PropTypes.func,
        updateState: PropTypes.func
    };

    render() {
        const { linkState, getValue, getState, updateState } = this.props;

        const emailLink = linkState('email');
        const passwordLink = linkState('password');

        return (
            <LoginContainer
                width='500px'
                height='600px'
                paddingTop='100px'
            >
                <Card containerStyle={{padding: '20px'}}>
                    <CardTitle
                        title='Login'
                        subtitle='Please, log in with your credentials'
                    />
                    <CardText>
                        <LoginForm onSubmit={createSubmitHandler({ getState, updateState })}>
                            <TextField
                                type='email'
                                name='username-input'
                                floatingLabelText='Email'
                                value={emailLink.value}
                                onChange={emailLink.onChange}
                                errorText={getValue('emailError')}
                                floatingLabelFixed
                                fullWidth
                            />
                            <TextField
                                type='password'
                                name='password-input'
                                floatingLabelText='Password'
                                value={passwordLink.value}
                                onChange={passwordLink.onChange}
                                errorText={getValue('passwordError')}
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
}

export default LoginView;
```

###Pure Component Example: 

- **PureLoginContainer.js**
```javascript 
import { withLinkState } from 'link-state-hoc';
import PureLoginView from '../components/PureLoginView';

const PureLoginContainer = withLinkState(['email', 'password', 'emailError', 'passwordError'])(PureLoginView);

export default PureLoginContainer;
```

- **PureLoginView.js**
```javascript
import React, { Component, PropTypes } from 'react';
import { Card, CardText, CardTitle, RaisedButton, TextField } from 'material-ui';
import SendIcon from 'material-ui/svg-icons/content/send';

import createSubmitHandler from '../../../helpers/createSubmitHandler';

import LoginContainer from './styled/CenterContainer';
import RightContainer from './styled/RightContainer';
import LoginForm from './styled/Form';


const PureLoginView = ({ linkState, getState, updateState, getValue }) => {
    const emailLink = linkState('email');
    const passwordLink = linkState('password');

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
                    <LoginForm onSubmit={createSubmitHandler({ getState, updateState })}>
                        <TextField
                            type='email'
                            name='username-input'
                            floatingLabelText='Email'
                            value={emailLink.value}
                            onChange={emailLink.onChange}
                            errorText={getValue('emailError')}
                            floatingLabelFixed
                            fullWidth
                        />
                        <TextField
                            type='password'
                            name='password-input'
                            floatingLabelText='Password'
                            value={passwordLink.value}
                            onChange={passwordLink.onChange}
                            errorText={getValue('passwordError')}
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
};

PureLoginView.propTypes = {
    getState: PropTypes.func,
    linkState: PropTypes.func,
    getValue: PropTypes.func,
    updateState: PropTypes.func
};

export default PureLoginView;
```

##Issues

If you found a bug, or you have an answer, or whatever. Please, open an [issue](https://github.com/BlackBoxVision/link-state-hoc/issues). I will do the best to fix it, or help you.

##Contributing

Of course, if you see something that you want to upgrade from this library, or a bug that needs to be solved, **PRs are welcome!**

##License

Distributed under the **MIT license**. See [LICENSE](https://github.com/BlackBoxVision/link-state-hoc/blob/master/LICENSE) for more information.
