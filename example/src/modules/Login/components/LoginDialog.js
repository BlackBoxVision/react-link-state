import React, { PropTypes } from 'react';
import { Dialog } from 'material-ui';

const LoginDialog = ({ open, onRequestClose, email, password }) => {
    return (
        <Dialog
            title='Login Values'
            open={open}
            onRequestClose={onRequestClose}
            modal={false}
            contentStyle={{
                width: "350px"
            }}
        >
            <div>
                <p><strong>Email:</strong> {email}</p>
                <p><strong>Password:</strong> {password}</p>
            </div>
        </Dialog>
    )
};

LoginDialog.propTypes = {
    open: PropTypes.bool.isRequired,
    onRequestClose: PropTypes.func.isRequired,
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired
};

export default LoginDialog;