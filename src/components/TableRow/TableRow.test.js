import React from 'react';
import { render } from "@testing-library/react";
import TableRow from './TableRow';

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

  const testtableHeader = ["Status", "Date", "Merchant Name", "Team Member", "Category", "Amount", "GST", "Budget", "Receipt", "Billable"];

  describe("renders table rows", () => {
    it('should show table rows', () => {
      const { getAllByRole } = render(<TableRow data={testData}/>)
      const cell = getAllByRole('row');
      expect(cell).toHaveLength(2)
    })

    it('should show table header row', () => {
      const { getAllByRole } = render(<TableRow isHeader={true} tableHeader={testtableHeader}/>)
      const cell = getAllByRole('row');
      expect(cell).toHaveLength(1)
    })
  })