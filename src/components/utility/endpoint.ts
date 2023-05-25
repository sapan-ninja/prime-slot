import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { clusterApiUrl } from '@solana/web3.js';

export const SOLANA_MAIN = clusterApiUrl(WalletAdapterNetwork.Mainnet);
export const SOLANA_TEST = clusterApiUrl(WalletAdapterNetwork.Testnet);
export const SOLANA_DEV = clusterApiUrl(WalletAdapterNetwork.Devnet);

// You can use any of the other enpoints here
export const NETWORK = SOLANA_DEV;
