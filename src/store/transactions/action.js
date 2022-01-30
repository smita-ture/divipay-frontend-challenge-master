import categories from '../../data/categories.json';
import merchants from '../../data/merchants.json';
import transactions from '../../data/transactions.json';
import _ from "lodash"

export const transactionType = {
  GET_TRANSACTIONS: 'GET_TRANSACTIONS'
}

export const setTransactionsToDispatch = (transactions) => {
  return { type: transactionType.GET_TRANSACTIONS, transactions }
}

export const getTransactions = () => (dispatch, getState) => {
  const data = _.cloneDeep(transactions)
  data && data.map((d) => {
    d.merchant =  merchants && merchants.filter((merchant) => merchant?.id === d?.merchant).map(m => m?.name).join()
    d.category = categories && categories.filter((category) => category?.id === d?.category).map(c => c?.name).join()
    })
  dispatch(setTransactionsToDispatch(data))
}

export const searchTransactions = (searchString) => (dispatch) => {
    const data = _.cloneDeep(transactions)

    data && data.map((d) => {
        d.merchant =  merchants && merchants.filter((merchant) => merchant?.id === d?.merchant).map(m => m?.name).join()
        d.category = categories && categories.filter((category) => category?.id === d?.category).map(c => c?.name).join()
        })
        
    const newTransactions = data.filter(element => {
        for (const property in element) {
            if ((element.hasOwnProperty(property)) && (property === 'merchant' || property === 'team_member'|| property === 'category' || property === 'budget' || property === 'amount' || property === 'gst')) {
                if((element[`${property}`].toString().toLowerCase().includes(searchString.toLowerCase())) ) {
                    return true;
                }
            }
        }
    })

    dispatch(setTransactionsToDispatch(newTransactions))
}