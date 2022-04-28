import styled from '@emotion/styled';
import React, { ChangeEvent, FormEvent, useState } from 'react';
import SearchSVG from './svg/SearchSVG';

interface IInputProps {
  handleInputValue: (e: React.KeyboardEvent<HTMLInputElement>) => void
  handleSearch: (e:React.MouseEvent<HTMLButtonElement>) => void
  handleSearchValue:(e: React.ChangeEvent<HTMLInputElement>) => void
  searchInputValue:string;
}

const Input = ({handleSearchValue,handleInputValue,handleSearch,searchInputValue }: IInputProps) => {
  const searchValue = searchInputValue;
  return (
    <>
      <SearchForm>
        <SearchWrapper>
          <SearchSVG />
        </SearchWrapper>
        <MainInput name='searchInput' type="text" value={searchValue||''} placeholder="우리동네 착한가게"onChange={handleSearchValue} onKeyPress={handleInputValue} />
        <SubmitButton onClick={handleSearch}>찾기</SubmitButton>
      </SearchForm>
    </>
  );
};


















const SearchForm = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
`;
const MainInput = styled.input`
  position: relative;
  width: 240px;
  height: 48px;
  border-radius: 20px;
  border: 0;
  box-shadow: 5px 5px 10px #a13111;
  padding: 1rem 2rem;
  transition: 0.4s;
  &:focus {
    outline: 0;
    box-shadow: 5px 5px 20px #a13111;
  }
`;
const SubmitButton = styled.button`
  position: absolute;
  right: 140px;
  border: 0;
  background-color: transparent;
  font-size: 12px;
  cursor: pointer;
  
  &::before{
    content:'';
    position:absolute;
    top:-7px;
    width:25px;
    height:25px;
    left:-4px;
    transition:.2s;
    border-radius:50%;
    padding:.2rem;
  }
  &:hover:before{
    
    
    background-color: rgba(187, 34, 51,0.2);

  }
`;

const SearchWrapper = styled.div`
  position: relative;
  width: min-content;
  z-index: 1;
  top: -8px;
  left: 10px;
`;

export default Input;
