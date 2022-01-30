import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { searchTransactions } from '../../store/transactions/action'

export const useSearchTransactions = (searchString) => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(searchTransactions(searchString))
  }, [dispatch, searchString])

  return useSelector(state => state.transactions)
}
