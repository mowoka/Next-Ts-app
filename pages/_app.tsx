import type { AppProps } from "next/app";
import ErrorBoundary from "../core/utilities/ErrorBoundary";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ErrorBoundary>
      <Component {...pageProps} />
    </ErrorBoundary>
  );
}

export default MyApp;
