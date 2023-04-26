import { useAccount, useConnect, useEnsName } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";

const useAppConnect = () => {
  const { connect, connectors } = useConnect();
  
};

export default useAppConnect;
