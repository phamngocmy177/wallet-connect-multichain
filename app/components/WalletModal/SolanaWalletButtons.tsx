'use client'
import SolanaProvider from "@/app/wallet/reown/solana-provider"
import { walletButtonList, walletListByType } from "@/app/wallet/wallet-list/wallet-button-list"
import { useAppKitWallet, Wallet } from "@reown/appkit-wallet-button/react";

const SolanaWalletButtons = () => {
    const { connect } = useAppKitWallet();
    const handleConnect = (wallet: Wallet) => {
        connect(wallet);
    }
    return (
        <div className="grid grid-cols-4 gap-4">
            {walletListByType.SolanaWalletButtons.map((wallet) => (
                <div key={wallet} className="col-span-1">
                    Solana
                    <button onClick={() => handleConnect(wallet)}>Connect {wallet}</button>
                {/* <appkit-wallet-button wallet={wallet as Wallet} /> */}
                </div>
            ))}
        </div>
    )
}

export default SolanaWalletButtons