import React from 'react';
import { render } from "@testing-library/react";
import TableComponent from './TableComponent';

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

  describe("renders table", () => {
    it('should show table header', () => {
      const { getAllByRole } = render(<TableComponent data={testData}/>)
      const cell = getAllByRole('cellheader');
      expect(cell).toHaveLength(10)
    })
  
    it('should show table rows', () => {
      const { getAllByRole } = render(<TableComponent data={testData}/>)
      const cell = getAllByRole('cell');
      expect(cell).toHaveLength(20)
    })
  })