import { GetStaticProps } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import DetailLayout from '../../components/assets/Layouts/DetailLayout';
import Helmet from '../../components/Helmet';
import { IStoreData } from '../goodstore';
import Reply from '../../components/Reply'
import { ChangeEvent, ReactNode, useState } from 'react';
import { EmphasisWord, StoreTitle } from '../../components/Styles';
import styled from '@emotion/styled';











export interface IInputprops {
  comment: string;
}

const EtcInpoList = styled.ul`
  margin: 1rem 0 5rem 0;
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  align-items:flex-start;
  gap:20px;

`
const EtcInpoItem = styled.li`
  display:flex;
  width: 100%;
  justify-content:flex-start;
  align-items:center;
  padding: .5rem 0;
  border-bottom:1px solid #ccc;
  gap:100px;
  span{
    display:block;
    flex-basis:0;
    flex-grow: 1;
    
  }
  span:nth-of-type(2){
    color: #b82;
  }
`




export default function Details({ store }: { store:IStoreData }) {

  const [inputValue,setInputValue] = useState({
    comment: ''
  })
  const [commentlist, setCommentlist] = useState<any[]>([])

  const {comment} = inputValue;
  const handleInputValue = (e:ChangeEvent<HTMLInputElement>) => { 
    setInputValue({
      comment:e.currentTarget.value
    })
}
  
  const handleSubmit = () =>{
  setCommentlist([...commentlist,comment])
  console.log(commentlist);
  }

  const handleEnter = (e:React.KeyboardEvent<HTMLInputElement>) =>{
    if(e.key === 'Enter'){
      handleSubmit()
    }
    
  }

  return (
    <>
      <Helmet title={store["업소명"]} />
      <DetailLayout>
      <h1 style={{marginBottom:'1rem',color:'#b23'}}>{store["업소명"]}</h1>
        <h2 style={{marginBottom:'1rem',fontSize:'18px'}}>대표매뉴 : {store["대표품목"]}</h2>
        <h3 style={{marginBottom:'1rem',fontSize:'14px'}}>가격(1인분)  {store["가격"].toLocaleString()} 원</h3>
      <Image src={'/image/goodstoreimage.jpg'} width={480} height={480} alt="store" />
      <div>
        
        <EtcInpoList>
        <StoreTitle>기타 정보</StoreTitle>
          <EtcInpoItem><EmphasisWord>주차</EmphasisWord><span>{store["주차가능여부"] === 'Y' ? "주차가능" : "주차불가능" }</span></EtcInpoItem>
          <EtcInpoItem><EmphasisWord>배달</EmphasisWord><span>{store["배달가능여부"] === 'Y' ? "배달가능" : "배달불가능" }</span></EtcInpoItem>
          <EtcInpoItem><EmphasisWord>영업시간</EmphasisWord><span>{store["영업시간"]}</span></EtcInpoItem>
          <EtcInpoItem><EmphasisWord>주차</EmphasisWord><span>{store["연락처"] }</span></EtcInpoItem>
        </EtcInpoList>
        
      </div>
      <div>
      <h3>방문후기</h3>
      {commentlist.map((comment,i) =>
        <ul key={i}>
        <li>{comment}</li>
      </ul> )}

      <Reply handleInputValue={handleInputValue} handleSubmit={handleSubmit} handleEnter={handleEnter} />
      </div>        
      </DetailLayout>
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