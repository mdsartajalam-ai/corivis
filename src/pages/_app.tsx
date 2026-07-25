import store from "@/redux";
import "@/styles/globals.css";
import { Provider } from "react-redux";
import type { AppProps } from "next/app";
import "react-toastify/dist/ReactToastify.css";
import Layout from "@/components/layout/Layout";
import { ToastContainer } from "react-toastify";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
        <ToastContainer
          draggable
          rtl={false}
          closeOnClick
          pauseOnHover
          autoClose={5000}
          pauseOnFocusLoss
          newestOnTop={false}
          hideProgressBar={false}
          position="bottom-right"
        />
      </Layout>
    </Provider>
  );
}