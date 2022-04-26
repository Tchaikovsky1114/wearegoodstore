import styled from '@emotion/styled';
import Link from 'next/link';
import React, { ReactNode } from 'react';


interface IDetailLayoutProps {
  children: ReactNode
}


const DetailLayout = ({children}:IDetailLayoutProps) => {
  return (
    <Layout>

      {children}
      

      <Link href="/">
      <a>뒤로가기</a>
      </Link>
    </Layout>
  );
};


const Layout = styled.div`
  padding: 10rem 2rem;
`

export default DetailLayout;