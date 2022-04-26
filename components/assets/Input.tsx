import styled from '@emotion/styled';
import React, { ChangeEvent, FormEvent, useState } from 'react';
import SearchSVG from './svg/SearchSVG';

interface IInputProps {
  [key: string]: any;
}

const Input = ({ ...props }: IInputProps) => {
  return (
    <>
      <SearchForm>
        <SearchWrapper>
          <SearchSVG />
        </SearchWrapper>
        <MainInput onKeyUp={props.handleInputValue} />
        <SubmitInput>찾기</SubmitInput>
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
const SubmitInput = styled.button`
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
