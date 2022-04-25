import styled from '@emotion/styled';
import Link from 'next/link';
import React, { FormEvent, MouseEventHandler, useState } from 'react';
import Helmet from '../components/Helmet';
import {
  Button,
  Section,
  StoreCard,
  StoreList,
  StoreTitle,
  SubDescription,
  SubTitle,
  ButtonWrapper,
} from '../components/Styles';

export interface IStoreData {
  filteredData: [];
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

export default function GoodStore({ filteredData }: IStoreData) {
  const [pagenation, setPagenation] = useState(0);

  const handleIncreaseNumber = (e: React.MouseEvent<HTMLAnchorElement>) => {
    setPagenation((prev) => prev + 16);
    if (e.currentTarget.textContent !== '더보기') {
      e.currentTarget.textContent = '더보기';
      console.log(filteredData);
    }
  };
  return (
    <>
      <Helmet title="GoodStore" />
      <Section>
        <h1>GoodStore Page</h1>
      </Section>
      <StoreList>
        {filteredData?.slice(0, pagenation).map((store) => (
          <Link href={`/goodstores/${store['순번']}`} key={store['순번']} passHref>
            <StoreCard>
              <StoreTitle>{store['업소명']}</StoreTitle>
              <SubTitle>{store['대표품목']}</SubTitle>
              <SubDescription>
                {parseInt(store['가격']).toLocaleString()} 원
              </SubDescription>
              <SubDescription>
                {store['시/군/구']} {store['주소(도로명 새주소 명기)']}
              </SubDescription>
            </StoreCard>
          </Link>
        ))}
      </StoreList>
      <ButtonWrapper>
        <Button onClick={handleIncreaseNumber}>착한가게</Button>
      </ButtonWrapper>
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
    ({ 업종 }: IStoreData) => !filterStore.includes(업종)
  );

  return {
    props: {
      filteredData,
    },
  };
}
