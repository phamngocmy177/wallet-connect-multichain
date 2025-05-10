'use client'
import * as React from 'react';
import WalletModal from '../WalletModal';
import useWalletStore from '@/app/stores/wallet-store';

const WalletButton = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const handleConnect = () => {
        setIsOpen(true);
    }
    const { connectedWallets } = useWalletStore();
    return (
        <>
            <button onClick={handleConnect}>Connect</button>
            <WalletModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
            {connectedWallets.map((wallet) => (
                <div key={wallet.id} className='flex flex-row gap-4 justify-start items-center'>
                    <p>{wallet.address}</p>
                    <p>{wallet.network}</p>
                </div>
            ))}
        </>
    )
}

export default WalletButton
