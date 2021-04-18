
export const login = (email, password) => {
    return dispatch => {
        
        const authData = {
            email: email,
            password: password
           
        };
        console.log(authData)

        fetch('http://localhost:5000/api/auth', {
        method: 'POST', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(authData),
        })
        .then(response => response.json())
        .then(data => {
            localStorage.setItem('token', data.token);
            dispatch(auth(data.token));
            console.log('Success:', data.token);
        })
        .catch((error) => {
            console.error('the Error:', error);
        });
    };
};
export const auth = (token) => {
    return {
        type: 'LOGIN',
        token: token
       
    };
};
export const logout = () => {
    localStorage.removeItem('token');
    return {
        type: 'LOGOUT'
    };
};
export const authCheckState = () => {
    return dispatch => {
        const token = localStorage.getItem('token');
        if (!token) {
            dispatch(logout());
        } else {
            dispatch(auth(token)); 
        }
    };
};