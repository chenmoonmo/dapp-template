import { client } from "@/config";
import { FC, PropsWithChildren } from "react";
import { WagmiConfig } from "wagmi";

const WagmiProvider: FC<PropsWithChildren> = ({ children }) => {
  return <WagmiConfig client={client}>{children}</WagmiConfig>;
};

export default WagmiProvider;
