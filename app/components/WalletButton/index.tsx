'use client'
import * as React from 'react';
import WalletModal from '../WalletModal';

const WalletButton = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const handleConnect = () => {
        setIsOpen(true);
    }

    return (
        <>
            <button onClick={handleConnect}>Connect</button>
            <WalletModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
        </>
    )
}

export default WalletButton
