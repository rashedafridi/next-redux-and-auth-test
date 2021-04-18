import Page from '../components/page'
import { connect } from 'react-redux'
import { useEffect } from 'react'

import * as actions from '../store/actions/auth';
function Index(props) {

  const { onTryAutoSignup } = props;

  // useEffect(() => {
  //   console.log("index useeffect run")
  //   onTryAutoSignup();
  // }, [onTryAutoSignup]);

  return <Page />
}
const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
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
  )(Index);
