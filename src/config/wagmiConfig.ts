import { configureChains, createClient, mainnet } from "wagmi";
import { publicProvider } from "wagmi/providers/public";

import { CoinbaseWalletConnector } from "wagmi/connectors/coinbaseWallet";
import { InjectedConnector } from "wagmi/connectors/injected";
import { LedgerConnector } from "wagmi/connectors/ledger";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import { WalletConnectLegacyConnector } from "wagmi/connectors/walletConnectLegacy";

const { chains, provider, webSocketProvider } = configureChains(
  [mainnet],
  [publicProvider()]
);

const connectors = [
  new MetaMaskConnector({
    chains,
    options: {
      UNSTABLE_shimOnConnectSelectAccount: true,
    },
  }),
  new CoinbaseWalletConnector({
    chains,
    options: {
      appName: "wagmi",
    },
  }),
  new WalletConnectLegacyConnector({
    chains,
    options: {
      qrcode: true,
    },
  }),
  new LedgerConnector({
    chains,
  }),
  new InjectedConnector({
    chains,
    options: {
      name: (detectedName) =>
        `Injected (${
          typeof detectedName === "string"
            ? detectedName
            : detectedName.join(", ")
        })`,
      shimDisconnect: true,
    },
  }),
];

const client = createClient({
  autoConnect: true,
  provider,
  webSocketProvider,
  connectors,
});

export { chains, client, connectors as const };
