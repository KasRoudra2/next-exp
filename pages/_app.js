import '../styles/globals.css';
import theme from "../src/theme";

function MyApp({ Component, pageProps }) {
  return <Component theme={theme} {...pageProps} />
}

export default MyApp
