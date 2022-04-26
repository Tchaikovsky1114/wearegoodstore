import styled from '@emotion/styled';
import Link from 'next/link';
import React, { FormEvent, MouseEventHandler, useState } from 'react';
import Input from '../components/assets/Input';
import Helmet from '../components/Helmet';
import FilteredStore from '../components/Stores/FilteredStore';
import SearchedStore from '../components/Stores/SearchedStore';
import { Section } from '../components/Styles';

export interface IStoreData {
  가격: number;
  대표자: string;
  대표품목: string;
  배달가능여부: string;
  순번: number;
  '시/군/구': string;
  '시/도': string;
  업소명: string;
  업종: string;
  연락처: string;
  영업시간: string;
  '주소(도로명 새주소 명기)': string;
  주차가능여부: string;
}

export default function GoodStore({
  filteredData,
}: {
  filteredData: IStoreData[];
}) {
  const [pagenation, setPagenation] = useState(0);
  
  const [isSearched, setIsSearched] = useState(false);
  const handleIncreaseNumber = (e: React.MouseEvent<HTMLAnchorElement>) => {
    setPagenation((prev) => prev + 16);
    if (e.currentTarget.textContent !== '더보기') {
      e.currentTarget.textContent = '더보기';
    }
  };
  
  return (
    <>
      <Helmet title="GoodStore" />
      <Section>
        <h1>동네에서 찾아보기</h1>
        <div>
          <Input filteredData={filteredData} type="text" placeholder="우리동네 착한가게" />
        </div>
      </Section>
      {!isSearched && (
        <FilteredStore
          pagenation={pagenation}
          handleIncreaseNumber={handleIncreaseNumber}
          filteredData={filteredData}
        />
      )}
      {isSearched && (
        <SearchedStore
          pagenation={pagenation}
          handleIncreaseNumber={handleIncreaseNumber}
          filteredData={filteredData}
        />
      )}
    </>
  );
}

export async function getServerSideProps() {
  const filterStore = [
    '미용업',
    '미용',
    '숙박업',
    '미용실',
    '헤어',
    '이용업',
    '이미용업',
    '기타서비스업',
    '세탁업',
    '목욕업',
    '체육시설업',
    '세탁소',
    '기타',
  ];
  const { data } = await (
    await fetch(
      'https://api.odcloud.kr/api/3045247/v1/uddi:1c782e6f-9281-451d-aa04-a550074abc2d?page=1&perPage=5672&serviceKey=HdgqKrzt9tddkO%2B3ZaQ3KjO9IA5uT23vcj33Zg6BmTby1kd2tNsD3rSVOjx8rg84A60ItTkVEEGdViZxMYjwCw%3D%3D'
    )
  ).json();
  const filteredData = data.filter(
    ({ 업종 }: { 업종: string }) => !filterStore.includes(업종)
  );

  return {
    props: {
      filteredData,
    },
  };
}
