import "@/styles/globals.css";
import type { AppProps } from "next/app";

import { WagmiProvider } from "@/providers";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <WagmiProvider>
      <Component {...pageProps} />
    </WagmiProvider>
  );
}
