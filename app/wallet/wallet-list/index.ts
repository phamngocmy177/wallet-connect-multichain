import { useEvmConnectors } from "./use-evm";
import useTron from "./use-tron";

export const useWalletList = () => {
    const connectors = useEvmConnectors();
    const tronConnectors = useTron();
    return [...connectors, ...tronConnectors];
}