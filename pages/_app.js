import '../styles/globals.scss'
import Layout from '../src/layout/Mainlayout'
import { Provider } from 'react-redux'
import store from '../store'

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}

export default MyApp
