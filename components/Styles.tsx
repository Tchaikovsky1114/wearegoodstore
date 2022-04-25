import styled from '@emotion/styled';

export const EmphasisLink = styled.a`
  font-size: 22px;
  font-weight: bold;
  color: #591fff;

  &:hover {
    text-decoration: underline;
  }
`;
export const NormalLink = styled.a`
  font-size: 18px;
  &:hover {
    text-decoration: underline;
  }
`;

export const EmphasisWord = styled.span`
  font-weight: bold;
  text-decoration: underline;
  color: #e50715;
`;

export const ImagerWrapper = styled.div`
  position: relative;
  top: 2rem;
  padding: 1rem 0;
`;

export const Section = styled.section`
  margin: 5rem 0 auto;
  padding: 10px;
`

export const StoreList = styled(Section)`
  
  display:grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
  color: #945215;
`

export const StoreCard = styled.a`
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 2px 2px 2px gray;
  transition: .2s;
  &:hover {
    box-shadow: 3px 4px 10px gray;
  }
  
`

export const StoreTitle = styled.h2`
  font-size: 18px;
`


export const SubTheme = styled.p`
  display:flex;
  justify-content: flex-start;
  align-items:center;
  flex-direction:column;
  padding: 5px 0;
  color: #f00;
  background-color:#ccc;
  border-radius: 20px;
  width: fit-content;
  padding: 0.2rem 0.6rem;
  font-size: 16px;
  font-weight:bold;

`
export const SubTitle = styled.p`
  font-size: 16px;
  font-weight: bold;
`

export const SubDescription = styled.p`
  font-size: 14px;
  color: black;
  word-break: keep-all;
`

export const Button = styled.a`
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

export const CenterAlign = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  
`