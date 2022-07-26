import { Provider } from "react-redux";
import { store } from "../redux";
//jsx pages
import Layout from "../jxs/pages/Layout/Layout.jsx";
//styles
import { GlobalStyles } from "../styles/globalStyles";
// import { ThemeProvider } from 'styled-components'

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
