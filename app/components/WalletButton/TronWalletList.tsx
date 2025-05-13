import { AdapterName } from '@tronweb3/tronwallet-abstract-adapter';
import { useWallet, Wallet } from '@tronweb3/tronwallet-adapter-react-hooks';

const TronWalletList = () => {
    const { wallets, wallet, connect, disconnect, select } = useWallet();
    console.log('wallet', wallet)
    const connectors = wallets.map((wallet) => ({
        id: wallet.adapter.name,
        name: wallet.adapter.name,
        icon: wallet.adapter.icon,
        connector: wallet.adapter,
        type: 'tron'
    }))
    const handleConnect = async (wallet: AdapterName) => {
        select(wallet);
        await connect();
    }
    return (
        <div>
            {connectors.map((connector) => (
                <div key={connector.id}
                onClick={() => handleConnect(connector.id)}
                >{connector.name}</div>
            ))}
            <span>Connected Wallet: {wallet?.adapter.name} {wallet?.adapter.address}</span>
        </div>
    );
}

export default TronWalletList;