import Image from 'next/image';
import Button from '../components/assets/Button';
import Helmet from '../components/Helmet';
import {
  EmphasisWord,
  ImagerWrapper,
  Section,
  SubTheme,
  SubTitle,
  SubDescription,
  CenterAlign
} from '../components/Styles';
import goodStoreBanner from '../public/image/init_title04.png';
import goodStoreBenefitImage from '../public/image/nice_store.png';

export default function About() {
  return (
    <>
      <Helmet title="About" />
      <Section>
        <ImagerWrapper>
          <Image
            src={goodStoreBanner}
            width={520}
            height={100}
            alt="goodstore"
          />
        </ImagerWrapper>
        <h1>사랑을 나누는 가게, 착한가게입니다.</h1>
        <p>
          <EmphasisWord>착한가게</EmphasisWord>는 매출의 일정액을 정기적으로
          어려운 이웃에게 나누는 가게입니다.{' '}
          <p>
            매장을 경영하는 자영업자 또는 중소기업, 프랜차이즈, 학원, 병원 등{' '}
            <EmphasisWord>어떠한 업종의 가게도 참여 가능합니다.</EmphasisWord>
          </p>
        </p>
        <p>
          여러 가게가 모여 착한거리, 착한프랜차이즈와 같은 다양한 형태로도
          나눔에 동참하며 개인 기부 문화가 확산되는 데 앞장서고 있습니다.
        </p>
      </Section>
      <Section>
        <h3>착한가게 사장님이 누릴 수 있는 혜택</h3>
        <Image
          src={goodStoreBenefitImage}
          width={520}
          height={520}
          alt="goodstore"
        />
        <SubTheme>혜택 하나</SubTheme>
        <SubTitle>착한가게 기념품을 발송해드려요!</SubTitle>
        <SubDescription>
          착한가게를 인증할 수 있는 현판을 발송해드려요!
        </SubDescription>
        <SubTheme>혜택 둘</SubTheme>
        <SubTitle>기부금 영수증 발행 및 세제 혜택을 받아보세요!</SubTitle>
        <SubDescription>소득세법과 법인세법에 의한 법정 기부 세제혜택이 적용됩니다</SubDescription>
        <SubTheme>혜택 셋</SubTheme>
        <SubTitle>다양한 매체에서의 홍보!</SubTitle>
        <SubDescription>
          <EmphasisWord>우리동네 착한가게</EmphasisWord> 뿐만 아니라, 사랑의 열매, 정기 간행물, SNS
          채널 등 착한가게 사장님을 위해 분주히 움직이고 있습니다!
        </SubDescription>
      </Section>
      <Section>
        <CenterAlign>
        <Button>신청하기</Button>
        </CenterAlign>
      </Section>
    </>
  );
}
