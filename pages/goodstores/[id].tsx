import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import Helmet from '../../components/Helmet';
import { IStoreData } from '../goodstore';

export default function Details({ store }: { store:IStoreData }) {
  return (
    <>
      <Helmet title={store["업소명"]} />
      <div>{store["업소명"]}</div>
    </>
  );
}
  


export const getStaticProps = async ({
  params,
}: {
  params: { id: string };
}) => {
  // 가게를 찾을 수 있는 함수 사용
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

  const store = filteredData.find((store: IStoreData) => {
    return store['순번'] === parseInt(params.id);
  });

  return {
    props: {
      store,
    },
  };
};
// 경로를 무엇으로 설정할 것인지 정해준다.
export async function getStaticPaths() {
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

  const paths = filteredData.map((store: IStoreData) => {
    return {
      params: {
        id: String(store['순번']),
      },
    };
  });
  return {
    paths,
    fallback: false
  };
}