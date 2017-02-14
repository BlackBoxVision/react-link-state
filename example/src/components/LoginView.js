import React from 'react';
import { Card, CardText, CardTitle, RaisedButton, TextField } from 'material-ui';

import withLinkState from '../../../src/lib/withLinkState';

import LoginContainer from '../styled-components/CenterContainer';
import RightContainer from '../styled-components/RightContainer';
import LoginForm from '../styled-components/Form';

@withLinkState()
class LoginView extends React.Component {
    render() {
        const emailLink = this.props.linkState('email');
        const passwordLink = this.props.linkState('password');

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
                        <LoginForm
                            method='GET'
                            onSubmit={this.handleSubmit}
                        >
                            <TextField
                                type='email'
                                name='username-input'
                                floatingLabelText='Email'
                                value={emailLink.value}
                                onChange={emailLink.onChange}
                                floatingLabelFixed
                                fullWidth
                            />
                            <TextField
                                type='password'
                                name='password-input'
                                floatingLabelText='Password'
                                value={passwordLink.value}
                                onChange={passwordLink.onChange}
                                floatingLabelFixed
                                fullWidth
                            />
                            <RightContainer>
                                <RaisedButton
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

    handleSubmit = () => {
        const formValues = {
            email: this.props.getValue('email'),
            password: this.props.getValue('password')
        };

        console.log(`These are the values -> ${JSON.stringify(formValues, null, 2)}`);
    }
}

export default LoginView;
