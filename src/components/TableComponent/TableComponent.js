import React from 'react';
import styled from 'styled-components';
import TableRow from '../TableRow/TableRow';

const Table = styled.table`
    height: 100%;
    width:100%;
    font-family: Arial, Helvetica, sans-serif;
    border-collapse: collapse;
    width: 100%;
`;

const tableHeader = ["Status", "Date", "Merchant Name", "Team Member", "Category", "Amount", "GST", "Budget", "Receipt", "Billable"];

const TableComponent = ({ data }) => (
       (data.length > 0) && (
        <Table>
            <tbody>
                <TableRow isHeader={true} tableHeader={tableHeader}></TableRow>
                <TableRow isHeader={false} data={data}></TableRow>
            </tbody>
        </Table>
       )
)

export default TableComponent;