import { EmphasisLink, NormalLink } from './Styles';
import Link from 'next/link';
import styled from '@emotion/styled';

const NavigationWrapper = styled.nav`
  position: fixed;
  z-index: 1;
  top: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 520px;
  max-width: 520px;
  padding: 1rem;
  
  box-shadow: 3px 4px 12px gray;
  border-radius: 10px;
  background-color:beige;
  
`;

export default function NavBar() {
  return (
    <div>
      <NavigationWrapper>
        <Link href={'/'} passHref>
          <EmphasisLink>Home</EmphasisLink>
        </Link>
        <Link href={'/goodstore'} passHref>
          <NormalLink>착한가게 찾아보기</NormalLink>
        </Link>
        <Link href={'/about'} passHref>
          <NormalLink>착한가게란?</NormalLink>
        </Link>
      </NavigationWrapper>
    </div>
  );
}
