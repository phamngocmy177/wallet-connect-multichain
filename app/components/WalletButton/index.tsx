// 'use client'
// import * as React from 'react';
// import WalletModal from '../WalletModal';
// import useWalletStore from '@/app/stores/wallet-store';

// const WalletButton = () => {
//     const [isOpen, setIsOpen] = React.useState(false);
//     const handleConnect = () => {
//         setIsOpen(true);
//     }
//     const { connectedWallets } = useWalletStore();
//     return (
//         <>
//             <button onClick={handleConnect}>Connect</button>
//             <WalletModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
//             {connectedWallets.map((wallet) => (
//                 <div key={wallet.id} className='flex flex-row gap-4 justify-start items-center'>
//                     <p>{wallet.address}</p>
//                     <p>{wallet.network}</p>
//                 </div>
//             ))}
//         </>
//     )
// }

// export default WalletButton
import { useAppKitWallet } from "@reown/appkit-wallet-button/react";
import { useAppKit, useAppKitAccount, useAppKitNetwork } from "@reown/appkit/react";
import { useState } from "react";
import TronWalletList from "./TronWalletList";

const WalletList = () => {
    const [showTron, setShowTron] = useState(false);
    const { connect } = useAppKitWallet();
    const { open } = useAppKit();
    const eip155Account = useAppKitAccount({ namespace: "eip155" }); // for EVM chains
    const solanaAccount = useAppKitAccount({ namespace: "solana" });
    const bip122Account = useAppKitAccount({ namespace: "bip122" }); // for bitcoin

    return (
        <div>
            <div className="w-40 border border-grey"
            onClick={() => open({
                view: 'Connect',
               namespace: 'eip155'
            })}
            >   
                EVM
            </div>
            <div className="w-full border border-grey">
                Connected Account EVM: {eip155Account?.address}
            </div>
            <div className="w-40 border border-grey"
            onClick={() => open({
                view: 'Connect',
               namespace: 'solana'
            })}>
                SOLANA
            </div>
            <div className="w-full border border-grey">
                Connected Account SOLANA: {solanaAccount?.address}
            </div>
            <div className="w-40 border border-grey"
                onClick={() => open({
                view: 'Connect',
               namespace: 'bip122'
            })}>
                BITCOIN
            </div>
            <div className="w-full border border-grey">
                Connected Account BITCOIN: {bip122Account?.address}
            </div>
            <div className="w-40 border border-grey"
                onClick={() => setShowTron(!showTron)}>
                Tron
            </div>
            {showTron ? <TronWalletList /> : null}
        </div>
    )
}

export default WalletList;