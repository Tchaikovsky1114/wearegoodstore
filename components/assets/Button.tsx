
import styled from '@emotion/styled';
import React from 'react';

interface Iprops {
  children: React.ReactNode;
  [key: string]: any
}


const Button = ({children,...props}:Iprops) => {
  return (
    <MainButton {...props}>
      {children}
    </MainButton>
  );
};

const MainButton = styled.a`
  border: 1px solid black;
  padding: 1rem;
  border-radius:10px;
  background-color:beige;
  font-size: 14px;
  font-weight:bold;
  color: #b23;
  cursor: pointer;
  &:hover{
    color:white;
    background-color:#b23;
    
  }
`

export default Button;