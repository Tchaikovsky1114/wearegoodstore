import styled from '@emotion/styled';
import React, { ChangeEvent, FormEvent, useState } from 'react';
import { IStoreData } from '../../pages/goodstore';
import SearchSVG from './svg/SearchSVG';

interface IInputProps {
  [key: string]: any;
  filteredData: IStoreData[];
}

interface IResult {
  0?: number;
  1?: string;
  2?: string;
  3?: string;
  4?: number;
  5?: string;
  6?: string;
  7?: string;
  8?: string;
  9?: string;
  10?: string;
  11?: string;
  12?: string;
}

const Input = ({ filteredData, ...props }: IInputProps) => {
  const baseData = filteredData.map((store) => Object.values(store));
  const [searchedData, setSearchedData] = useState<any[]>();

  const handleSearchingStore = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  const handleInputValue = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const result = [...baseData].filter((store) =>
        store.join(',').includes(e.currentTarget.value)
      );
      setSearchedData(result);
    }
  };
  console.log(searchedData);
  return (
    <>
      <SearchForm onSubmit={handleSearchingStore}>
        <SearchWrapper>
          <SearchSVG />
        </SearchWrapper>
        <MainInput onKeyUp={handleInputValue} {...props} />
        <SubmitInput type="submit" value="찾기" />
      </SearchForm>
    </>
  );
};

const SearchForm = styled.form`
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
const SubmitInput = styled.input`
  position: absolute;
  right: 140px;
  border: 0;
  background-color: transparent;
  font-size: 12px;
  cursor: pointer;
  &:hover {
    background-color: rgba(51, 51, 255, 0.2);
    border-radius: 20px;
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
