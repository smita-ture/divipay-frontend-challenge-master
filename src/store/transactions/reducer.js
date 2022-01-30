import { transactionType } from './action'

export const transactionsInitialState = {
  transactions: []
}

export default function reducer(state = transactionsInitialState, action) {
  switch (action.type) {
    case transactionType.GET_TRANSACTIONS: 
      return action
    default:
      return state
  }
}
