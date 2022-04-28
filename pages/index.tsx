import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { jsx, css } from '@emotion/react';
import Helmet from '../components/Helmet';
import { Section } from '../components/Styles';
import MainLayout from '../components/assets/Layouts/MainLayout';
import Banner from '../components/Banner';
import { IStoreData } from './goodstore';

const Home: NextPage = () => {
  return (
    <>
      <Helmet title="HOME" />
      <MainLayout>
      <Banner/>
      </MainLayout>
    </>
  );
};

export default Home;

