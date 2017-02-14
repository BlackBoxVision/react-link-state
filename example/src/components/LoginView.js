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

        const emailErrorMessage = !email ? 'Email shouldn\'t be empty' : '';
        const passwordErrorMessage = !password ? 'Password shouldn\'t be empty' : '';

        this.props.updateState('emailError', emailErrorMessage);
        this.props.updateState('passwordError', passwordErrorMessage);

        if (email && password) {
            //TODO handle login
            console.log(`These are the values -> ${JSON.stringify({email, password}, null, 2)}`);
        }
    }
}

export default LoginView;
