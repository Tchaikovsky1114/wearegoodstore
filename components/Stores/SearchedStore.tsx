import Link from 'next/link';
import React from 'react';
import { ISearchedData, IStoreData } from '../../pages/goodstore';
import Button from '../assets/Button';
import { ButtonWrapper, StoreCard, StoreList, StoreTitle, SubDescription, SubTitle } from '../Styles';
import { IGoodStoreProps } from './FilteredStore';



interface ISearchedStoreProps {
  pagenation: number;
  handleIncreaseNumber: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  searchedData: any[]
}



const SearchedStore = ({ pagenation,handleIncreaseNumber,searchedData}:ISearchedStoreProps) => {
  return (
    <>
      <StoreList>
        {searchedData?.slice(0, pagenation).map((store:ISearchedData) => (
          <Link
            href={`/goodstores/${store[4]}`}
            key={store[4]}
            passHref
          >
            <StoreCard>
              <StoreTitle>{store[7]}</StoreTitle>
              <SubTitle>{store[2]}</SubTitle>
              <SubDescription>
                {store[0]?.toLocaleString()} 원
              </SubDescription>
              <SubDescription>
                {store[5]} {store[11]}
              </SubDescription>
            </StoreCard>
          </Link>
        ))}
      </StoreList>
      <ButtonWrapper>
        <Button onClick={handleIncreaseNumber}>펼쳐보기</Button>
      </ButtonWrapper>
    </>
  );
};

export default SearchedStore;