import React, { FC, ReactNode } from 'react';
import NavBar from './NavBar';

type LayoutProps = {
  children?: React.ReactNode
};


export default function Layout({children}:LayoutProps):JSX.Element {
  return (
    <>
      <NavBar />
      <div>{children}</div>
    </>
  );
}

