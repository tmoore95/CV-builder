import "../styles/globals.css";
import { CvContextProvider } from "../store/cv-context";

function MyApp({ Component, pageProps }) {
  return (
    <CvContextProvider>
      <Component {...pageProps} />
    </CvContextProvider>
  );
}

export default MyApp;
