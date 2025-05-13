'use client'

import { wagmiAdapter, projectId } from './config'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { createAppKit, Provider } from '@reown/appkit/react'
import { 
  mainnet, 
  arbitrum,
  solana,
  bitcoin
 } from '@reown/appkit/networks'
import React, { useMemo, type ReactNode } from 'react'
import { cookieToInitialState, WagmiProvider, type Config } from 'wagmi'
import { SolanaAdapter } from '@reown/appkit-adapter-solana';
import { BitcoinAdapter } from '@reown/appkit-adapter-bitcoin';
import { WalletProvider } from '@tronweb3/tronwallet-adapter-react-hooks';
import { 
  TronLinkAdapter,
  BybitWalletAdapter,
  LedgerAdapter,
  OkxWalletAdapter
} from '@tronweb3/tronwallet-adapters';
import { createConfig } from 'wagmi';

// Set up queryClient
const queryClient = new QueryClient()

if (!projectId) {
  throw new Error('Project ID is not defined')
}

// Set up metadata
const metadata = {
  name: 'appkit-example',
  description: 'AppKit Example',
  url: 'https://appkitexampleapp.com', // origin must match your domain & subdomain
  icons: ['https://avatars.githubusercontent.com/u/179229932']
}
const bitcoinAdapter = new BitcoinAdapter({
  projectId
})
const solanaWeb3JsAdapter = new SolanaAdapter()
console.log('projectId', projectId)
function ContextProvider({ children, cookies }: { children: ReactNode; cookies: string | null }) {
  const initialState = cookieToInitialState(wagmiAdapter.wagmiConfig as Config, cookies)
  const tronAdapters = useMemo(() => [
    new TronLinkAdapter(), 
    new BybitWalletAdapter(),
    new LedgerAdapter(),
    new OkxWalletAdapter(),
  ], []);

// Create the modal
createAppKit({
  adapters: [
    wagmiAdapter, 
    bitcoinAdapter, 
    solanaWeb3JsAdapter
  ],
  projectId: '217c99d2a389b13bb681f37e5c89274b',
  networks: [mainnet, arbitrum, solana, bitcoin],
  defaultNetwork: mainnet,
  metadata: metadata,
  features: {
    analytics: true // Optional - defaults to your Cloud configuration
  }
})
// modal.setD
  const onError = (error: Error) => { 
    console.error('error', error);
  }
  return (
      <WalletProvider adapters={tronAdapters} autoConnect={false} onError={onError}>
        <WagmiProvider config={wagmiAdapter.wagmiConfig as Config}>
          <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
        </WagmiProvider>
      </WalletProvider>
  )
}

export default ContextProvider