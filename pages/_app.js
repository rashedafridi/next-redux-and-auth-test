import { Provider } from 'react-redux'
import { useStore } from '../store/store'
import IsAuthinticated from '../components/isAuthinticated';


export default function App({ Component, pageProps }) {
  
  const store = useStore(pageProps.initialReduxState)

  console.log("_app runed")

  return (
    <Provider store={store}>
      <Component {...pageProps} />
      <IsAuthinticated {...pageProps}/>
    </Provider>
  )
}
