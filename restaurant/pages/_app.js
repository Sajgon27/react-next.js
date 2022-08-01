import "../styles/globals.css";
import OrderProvider from "../store/OrderProvider";
import Head from "next/head";
function MyApp({ Component, pageProps }) {
  return (
    <OrderProvider>
      <Head>
        <script
          src="https://kit.fontawesome.com/94857ca773.js"
          crossorigin="anonymous"
        ></script>
      </Head>
      <Component {...pageProps} />
    </OrderProvider>
  );
}

export default MyApp;
