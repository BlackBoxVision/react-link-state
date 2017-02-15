const createSubmitHandler = ({ getState, updateState }) => event => {
    event.preventDefault();
    const { email, password } = getState();

    updateState({
        'emailError': email ? '' : 'Email shouldn\'t be empty',
        'passwordError': password ? '' : 'Password shouldn\'t be empty'
    });

    if (email && password) {
        console.log(`These are the values -> ${JSON.stringify({email, password}, null, 2)}`);
    }
};

export default createSubmitHandler;