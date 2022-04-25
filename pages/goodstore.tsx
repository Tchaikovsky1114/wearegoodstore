import Link from 'next/link';
import Helmet from '../components/Helmet';
import { Section, StoreCard, StoreList, StoreTitle, SubDescription, SubTitle } from '../components/Styles';


interface IStoreData {
  data: []
  '가격': number
  '대표자': string
  '대표품목': string
  '배달가능여부': string
  '순번': number
  '시/군/구': string
  '시/도': string
  '업소명': string
  '업종': string
  '연락처': string
  '영업시간': string
  '주소(도로명 새주소 명기)': string
  '주차가능여부': string;
}

export default function GoodStore({data}:IStoreData) {
  return (
    <>
      <Helmet title="GoodStore" />
      <Section>
        <h1>GoodStore Page</h1>
      </Section>
      <StoreList>
      {data?.slice(0,16).map(store =>
      <Link href={"/"} key={store["순번"]} passHref >
      <StoreCard>
        <StoreTitle>{store["업소명"]}</StoreTitle>
        <SubTitle>{store["대표품목"]}</SubTitle>
        <SubDescription>{parseInt(store["가격"]).toLocaleString()} 원</SubDescription>
        <SubDescription>{store["시/군/구"]} {store["주소(도로명 새주소 명기)"]}</SubDescription>
      </StoreCard>
      </Link>
      )}
      </StoreList>
    </>
  );
}

export async function getStaticProps() {
  
  const { data } = await (
    await fetch(
      'https://api.odcloud.kr/api/3045247/v1/uddi:1c782e6f-9281-451d-aa04-a550074abc2d?page=1&perPage=5672&serviceKey=HdgqKrzt9tddkO%2B3ZaQ3KjO9IA5uT23vcj33Zg6BmTby1kd2tNsD3rSVOjx8rg84A60ItTkVEEGdViZxMYjwCw%3D%3D'
    )
  ).json();
      
  return {
    props: {
      data,
    },
  };
}
