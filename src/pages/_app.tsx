import "@/styles/globals.css";
import type { AppProps } from "next/app";

import { WagmiProvider } from "@/providers";
import { Provider } from "jotai";
import { store } from "@/atoms";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <WagmiProvider>
        <Component {...pageProps} />
      </WagmiProvider>
    </Provider>
  );
}
