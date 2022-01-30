import React, { useState } from 'react';
import styled from 'styled-components';
import { useSearchTransactions } from '../../lib/useRedux/useSearchTransactions'

const SearchContainer = styled.div`
    padding: 24px;
    margin: 0 auto;
`;

const Input = styled.input`
    width: 50%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
`;

const Button = styled.button`
    background-color: #04aa6d;
    border: none;
    color: white;
    padding: 11px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    border-radius: 4px;
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
`;

const SearchComponent = ({ setTableData }) => {
    const [searchInput, setSearchInput] = useState('');
    const { transactions } = useSearchTransactions(searchInput)
    if(transactions.length > 0)
        setTableData(transactions)

    return (<SearchContainer>
        <Input role="text" type="text" value={searchInput} onChange={(e)=> { 
            setSearchInput(e.target.value) 
            }}/>
    </SearchContainer>)
}

export default SearchComponent;