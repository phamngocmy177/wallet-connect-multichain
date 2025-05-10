import { useConnectors} from 'wagmi'
import { useAppKitWallet } from "@reown/appkit-wallet-button/react";

export const useEvmConnectors = () => {
    const connectors = useConnectors()
    const connectorsList = connectors.map((connector) => ({
        id: connector.id,
        name: connector.name,
        icon: connector.icon,
        connector: connector,
        type: 'evm'
    }))
    return connectorsList
}