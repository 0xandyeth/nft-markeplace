import { useState, useCallback } from 'react'
import Web3 from 'web3'
import BigNumber from 'bignumber.js'
import { getBalanceNumber } from '../utils/formatBalance'
import { useWeb3React } from '@web3-react/core'


const useEther = () => {
    const { account, chainId } = useWeb3React()
    const [etherAmount, setEtherAmount] = useState('0')
    const provider = window.ethereum;
    const web3 = new Web3(provider)



    const getEtherBalance = useCallback(
      async (provider, account) => {
        const web3 = new Web3(provider)
        const balance = await web3.eth.getBalance(account)
        console.log('balance=>', balance)
        setEtherAmount(getBalanceNumber(new BigNumber(balance)).toFixed(3))
      },
      []
    )


    return {
      etherAmount,
      getEtherBalance,
    }
  }
  
  export default useEther