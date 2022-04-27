import styled from '@emotion/styled';
import React, { ChangeEvent, useState } from 'react';
import Button from './assets/Button';
import { ButtonWrapper } from './Styles';


interface IInputFunc {
  handleInputValue: (e:ChangeEvent<HTMLInputElement>) => void
  handleSubmit: () => void
  handleEnter: (e:React.KeyboardEvent<HTMLInputElement>) => void
}


const Reply = ({handleInputValue,handleSubmit,handleEnter}:IInputFunc) => {

  return (
    <div>
      <ReplyWrapper>
        <input type="text" onChange={handleInputValue} onKeyDown={handleEnter} />
        <ButtonWrapper style={{display:'flex',gap:'20px'}}>
        <Button style={{padding:'0.5rem',border:'0'}} onClick={handleSubmit}>등록</Button>
        </ButtonWrapper>
      </ReplyWrapper>
    </div>
  );
};


const ReplyWrapper = styled.div`
margin-top: 2rem;
background-color:#b52;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
border: 5px solid #b23;
box-sizing: border-box;
border-radius: 20px;

input{
  background-color: #f5ffac;
  margin: 1rem;
  min-width: 400px;
  height: 200px;
  border-radius:20px;
  border:0;
  font-size:14px;
  font-weight:bold;
  
  &:focus{
    outline: 3px solid #b23;
  }
}
`

export default Reply;