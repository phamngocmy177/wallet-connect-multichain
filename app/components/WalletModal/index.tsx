'use client'

import React from 'react';
import { useAppKitWallet } from "@reown/appkit-wallet-button/react";
import { useWalletList } from '../../wallet/wallet-list';
import { useConnect } from 'wagmi';
import { useWallet } from '@tronweb3/tronwallet-adapter-react-hooks';
import { TronLinkAdapterName } from '@tronweb3/tronwallet-adapters';

interface WalletModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const WalletModal: React.FC<WalletModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  const { connectAsync } = useConnect();
  const { wallets, wallet: tronWallet, disconnect, select, connect: tronConnect } = useWallet();
  const connectors = useWalletList();
  const { connect , data} = useAppKitWallet();
  const handleConnect = async (connector: any) => {
    connector.connector.disconnect()
    if(connector.id === "TronLink") {
        console.log(connector.connector, tronWallet);
        // select(connector.connector.name);
        select(TronLinkAdapterName)
        // await connector.connector.connect()
        tronConnect()
        // connect('TronLink')
        // return;
    }
    if(connector.id === "walletConnect") {
        connect('walletConnect')
        return;
    }
    await connectAsync({ connector });
  }
  console.log(data);
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

        {/* Wallet Options */}
        <div className='flex flex-col gap-4'>
        {connectors.map((connector) => (
          <button key={connector.id} onClick={() => handleConnect(connector)}>
            {connector.name}
          </button>
        ))}
        </div>
      </div>
    </div>
  );
};

export default WalletModal;
