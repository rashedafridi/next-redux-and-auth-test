import Page from '../components/page'
import { initializeStore } from '../store/store'

export default function SSR() {
  return <Page />
}

// The date returned here will be different for every request that hits the page,
// that is because the page becomes a serverless function instead of being statically
// exported when you use `getServerSideProps` or `getInitialProps`
export function getServerSideProps() {
  const reduxStore = initializeStore()
  const { dispatch } = reduxStore

  dispatch({
    type: 'TICK',
    light: false,
    lastUpdate: Date.now(),
  })
  try {
    dispatch({
    type: 'INCREMENT',
  })
  } catch (error) {
    console.log(error)
  }
  

  // return { props: { initialReduxState: reduxStore.getState() } }
  const redux= { ...reduxStore.getState() }
  // redux.auth.token="rashedafridi"
  console.log(redux)
  return { props: { initialReduxState: redux } }
}
