export const initialState_counter = {
    lastUpdate: 0,
    light: false,
    count: 10,    
}

const reducer = (state = initialState_counter, action) => {
    switch (action.type) {
        case 'TICK':
            return {
                ...state,
                lastUpdate: action.lastUpdate,
                light: !!action.light,
            }
        case 'INCREMENT':
            return {
                ...state,
                count: state.count + 1,
            }
        case 'DECREMENT':
            return {
                ...state,
                count: state.count - 1,
            }
        case 'RESET':
            return {
                ...state,
                count: initialState.count,
            }
        default:
            return state
    }
}
export default reducer