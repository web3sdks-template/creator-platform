import { ChainId, Web3sdksProvider } from "@web3sdks/react";
import { AppProps } from "next/dist/shared/lib/router/router";
import "../styles/globals.css";

const MyApp = ({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) => {
  return (
    <Web3sdksProvider
      desiredChainId={ChainId.Goerli}
      authConfig={{
        authUrl: "/api/auth",
        domain: "example.org",
        loginRedirect: "/create",
      }}
    >
      <Component {...pageProps} />
    </Web3sdksProvider>
  );
};

export default MyApp;
