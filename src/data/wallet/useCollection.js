
import { request, GraphQLClient } from 'graphql-request';
import { AddNfts, AddOrUpdateCollection, AddOrUpdateTransfer, GetMyCollections, GetMyNfts, GetMyTransfers, PyamentOptions } from '../../graphql/user/wallet';



export default function addOrUpdateCollection(data) {
  const accessToken = window.localStorage.getItem('accessToken')
  const client = new GraphQLClient(process.env.REACT_APP_BACKEND_ENDPOPINT + '/graphql', {
    headers: {
      Authorization: accessToken,
    },
  });
  return client.request(AddOrUpdateCollection, { data })
    .then((data) => {
      console.log("testtest", data)
      if (data.errors) throw data.errors[0]

      return data.addOrUpdateCollection
    }).catch(e => {
      console.log({ e })
      if (e.response.errors) {
        throw e.response.errors[0]
      }
      throw e
    });
}
export function getMyCollections() {
  const accessToken = window.localStorage.getItem('accessToken')
  const client = new GraphQLClient(process.env.REACT_APP_BACKEND_ENDPOPINT + '/graphql', {
    headers: {
      Authorization: accessToken,
    },
  });
  return client.request(GetMyCollections)
    .then((data) => {
      console.log("testtest", data)
      if (data.errors) throw data.errors[0]
      return data.getMyCollections
    }).catch(e => {
      console.log({ e })
      if (e.response.errors) {
        throw e.response.errors[0]
      }
      throw e
    });
}


export function addNfts(data) {
  const accessToken = window.localStorage.getItem('accessToken')
  const client = new GraphQLClient(process.env.REACT_APP_BACKEND_ENDPOPINT + '/graphql', {
    headers: {
      Authorization: accessToken,
    },
  });
  return client.request(AddNfts, { data })
    .then((data) => {
      console.log("testtest", data)
      if (data.errors) throw data.errors[0]

      return data.addNfts
    }).catch(e => {
      console.log({ e })
      if (e.response.errors) {
        throw e.response.errors[0]
      }
      throw e
    });
}

export function getMyNfts() {
  const accessToken = window.localStorage.getItem('accessToken')
  const client = new GraphQLClient(process.env.REACT_APP_BACKEND_ENDPOPINT + '/graphql', {
    headers: {
      Authorization: accessToken,
    },
  });
  return client.request(GetMyNfts)
    .then((data) => {
      console.log("testtest", data)
      if (data.errors) throw data.errors[0]
      return data.getMyNfts
    }).catch(e => {
      console.log({ e })
      if (e.response.errors) {
        throw e.response.errors[0]
      }
      throw e
    });
}

export function paymentOptions() {
  const accessToken = window.localStorage.getItem('accessToken')
  const client = new GraphQLClient(process.env.REACT_APP_BACKEND_ENDPOPINT + '/graphql', {
    headers: {
      Authorization: accessToken,
    },
  });
  return client.request(PyamentOptions)
    .then((data) => {
      console.log("testtest", data)
      if (data.errors) throw data.errors[0]
      return data.paymentOptions
    }).catch(e => {
      console.log({ e })
      if (e.response.errors) {
        throw e.response.errors[0]
      }
      throw e
    });
}

export function addOrUpdateTransfer(data) {
  const accessToken = window.localStorage.getItem('accessToken')
  const client = new GraphQLClient(process.env.REACT_APP_BACKEND_ENDPOPINT + '/graphql', {
    headers: {
      Authorization: accessToken,
    },
  });
  return client.request(AddOrUpdateTransfer, { data })
    .then((data) => {
      console.log("testtest", data)
      if (data.errors) throw data.errors[0]
      return data.addOrUpdateCollection
    }).catch(e => {
      console.log({ e })
      if (e.response.errors) {
        throw e.response.errors[0]
      }
      throw e
    });
}

export function getMyTransfers() {
  const accessToken = window.localStorage.getItem('accessToken')
  const client = new GraphQLClient(process.env.REACT_APP_BACKEND_ENDPOPINT + '/graphql', {
    headers: {
      Authorization: accessToken,
    },
  });
  return client.request(GetMyTransfers)
    .then((data) => {
      console.log("testtest", data)
      if (data.errors) throw data.errors[0]
      return data.getMyTransfers
    }).catch(e => {
      console.log({ e })
      if (e.response.errors) {
        throw e.response.errors[0]
      }
      throw e
    });
}