// import { useDispatch } from 'react-redux'
import { connect } from 'react-redux';
import * as actions from '../store/actions/auth';
import Page from '../components/page'
function login(props) {
  // const dispatch = useDispatch()

  // Tick the time every second
  // useInterval(() => {
  //   dispatch({
  //     type: 'TICK',
  //     light: true,
  //     lastUpdate: Date.now(),
  //   })
  // }, 5000)

  return (
    <>
     <Page />
  <div>token----------</div>
  <div>{props.token}</div>
  <div>token------------</div>
  <button onClick={()=> props.login('ras@gmail.com' , '123456789')}>login</button>
  
  <button onClick={props.logout} >logout</button>
    </>
  )
}
const mapStateToProps = state => {
  return {
      token: state.auth.token,
  }
};

const mapDispatchToProps = dispatch => {
  return {
      login: (email, password) => dispatch(actions.login(email, password)),
      logout: () => dispatch(actions.logout()),
      // onAddCounter: () => dispatch(actionCreators.add(10)),
      // onSubtractCounter: () => dispatch(actionCreators.subtract(15)),
      // onStoreResult: (result) => dispatch(actionCreators.storeResult(result)),
      // onDeleteResult: (id) => dispatch(actionCreators.deleteResult(id))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(login);