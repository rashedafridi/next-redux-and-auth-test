
export const initialState_auth = {
    token: null,
    // userId: null,
    // error: null,
    // authRedirectPath: '/'
};



const login = (state, action) => {
    return {...state, 
        token: action.token,};

};


const authLogout = (state, action) => {
    return {...state, token: null} ;
};



const reducer = ( state = initialState_auth, action ) => {
    switch ( action.type ) {
        case 'LOGOUT': return authLogout(state, action);
        case 'LOGIN': return login(state, action);
        default:
            return state;
    }
};

export default reducer;