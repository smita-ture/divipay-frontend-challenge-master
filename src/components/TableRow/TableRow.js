import React from 'react';
import styled from 'styled-components';

const RowHeader = styled.th`
    border: 1px solid #ddd;
    padding: 8px;
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: #04aa6d;
    color: white;
`;

const Row = styled.tr`
    tr:nth-child(even) & {
        background-color: #f2f2f2;
    }

    tr:hover & {
        background-color: #ddd;
    }
`;

const Cell = styled.td`
    border: 1px solid #ddd;
    padding: 8px;
`;

const formatDate = date => {
    const txnDate = new Date(date);
    return `${txnDate.getDate()}/${txnDate.getMonth()}/${txnDate.getFullYear()}`
}

const TableRow = ({ isHeader, tableHeader, data }) => {
       return (
           // Table header
           (isHeader ? (<Row role="row">
                {tableHeader && tableHeader.map((row, index) => (
                    <RowHeader role="cellheader" key={`th-${index}`}>{row}</RowHeader>
                ))}
            </Row>) : (
            //Table data
            (data && data.length > 0 && data.map((transaction, index) => (
                      <Row role="row" key={`tr-${index}`}>
                         <Cell role="cell">{transaction?.status || ''}</Cell>
                         <Cell role="cell">{formatDate(transaction?.date) || ''}</Cell>
                         <Cell role="cell">{transaction?.merchant}</Cell>
                         <Cell role="cell">{transaction?.team_member || ''}</Cell>
                         <Cell role="cell">{transaction?.category}</Cell>
                         <Cell role="cell">{transaction?.amount || ''}</Cell>
                         <Cell role="cell">{transaction?.gst || ''}</Cell>
                         <Cell role="cell">{transaction?.budget || ''}</Cell>
                         <Cell role="cell">{<input type='checkbox' name='receipt' role='checkbox' readOnly={true} checked={transaction?.receipt} disabled/> || ''}</Cell>
                         <Cell role="cell">{<input type='checkbox' name='billable' role='checkbox' readOnly={true} checked={transaction?.billable}/> || ''}</Cell>
                      </Row>
            ))) 
            ))   
           )
      
      // Table data
    //      
}

export default TableRow;