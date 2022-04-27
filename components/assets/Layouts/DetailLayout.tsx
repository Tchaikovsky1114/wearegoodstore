import styled from '@emotion/styled';
import Link from 'next/link';
import React, { ReactNode } from 'react';
import router, { useRouter } from 'next/router'
import Button from '../Button'
import { ButtonWrapper } from '../../Styles';
interface IDetailLayoutProps {
  children: ReactNode
}



const DetailLayout = ({children}:IDetailLayoutProps) => {
  const router = useRouter()
  return (
    <Layout>

      {children}
      
      <ButtonWrapper>
      <Button onClick={()=>router.back()}>뒤로가기</Button>
      </ButtonWrapper>
    </Layout>
  );
};


const Layout = styled.div`
  padding: 10rem 2rem;
`



export default DetailLayout;