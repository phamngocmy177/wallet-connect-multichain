'use client'

import React from 'react';
import { useAppKitWallet, createAppKitWalletButton, Wallet } from "@reown/appkit-wallet-button/react";
import { useWalletList, } from '../../wallet/wallet-list';
import { useConnect } from 'wagmi';
import { useWallet } from '@tronweb3/tronwallet-adapter-react-hooks';
import { TronLinkAdapterName } from '@tronweb3/tronwallet-adapters';
import useWalletStore from '@/app/stores/wallet-store';
import { useAppKitAccount, useWalletInfo } from '@reown/appkit/react';
import SolanaWalletButtons from './SolanaWalletButtons';
import EVMWalletButtons from './EVMWalletButtons';
interface WalletModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const WalletModal: React.FC<WalletModalProps> = ({ isOpen, onClose }) => {
    // const { wallet: tronWallet, disconnect, select, connect: tronConnect } = useWallet();
    // const { walletInfo } = useWalletInfo()
    // console.log('walletInfo', walletInfo)
const eip155Account = useAppKitAccount({ namespace: "eip155" }); // for EVM chains
const solanaAccount = useAppKitAccount({ namespace: "solana" });
const bip122Account = useAppKitAccount({ namespace: "bip122" }); // for bitcoin
console.log('eip155Account', eip155Account)
console.log('solanaAccount', solanaAccount)
console.log('bip122Account', bip122Account)
    const { connect, data } = useAppKitWallet();
    console.log('data', data)
    const { connectWallet } = useWalletStore();
    if (!isOpen) return null;
    const handleConnect = async (connector: any) => {
        connector.connector.disconnect()
        if (connector.type === "tron") {
            // select(TronLinkAdapterName)
            // await tronConnect();
            // connectWallet({
            //     id: connector.id,
            //     address: tronWallet?.adapter.address || '',
            //     network: 'tron',
            //     connector: connector.connector
            // })
            return;
        }
        if (connector.type === "evm") {
            await connect('metamask');
            if(data) {
                connectWallet({
                    id: connector.id,
                    address: data.address,
                    network: data.chainId,
                    connector: connector.connector
                })
            }
            // const connectedAccount = await connectAsync({ connector: connector.connector });
            // if (connectedAccount) {
            //     connectWallet({
            //         id: connector.id,
            //         address: connectedAccount?.accounts?.[0] || '',
            //         network: connectedAccount?.chainId || '',
            //         connector: connector.connector
            //     })
            // }
            return;
        }
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            {/* Backdrop */}
            <div
                className="fixed inset-0 bg-black/50"
                onClick={onClose}
            />

            {/* Modal */}
            <div className="relative bg-white/10 rounded-lg w-full max-w-md mx-4 p-6">
                {/* Header */}
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-semibold">Connect Wallet</h2>
                    <button
                        onClick={onClose}
                        className="text-gray-500 hover:text-gray-700"
                    >
                        ✕
                    </button>
                </div>
                {/* <SolanaWalletButtons /> */}
                <EVMWalletButtons />
                {/* <appkit-wallet-button wallet="phantom" /> */}
                {/* Wallet Options */}
                {/* <div className='flex flex-col gap-4 justify-start items-center'>
                    {connectors.map((connector) => (
                        <button key={connector.id} onClick={() => handleConnect(connector)}
                            className='flex flex-row gap-2 justify-between items-center w-full'
                        >
                            <div className='flex flex-row gap-2 justify-start items-center'>
                            {connector.icon ?
                                <img src={connector.icon} alt={connector.name} className='w-10 h-10' />
                                : null}
                            <span className='text-sm'>{connector.type}</span>
                            </div>
                            <span className='text-sm'>{connector.name}</span>
                        </button>
                    ))}
                </div> */}
            </div>
        </div>
    );
};

export default WalletModal;
