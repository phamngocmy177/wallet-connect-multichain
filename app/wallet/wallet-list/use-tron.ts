import { useWallet } from '@tronweb3/tronwallet-adapter-react-hooks';

const useTron = () => {
    const { wallets } = useWallet();
    const connectors = wallets.map((wallet) => ({
        id: wallet.adapter.name,
        name: wallet.adapter.name,
        icon: wallet.adapter.icon,
        connector: wallet.adapter,
        type: 'tron'
    }))
    return connectors;
}

export default useTron;