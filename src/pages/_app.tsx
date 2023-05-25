import React, { useMemo } from "react";
import type { AppProps } from "next/app";
import dynamic from "next/dynamic";
import { ConnectionProvider } from "@solana/wallet-adapter-react";
import { GlowWalletAdapter, PhantomWalletAdapter, SlopeWalletAdapter, SolflareWalletAdapter, TorusWalletAdapter } from "@solana/wallet-adapter-wallets";
import ClientWalletProvider from "../components/ClientWalletProvider";
import { NETWORK } from "../components/utility/endpoint";
import 'react-toastify/dist/ReactToastify.css';

import "../styles/globals.css";

const ReactUIWalletModalProviderDynamic = dynamic(
  async () =>
    (await import("@solana/wallet-adapter-react-ui")).WalletModalProvider,
  { ssr: false }
);


function MyApp({ Component, pageProps }: AppProps) {

  const wallets = useMemo(() => [new PhantomWalletAdapter(), new GlowWalletAdapter(), new SlopeWalletAdapter(), new TorusWalletAdapter()], [NETWORK])


  return (
    <ConnectionProvider endpoint={NETWORK}>
      <ClientWalletProvider wallets={wallets}>
        <ReactUIWalletModalProviderDynamic>
          <Component {...pageProps} />
        </ReactUIWalletModalProviderDynamic>
      </ClientWalletProvider>
    </ConnectionProvider>
  );
}

export default MyApp;
