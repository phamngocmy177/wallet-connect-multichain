// 'use client'

// import {
//   arbitrum,
//   mainnet
// } from '@reown/appkit/networks'
// import { createAppKit } from '@reown/appkit/react'
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
// import { type ReactNode } from 'react'
// import { cookieToInitialState, WagmiProvider, type Config } from 'wagmi'
// import { projectId, wagmiAdapter } from './config'
// import { AppKitProvider } from './appkit-provider'

// // Set up queryClient
// const queryClient = new QueryClient()

// if (!projectId) {
//   throw new Error('Project ID is not defined')
// }

// // Set up metadata
// const metadata = {
//   name: 'appkit-example',
//   description: 'AppKit Example',
//   url: 'https://appkitexampleapp.com', // origin must match your domain & subdomain
//   icons: ['https://avatars.githubusercontent.com/u/179229932']
// }

// function EmvProvider({ children, cookies }: { children: ReactNode; cookies: string | null }) {
//   const initialState = cookieToInitialState(wagmiAdapter.wagmiConfig as Config, cookies)
//   // return children;
// // Create the modal
// const config = ({
//   adapters: [
//     wagmiAdapter, 
//   ],
//   projectId: '217c99d2a389b13bb681f37e5c89274b',
//   networks: [mainnet, arbitrum],
//   defaultNetwork: mainnet,
//   metadata: metadata,
//   features: {
//     analytics: true // Optional - defaults to your Cloud configuration
//   }
// })
  
//   return (
//     <AppKitProvider config={config}> 
//         <WagmiProvider config={wagmiAdapter.wagmiConfig as Config}>
//           <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
//         </WagmiProvider>
//         </AppKitProvider>
//   )
// }

// export default EmvProvider