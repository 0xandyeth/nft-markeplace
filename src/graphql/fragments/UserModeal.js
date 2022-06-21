import { gql } from '@apollo/client';
import { WALLET } from './WalletModel';

export const USER = gql`
  fragment UserModel on User {
    email
    name
    company_name
    address
    isApproved
    isVerify
    wallet{
      ...WalletModel
    }
  }
  ${WALLET}
`