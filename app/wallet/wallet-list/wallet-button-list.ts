import { Wallet } from "@reown/appkit-wallet-button/react"
import { SocialProvider } from "@reown/appkit/react"

export const walletButtonList = {
  qrCode: ['walletConnect'],
  
  wallets: [
    'metamask',
    'trust', 
    'coinbase',
    'rainbow',
    'jupiter',
    'solflare',
    'coin98',
    'magic-eden',
    'backpack',
    'frontier', 
    'xverse',
    'okx',
    'bitget',
    'leather',
    'binance',
    'uniswap',
    'safepal',
    'bybit',
    'phantom',
    'ledger',
    'timeless-x',
    'safe',
    'zerion',
    'oneinch',
    'crypto-com',
    'imtoken',
    'kraken',
    'ronin',
    'robinhood',
    'exodus',
    'argent',
    'tokenpocket'
  ],

  socialLogins: [
    'google',
    'github', 
    'apple',
    'facebook',
    'x',
    'discord',
    'farcaster'
  ]
}

const walletListByType = {
    EvmWalletButtons: [
        'walletConnect',
        'metamask',
        'trust',
        'coinbase',
        'rainbow',
        'phantom'
      ] as Wallet[],
      SolanaWalletButtons: [
        'walletConnect',
        'metamask',
        'trust',
        'coinbase',
        'jupiter',
        'solflare',
        'phantom',
        'coin98',
        'magic-eden',
        'backpack',
        'frontier'
      ] as Wallet[],
      BitcoinWalletButtons: ['walletConnect', 'xverse', 'leather', 'okx', 'phantom'] as Wallet[],
      Socials: [
        'google',
        'github',
        'apple',
        'facebook',
        'x',
        'discord',
        'farcaster'
      ] as SocialProvider[],
      Email: 'email' as const
}
export {walletListByType};