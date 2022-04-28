import styled from '@emotion/styled';
import React from 'react';
import { LayoutProps } from './DetailLayout';



const MainLayout = ({children}:LayoutProps) => {
  return (
    <Layout>
      {children}
    </Layout>
  );
};

export default MainLayout;


const Layout = styled.div`
  padding: 5rem 2rem;
  div{
    
    
  }
  ul{
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    align-items:flex-start;
  }
  li{
    
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    flex-grow:1;
    gap:20px;
    img{
      display:block;
      flex-basis:1
    }
  }
  a{
    &:hover{
      text-decoration:underline;
    }
  }
`