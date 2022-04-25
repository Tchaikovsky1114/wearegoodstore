import Head from 'next/head';
import React from 'react';

export default function Helmet({ title }: { title: React.ReactNode }) {
  return (
    <Head>
      <title>{title} | 우리동네 착한가게</title>
    </Head>
  );
}
