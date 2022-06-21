
import { request, GraphQLClient } from 'graphql-request';
import { AddOrUpdateWallet } from '../../graphql/user/wallet';
import { AddUser, ChangePassword, ForgotPassword, GenerateAccessToken, GET_USERINFO, VerifyAccount } from '../../graphql/user/me'

export default function getUserInfo(token) {
  const accessToken = window.localStorage.getItem('accessToken')
  const client = new GraphQLClient(process.env.REACT_APP_BACKEND_ENDPOPINT + '/graphql', {
    headers: {
      Authorization: `${token}`,
    },
  });
  return client.request(GET_USERINFO)
    .then((data) => data.me);
}

export function generateAccessToken(loginData) {
  const client = new GraphQLClient(process.env.REACT_APP_BACKEND_ENDPOPINT + '/graphql', {
    headers: {
      //   Authorization: `Bearer ${token}`,
    },
  });
  return client.request(GenerateAccessToken, { data: loginData })
    .then((data) => {
      if (data.errors) throw data.generateAccessToken.errors
      return data.generateAccessToken
    });
}

export function addOrUpdateWallet(data) {
  const accessToken = window.localStorage.getItem('accessToken')
  const client = new GraphQLClient(process.env.REACT_APP_BACKEND_ENDPOPINT + '/graphql', {
    headers: {
      Authorization: accessToken,
    },
  });
  return client.request(AddOrUpdateWallet, { data })
    .then((data) => {
      if (data.errors) throw data.addOrUpdateWallet.errors
      return data.addOrUpdateWallet
    });
}

export function addUser(data) {
  // const accessToken = window.localStorage.getItem('accessToken')
  const client = new GraphQLClient(process.env.REACT_APP_BACKEND_ENDPOPINT + '/graphql', {
    headers: {
      // Authorization: accessToken,
    },
  });
  console.log('signup data', data)
  return client.request(AddUser, { data })
    .then((data) => {
      if (data.errors) throw data.addUser.errors
      return data.addUser
    });
}

export function verifyAccount(code) {
  // const accessToken = window.localStorage.getItem('accessToken')
  const client = new GraphQLClient(process.env.REACT_APP_BACKEND_ENDPOPINT + '/graphql', {
    headers: {
      // Authorization: accessToken,
    },
  });
  return client.request(VerifyAccount, { code })
    .then((data) => {
      if (data.errors) throw data.verifyAccount.errors
      return data.verifyAccount
    });
}
export function forgotPassword(email) {
  // const accessToken = window.localStorage.getItem('accessToken')
  const client = new GraphQLClient(process.env.REACT_APP_BACKEND_ENDPOPINT + '/graphql', {
    headers: {
      // Authorization: accessToken,
    },
  });
  return client.request(ForgotPassword, { email })
    .then((data) => {
      if (data.errors) throw data.forgotPassword.errors
      return data.forgotPassword
    });
}

export function changePassword(vcid, password) {
  // const accessToken = window.localStorage.getItem('accessToken')
  const client = new GraphQLClient(process.env.REACT_APP_BACKEND_ENDPOPINT + '/graphql', {
    headers: {
      // Authorization: accessToken,
    },
  });
  return client.request(ChangePassword, { vcid, password })
    .then((data) => {
      if (data.errors) throw data.changePassword.errors
      return data.changePassword
    });
}