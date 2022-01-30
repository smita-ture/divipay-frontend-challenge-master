import React from 'react';
import App from './App';
import { render } from "@testing-library/react";
import { useGetTransactions } from './lib/useRedux/useGetTransactions'
import { useSearchTransactions } from './lib/useRedux/useSearchTransactions'
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

jest.mock('./lib/useRedux/useGetTransactions', () => ({
  useGetTransactions: jest.fn()
}))

jest.mock('./lib/useRedux/useSearchTransactions', () => ({
  useSearchTransactions: jest.fn()
}))

let store;
const testData = [{
  amount: 7189,
  billable: false,
  budget: "Sales Team",
  category: "Entertainment",
  date: "2019-04-15T07:37:38",
  gst: 653.54,
  id: "4ca91d14-232c-493d-9b89-725b3a726a21",
  merchant: "Facebook",
  receipt: false,
  status: "complete",
  team_member: "Casey Tran"
},
{
  amount: 4983,
  billable: true,
  budget: "Marketing Team",
  category: "Entertainment",
  date: "2019-05-23T20:35:58",
  gst: 453,
  id: "2eba5cfd-8696-458e-a3a4-f1f8823fec71",
  merchant: "Intercom",
  receipt: false,
  status: "incomplete",
  team_member: "Angela Sawyer"
}];

beforeEach(() => {
  const initialState = [];
  const mockStore = configureStore();
  store = mockStore(initialState);

  useGetTransactions.mockImplementation(() => {
    return {
      transactions: testData
    }
  })

  useSearchTransactions.mockImplementation(() => {
    return {
      transactions: testData
    }
  })
})

describe("renders app", () => {
  it('should show title', () => {
    const { getByText } = render(<Provider store={store}><App /></Provider>)
    expect(getByText(/Transactions/)).toBeTruthy()
  })

  it('should show transaction status', () => {
    const { getAllByRole } = render(<Provider store={store}><App /></Provider>)
    const cell = getAllByRole('cell');
    expect(cell).not.toHaveLength(0)
  })

  it('should show search bar', () => {
    const { getAllByRole } = render(<App />)
    const input = getAllByRole('text')
    expect(input).toHaveLength(1)
  })
})