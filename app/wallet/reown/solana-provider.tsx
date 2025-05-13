// 'use client'

// import { SolanaAdapter } from '@reown/appkit-adapter-solana'
// import {
//     solana
// } from '@reown/appkit/networks'
// import { createAppKit } from '@reown/appkit/react'
// import { type ReactNode } from 'react'
// import { projectId } from './config'
// import { useAppKitWallet } from '@reown/appkit-wallet-button/react'
// import { AppKitProvider } from './appkit-provider'

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

// const solanaWeb3JsAdapter = new SolanaAdapter()
// console.log('projectId', projectId)
// function SolanaProvider({ children }: { children: ReactNode }) {
//   const {data} = useAppKitWallet()
//   console.log('data', data)
// // Create the modal
// const config = ({
//   adapters: [ 
//     solanaWeb3JsAdapter
//   ],
//   projectId: '217c99d2a389b13bb681f37e5c89274b',
//   networks: [solana],
//   defaultNetwork: solana,
//   metadata: metadata,
//   features: {
//     analytics: true // Optional - defaults to your Cloud configuration
//   }
// })

//   return (
//     <AppKitProvider config={config}> 
//         {children}
//     </AppKitProvider>
//   )
// }

// export default SolanaProvider