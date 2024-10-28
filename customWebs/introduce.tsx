import headerStyles from '@/styles/introduce/header.module.css';
import bodyStyles from '@/styles/introduce/body.module.css';
import { imageType } from '@/types/publicTypes';
import Image from 'next/image';
import { ReactNode } from 'react';
import { portfolioNames } from '@/types/webTypes';

const Header = ({ routerBack }: { routerBack: Function }) => {
  const backIcon: imageType = {
    src: require('@/public/icons/back.png'),
    alt: 'back'
  }

  return (
    <div className={`${headerStyles.background}`}>
      <div className={`${headerStyles.container}`}>
        <div className={`${headerStyles.titleContainer}`}>
          <div onClick={() => routerBack()}>
            <Image src={backIcon.src} alt={backIcon.alt} />
            <h1>Introduce Portfolio Page</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

const Body = (props: { title: portfolioNames, link: string, bannerImage: imageType, children: ReactNode }) => {
  return (
    <div className={`${bodyStyles.background}`}>
      <div className={`${bodyStyles.container}`}>
        <div className={`${bodyStyles.titleContainer}`}>
          <a href={props.link} target='_blank'>
            <h1>{ props.title }</h1>
          </a>
          <div>
            <p>클릭하여</p>
            <p>직접 확인해보세요</p>
          </div>
        </div>
        <div className={`${bodyStyles.bannerContainer}`}>
          <Image src={props.bannerImage.src} alt={props.bannerImage.alt} />
        </div>
        <div className={`${bodyStyles.contentContainer}`}>
          { props.children }
        </div>
      </div>
    </div>
  );
}

const Kwondow = () => {
  const bannerImage: imageType = {
    src: require('@/public/images/kwondowBanner.jpg'),
    alt: 'banner'
  }

  return (
    <Body title='Kwondow' bannerImage={bannerImage} link='https://rnjs.site'>
      <div>
        <h2>무슨 페이지인가?</h2>
        <div>
          <p>Kwondow는 저의 프로필과 포트폴리오를 열람할 수 있는 페이지입니다.</p>
          <p>독특한 느낌을 위하여 윈도우와 비슷하게 디자인했습니다.</p>
        </div>
      </div>
      <div>
        <h2>핵심은 무엇인가?</h2>
        <div>
          <p>1. 커스텀 웹</p>
          <p>이들은 PC 환경에서 자유로운 조작이 가능합니다!</p>
          <p>웹의 위치를 옮길 수도 있고, 크기도 자유롭게 조절 가능합니다.</p>
          <p>또한 각 커스텀 웹 간의 순서가 존재하여 원하는 웹을 포커싱 할 수 있습니다. (겹침 방지)</p>
          <br />
          <p>2. 작업 표시줄</p>
          <p>여러분들이 커스텀 웹을 켜면 하단의 작업 표시줄에 표시됩니다.</p>
          <p>현재 포커싱 된 웹을 확인하거나, 다른 웹으로 손쉽게 포커싱을 변경해 보세요!</p>
          <br />
          <p>3. 조합키</p>
          <p>커스텀 웹이 화면 바깥으로 넘어갔다고요?</p>
          <p>[Alt]키를 누른 채 [W]키를 눌러 웹을 종료할 수 있습니다.</p>
          <br />
          <p>4. 검색</p>
          <p>프로필의 검색 기능을 이용해보세요. [한/영]키가 먹통이여도 됩니다!</p>
          <p>여러분들이 영어로 검색하셔도, 실수로 공백을 많이 입력하셔도 괜찮습니다.</p>
          <p>자동으로 변환되어 검색될테니까요!</p>
          <br />
          <p>5. 반응형 웹</p>
          <p>화면 크기가 768px 아래일 경우 모바일 버전으로 변경됩니다.</p>
          <p>다만, Safari 환경에서 일부 CSS 코드가 적용되지 않는 버그를 발견했습니다.</p>
          <p>때문에 커스텀 웹의 크기나 위치 조작을 막아뒀습니다.</p>
          <br />
          <p>6. 코드 최적화</p>
          <p>작업 중 계획에 없던 요소를 추가해야 할 때가 있습니다.</p>
          <p>부담 없이 추가하세요! 변수 이름, 타입, 렌더링 하는 HTML 코드까지 신경 써서 만들었으니까요.</p>
          <br />
          <p>7. 웹 최적화</p>
          <p>이곳의 모든 이벤트는 관리받고 있습니다.</p>
          <p>debounce와 throttle, 혹은 {`{ once: true }`}를 사용하여 웹의 부담을 줄여뒀습니다.</p>
        </div>
      </div>
    </Body>
  );
}

const DaeyangIng = () => {
  const bannerImage: imageType = {
    src: require('@/public/images/daeyangINGBanner.jpg'),
    alt: 'banner'
  }

  return (
    <Body title='대양ING' bannerImage={bannerImage} link='https://daeyanging.com'>
      <div>
        <h2>무슨 페이지인가?</h2>
        <div>
          <p>대양ING는 의류 부자재 회사를 홍보하기 위한 사이트입니다.</p>
          <p>지인으로부터 요청받아 저 혼자 작업한 사이트입니다.</p>
        </div>
      </div>
      <div>
        <h2>핵심은 무엇인가?</h2>
        <div>
          <p>1. 애니메이션</p>
          <p>페이지에 들어오면 하드코딩된 애니메이션이 반겨줄 것입니다!</p>
          <p>여러분들의 눈길을 끌었다면 성공입니다.</p>
          <br />
          <p>2. 역동적인 웹</p>
          <p>대부분의 요소는 각각의 애니메이션이 있습니다.</p>
          <p>그들은 observer를 가지고 있기에 여러분들 화면에 발맞추어 애니메이팅 됩니다.</p>
          <br />
          <p>3. 반응형 웹</p>
          <p>화면의 크기가 767px 아래일 경우 모바일 버전으로 변경됩니다.</p>
          <br />
          <p>4. 백엔드 서버</p>
          <p>NodeJS의 Express 서버가 있습니다.</p>
          <p>이들은 여러분들이 전송하고자 하는 사진과 내용을 안전하게 전달해 줍니다.</p>
          <p>전송된 내용은 호스트가 이메일을 통해서 확인할 수 있습니다.</p>
        </div>
      </div>
    </Body>
  );
}

const HyunwooAi = () => {
  const bannerImage: imageType = {
    src: require('@/public/images/hyunwooAiBanner.jpg'),
    alt: 'banner'
  }

  return (
    <Body title='HyunWoo.AI' bannerImage={bannerImage} link='https://hyunwoo.ai'>
      <div>
        <h2>무슨 페이지인가?</h2>
        <div>
          <p>HyunWoo.AI는 캔버스 위의 객체를 조작해 볼 수 있는 사이트입니다.</p>
          <p>지인으로부터 요청받아 제가 도와주고 있는 사이트입니다.</p>
          <p>화면의 3D 오브젝트와 텍스트를 작업했습니다.</p>
        </div>
      </div>
      <div>
        <h2>핵심은 무엇인가?</h2>
        <div>
          <p>1. 입체적인 요소</p>
          <p>중간의 3D 오브젝트가 신기하다고요?</p>
          <p>모든 요소들은 Three JS로 만들어졌습니다.</p>
          <p>확대하고 축소하고, 여러 방향으로 돌려볼 수도 있습니다.</p>
        </div>
      </div>
    </Body>
  );
}

const ArtificialVision = () => {
  const bannerImage: imageType = {
    src: require('@/public/images/artificialVisionBanner.jpg'),
    alt: 'banner'
  }

  return (
    <Body title='Aritificial Vision' bannerImage={bannerImage} link='https://artificialvision-python.com'>
      <div>
        <h2>무슨 페이지인가?</h2>
        <div>
          <p>Artificial Vision은 마크다운 파일을 가져와 보여주는 사이트입니다.</p>
          <p>지인으로부터 요청받아 저 혼자 작업한 사이트입니다.</p>
        </div>
      </div>
      <div>
        <h2>핵심은 무엇인가?</h2>
        <div>
          <p>1. 마크다운 파일과 HTML 코드</p>
          <p>최대한 깃허브에서 보는 듯하게 만들었습니다!</p>
          <p>이곳은 마크다운 파일의 내용을 HTML 코드로 변환하고, 각 요소에 class를 적용하는 처리를 진행합니다.</p>
          <p>class가 입혀진 요소는 제가 만든 CSS에 의해 아름답게 렌더링 됩니다.</p>
          <br />
          <p>2. 카테고리와 스크롤링</p>
          <p>카테고리를 통해 여러 마크다운 파일들을 확인할 수 있습니다!</p>
          <p>또한 마크다운으로부터 자동으로 목차를 탐색합니다.</p>
          <p>마크다운 파일의 내용을 변환할 때, h2 태그로 작성된 내용은 목차로 분류됩니다.</p>
          <p>이들을 클릭하면 해당 내용으로 스크롤링 됩니다. 원하는 부분을 빠르게 확인할 수 있는 거죠!</p>
          <br />
          <p>3. 반응형 웹과 사이드 바</p>
          <p>화면의 크기가 1120px 아래일 경우 태블릿, 화면의 크기가 700px 아래일 경우 모바일 버전으로 변경됩니다.</p>
          <p>화면이 작아지면 본문의 내용을 크게 볼 수 있도록 카테고리를 이곳에 넣습니다.</p>
          <p>부드러운 느낌을 주고자 모두 애니메이션을 갖고 있습니다.</p>
          <br />
          <p>4. 코드 최적화</p>
          <p>새로운 마크다운 파일이 추가되어도 상관없습니다!</p>
          <p>위에서 서술한 모든 기능들은 자동화되어 있습니다.</p>
          <p>폴더에서 마크다운 파일 탐색부터 내용 변환, 카테고리와 목차 생성 모두 알고리즘이 해결해 줍니다.</p>
          <p>여러분들은 편하게 설명하고 싶은 마크다운 파일만 추가하세요!</p>
        </div>
      </div>
    </Body>
  );
}

const Introduce = ({ portfolioName, routerBack }: { portfolioName: portfolioNames, routerBack: Function }) => {
  const RenderingPortfolio = () => {
    return (
      <>
        {
          portfolioName === 'Kwondow' ? (
            <Kwondow />
          ) : portfolioName === '대양ING' ? (
            <DaeyangIng />
          ) : portfolioName === 'HyunWoo.AI' ? (
            <HyunwooAi />
          ) : portfolioName === 'Aritificial Vision' && (
            <ArtificialVision />
          )
        }
      </>
    )
  }

  return (
    <>
      <Header routerBack={routerBack} />
      <RenderingPortfolio />
    </>
  );
}

export default Introduce;