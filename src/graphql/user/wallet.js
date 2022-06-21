import { gql } from '@apollo/client';
import { COLLECTION, NFT, PAYMENTOPTIONS, TRANSFER, WALLET } from '../../graphql/fragments/WalletModel';

export const AddOrUpdateWallet = gql`
  mutation addOrUpdateWallet($data: WalletInput!){
    addOrUpdateWallet(data:$data){
        ...WalletModel
    }
  }
${WALLET}
`;
export const AddOrUpdateCollection = gql`
  mutation addOrUpdateCollection($data: CollectionInput!){
    addOrUpdateCollection(data:$data){
        ...CollectionModel
    }
  }
${COLLECTION}
`;

export const GetMyCollections = gql`
  query getMyCollections{
    getMyCollections{
        ...CollectionModel
    }
  }
${COLLECTION}
`;

export const GetMyNfts = gql`
  query getMyNfts{
    getMyNfts{
        ...NftModel
    }
  }
${NFT}
`;

export const AddNfts = gql`
  mutation addNfts($data: [NftInput!]){
    addNfts(data:$data){
      ...NftModel
    }
  }
${NFT}
`;

export const PyamentOptions = gql`
  query paymentOptions{
    paymentOptions{
        ...PaymentOptionsModel
    }
  }
${PAYMENTOPTIONS}
`;

export const AddOrUpdateTransfer = gql`
  mutation addOrUpdateTransfer($data: InputTransfer!){
    addOrUpdateTransfer(data:$data){
      ...TransferModel
    }
  }
${TRANSFER}
`;

export const GetMyTransfers = gql`
  query getMyTransfers{
    getMyTransfers{
      ...TransferModel
    }
  }
${TRANSFER}
`;