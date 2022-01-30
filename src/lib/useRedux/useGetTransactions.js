import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getTransactions } from '../../store/transactions/action'

export const useGetTransactions = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getTransactions())
  }, [dispatch])

  return useSelector(state => state.transactions)
}
