import { gql } from '@apollo/client';
import { USER } from './UserModeal';

export const TOKEN_RESPONSE = gql`
  fragment TokenResponseModel on tokenResponse {
    token
    user{
        ...UserModel
    }
  }
  ${USER}
`