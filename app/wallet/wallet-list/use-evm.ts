import { useConnectors} from 'wagmi'

export const useEvmConnectors = () => {
    const connectors = useConnectors()
    const connectorsList = connectors.map((connector) => ({
        id: connector.id,
        name: connector.name,
        icon: connector.icon,
        connector: connector
    }))
    return connectorsList
}