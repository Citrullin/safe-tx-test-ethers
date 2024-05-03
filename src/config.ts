// This file can be used to play around with the Safe Core SDK
interface Config {
    CHAIN_ID: bigint
    RPC_URL: string
    SIGNER_ADDRESS_PRIVATE_KEY: string
    SAFE_ADDRESS: string
  }
  
  const config: Config = {
    CHAIN_ID: 11155111n,
    RPC_URL: 'https://rpc.ankr.com/eth_sepolia',
    SIGNER_ADDRESS_PRIVATE_KEY: '',
    SAFE_ADDRESS: ''.toLowerCase()
  }