import { connect } from 'react-redux'
import { useEffect } from 'react'

import * as actions from '../store/actions/auth';
function IsAuthinticated(props) {

  const { onTryAutoSignup ,isAuthenticated ,AuthValue  } = props;
    //console.log("IsAuthinticated ",isAuthenticated)
    //console.log("IsAuthinticated AuthValue= ",AuthValue)
  useEffect(() => {
    console.log("IsAuthinticated useeffect run")
    onTryAutoSignup();
  }, [isAuthenticated]);

  return (<></>)
}
const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null,
    AuthValue: state.auth.token 
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState())
  };
};
export default 
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(IsAuthinticated);
