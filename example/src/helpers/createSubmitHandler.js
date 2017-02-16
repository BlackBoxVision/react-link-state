const createSubmitHandler = ({ getState, updateState }) => event => {
    event.preventDefault();
    const { email, password } = getState();

    updateState({
        'emailError': email ? '' : 'Email shouldn\'t be empty',
        'passwordError': password ? '' : 'Password shouldn\'t be empty'
    });

    if (email && password) {
        updateState({ 'openDialog': true });
    }
};

export default createSubmitHandler;