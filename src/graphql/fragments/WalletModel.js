import { gql } from '@apollo/client';
export const WALLET = gql`
  fragment WalletModel on Wallet {
    id
    public_key
    key_store
  }
`
export const COLLECTION = gql`
  fragment CollectionModel on Collection {
    id
    companyName
    name
    symbol
    maxBatchSize
    collectionAddress
    collectionId
    createdAt
    isMint
  }
`
export const NFT = gql`
  fragment NftModel on Nft {
    id
    name
    description
    category
    tokenURI
    collectionAddress
    loyalty
    createdAt
    collection{
      ...CollectionModel
    }
  }
  ${COLLECTION}
`

export const PAYPALOPTIONS = gql`
  fragment PaypalOptionsModel on PaypalOptions {
    clientId
  }
`
export const PAYMENTOPTIONS = gql`
  fragment PaymentOptionsModel on PaymentOptions {
    paypal{
      ...PaypalOptionsModel
    }
  }
  ${PAYPALOPTIONS}
`

export const TRANSFER = gql`
  fragment TransferModel on Transfer {
    id
      orderID
      gateway
      status
      wallet
      summary
      amount
      m_amount
      currency
      catureData
      transferRes
      createdAt
  }
`