import React, { useState } from 'react';
import styled from 'styled-components';
import TableComponent from './components/TableComponent/TableComponent';
import SearchComponent from './components/SearchComponent/SearchComponent';
import { useGetTransactions } from './lib/useRedux/useGetTransactions'

const PageContainer = styled.div`
    max-width: 1200px;
    padding: 24px;
    margin: 0 auto;
`;

const Title = styled.h1`
    font-family: sans-serif;
    font-size: 32px;
    font-weight: 600;
    text-align: center;
`;

const App = () => {
    const { transactions } = useGetTransactions()
    const [tableData, setTableData] = useState(transactions)

    return (
    <PageContainer>
        <Title>Transactions</Title>
        <SearchComponent setTableData={setTableData}/>
        <TableComponent data={tableData} />
    </PageContainer>
    );
}

export default App;