import { gql } from '@apollo/client';
import { TOKEN_RESPONSE } from '../fragments/TokenResponse';
import { USER } from '../fragments/UserModeal';

export const GET_USERINFO = gql`
  query me{
    me {
      ...UserModel
    }
  }
  ${USER}
`;

export const GenerateAccessToken = gql`
  mutation generateAccessToken($data: LoginInput!) {
    generateAccessToken(data:$data) {
      ...TokenResponseModel
    }
  }
  ${TOKEN_RESPONSE}
`;


export const AddUser = gql`
  mutation addUser($data:RegistrationInput! ){
    addUser(data:$data){
      ...UserModel
    }
  }
  ${USER}
`;

export const VerifyAccount = gql`
  mutation verifyAccount($code:String! ){
    verifyAccount(code:$code){
      ...UserModel
    }
  }
  ${USER}
`;

export const ChangePassword = gql`
  mutation changePassword($vcid:ID!, $password:String! ){
    changePassword(vcid:$vcid, password:$password)
  }
`;

export const ForgotPassword = gql`
  query forgotPassword($email:String! ){
    forgotPassword(email:$email)
  }
`;