import { useMemo } from 'react'
import { createStore, applyMiddleware ,combineReducers} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk';
import counter ,{initialState_counter} from './reducers/counter';
import auth ,{initialState_auth} from './reducers/auth';
let store

// const initialState = {
//   lastUpdate: 0,
//   light: false,
//   count: 10,
//   token:''
// }

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'TICK':
//       return {
//         ...state,
//         lastUpdate: action.lastUpdate,
//         light: !!action.light,
//       }
//     case 'INCREMENT':

//       const cat = localStorage.getItem('ras');
//       console.log("[ras]",cat)
//       var cok = document.cookie.match('token');
//       console.log("[cok]",cok)
//       return {
//         ...state,
//         count: state.count + 1,
//       }
//     case 'DECREMENT':
//       return {
//         ...state,
//         count: state.count - 1,
//       }
//     case 'RESET':
//       return {
//         ...state,
//         count: initialState.count,
//       }
//     case 'login':
//         return {
//           ...state,
//           count: initialState.count,
//         }
//     default:
//       return state
//   }
// }

// const logger = store => {
//   return next => {
//       return action => {
//           console.log('[Middleware] Dispatching', action);
//           const result = next(action);
//           console.log('[Middleware] next state', store.getState());
//           return result;
//       }
//   }
// };

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer = combineReducers({
  counter: counter,
  auth:auth,

});
const initialState={
  counter:initialState_counter,
  auth:initialState_auth,
}
function initStore(preloadedState = initialState) {
  // try {
  //   console.log( store.getState());
  //   initialState=store.getState()
  // } catch (error) {
  //   console.log( "store not setup yeat");
  // }  
  return createStore(
    rootReducer,
    // { ...initialState,
    //   counter:{
    //     ...initialState.counter,
        
    //     count:preloadedState.counter.count,
    //     lastUpdate:preloadedState.counter.lastUpdate,
    //     light:preloadedState.counter.light,
    //   }
    // }
    preloadedState
    ,
    composeWithDevTools(applyMiddleware( thunk))
  )
}

export const initializeStore = (preloadedState) => {
  let _store = store ?? initStore(preloadedState)

  // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store
  if (preloadedState && store) {
    _store = initStore({
      ...store.getState(),
      ...preloadedState,
      counter:{
        ...store.getState().counter,
         ...preloadedState.counter
        // count:preloadedState.counter.count ?? store.getState().counter.count,
        // lastUpdate:preloadedState.counter.lastUpdate,
        // light:preloadedState.counter.light,
       
      },
      auth:{
        ...store.getState().auth,
        token: ((!preloadedState.auth || !preloadedState.auth.token)? store.getState().auth.token : preloadedState.auth.token),
      }
    })
    // Reset the current store
    store = undefined
  }

  // For SSG and SSR always create a new store
  if (typeof window === 'undefined') return _store
  // Create the store once in the client
  if (!store) store = _store

  return _store
}

export function useStore(initialState) {
  const store = useMemo(() => initializeStore(initialState), [initialState])
  return store
}

