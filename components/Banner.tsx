import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { IStoreData } from '../pages/goodstore';
import { ImagerWrapper, Section, StoreTitle } from './Styles';

const Banner = () => {
  return (
    <div>
        <Section>
          <div>
            <StoreTitle>우리동네 착한가게</StoreTitle>
            <ul>
              <li>
                <ImagerWrapper>
                <Image
                  src={'/image/foodimg1.png'}
                  width={600}
                  height={400}
                  alt="food"
                />
                </ImagerWrapper>
                <Link href="/goodstores/462">
                <a>떡볶이</a>
                </Link>
              </li>
              <li>
                <ImagerWrapper>
                <Image
                  src={'/image/foodimg2.jpg'}
                  width={600}
                  height={400}
                  
                  alt="food2"
                />
                </ImagerWrapper>
                <Link href="/goodstores/321">
                <a>돈까스</a>
                </Link>
              </li>
              <li>
              <ImagerWrapper>
                <Image
                  src={'/image/foodimg3.PNG'}
                  width={600}
                  height={400}
                  alt="food3"
                />
                </ImagerWrapper>
                <Link href="/goodstores/133">
                <a>생갈비</a>
                </Link>
              </li>
            </ul>
          </div>
        </Section>
    </div>
  );
};

export default Banner;




