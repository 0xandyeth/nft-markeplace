import { InjectedConnector } from '@web3-react/injected-connector'
import { WalletConnectConnector } from '@web3-react/walletconnect-connector'

const RPC_URLS = {
    137: process.env.RPC_URL_137,
    80001: process.env.RPC_URL_80001
  }

  export const injected = new InjectedConnector({
    supportedChainIds: [137, 80001]
  })

  export const walletConnect = new WalletConnectConnector({
    rpc: {
      137: RPC_URLS[137],
      80001: RPC_URLS[80001]
    },
    bridge: 'https://bridge.walletconnect.org',
    qrcode: true
  })