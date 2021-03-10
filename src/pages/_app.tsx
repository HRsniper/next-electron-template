import type { AppProps } from "next/app";

import { VersionContextProvider } from "../contexts/VersionContext";

import "../styles/global.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <VersionContextProvider nextVersion="10" electronVersion="12">
      <Component {...pageProps} />
    </VersionContextProvider>
  );
}

export default MyApp;
