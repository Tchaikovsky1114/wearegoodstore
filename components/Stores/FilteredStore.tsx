import Link from 'next/link';
import React, { useState } from 'react';
import { IStoreData } from '../../pages/goodstore';
import Button from '../assets/Button';
import {
  ButtonWrapper,
  StoreCard,
  StoreList,
  StoreTitle,
  SubDescription,
  SubTitle,
} from '../Styles';

export interface IGoodStoreProps {
  pagenation: number;
  handleIncreaseNumber: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  filteredData: IStoreData[];
  
}

const FilteredStore = ({
  pagenation,
  handleIncreaseNumber,
  filteredData,
}: IGoodStoreProps) => {
  

  return (
    <>
      <StoreList>
        {filteredData?.slice(0, pagenation).map((store: IStoreData) => (
          <Link
            href={`/goodstores/${store['순번']}`}
            key={store['순번']}
            passHref
          >
            <StoreCard>
              <StoreTitle>{store['업소명']}</StoreTitle>
              <SubTitle>{store['대표품목']}</SubTitle>
              <SubDescription>
                {store['가격'].toLocaleString()} 원
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
};

export default FilteredStore;
