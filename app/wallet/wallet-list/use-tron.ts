import { useWallet } from '@tronweb3/tronwallet-adapter-react-hooks';

const useTron = () => {
    const { wallets, wallet: tronWallet, disconnect, select, connect } = useWallet();
    const connectors = wallets.map((wallet) => ({
        id: wallet.adapter.name,
        name: wallet.adapter.name,
        icon: wallet.adapter.icon,
        connector: wallet.adapter,
        connect: () => connect(),
        disconnect: () => disconnect()
    }))
    return connectors;
}

export default useTron;