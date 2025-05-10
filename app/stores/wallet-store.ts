import { create } from "zustand";
interface Wallet {
    id: string;
    address: string;
    network: number | string;
    connector: any;
}

interface WalletState {
    connectedWallets: Wallet[];
    connectWallet: (wallet: Wallet) => void;
    disconnectWallet: (wallet: Wallet) => void; 
}

const useWalletStore = create<WalletState>((set) => ({
    connectedWallets: [],
    connectWallet: (wallet) => set((state) => ({
        connectedWallets: [...state.connectedWallets, wallet],
    })),
    disconnectWallet: (wallet) => set((state) => ({
        connectedWallets: state.connectedWallets.filter((w) => w.id !== wallet.id),
    })),
}))

export default useWalletStore;