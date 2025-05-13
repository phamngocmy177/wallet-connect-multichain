'use client'
import EmvProvider from "@/app/wallet/reown/emv-provider"
import { walletButtonList, walletListByType } from "@/app/wallet/wallet-list/wallet-button-list"
import { Wallet } from "@reown/appkit-wallet-button"
import { useAppKitWallet } from "@reown/appkit-wallet-button/react";
const EVMWalletButtons = () => {
    const { connect } = useAppKitWallet();
    const handleConnect = (wallet: Wallet) => {
        connect(wallet);
    }
    return (
        <div className="grid grid-cols-4 gap-4">
            {walletListByType.EvmWalletButtons.map((wallet) => (
                <div key={wallet} className="col-span-1">
                    EVM
                    <button onClick={() => handleConnect(wallet)}>Connect {wallet}</button>
                    {/* <appkit-wallet-button wallet={wallet as Wallet} /> */}
                </div>
            ))}
            </div>
    )
}

export default EVMWalletButtons