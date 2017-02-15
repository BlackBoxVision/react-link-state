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
