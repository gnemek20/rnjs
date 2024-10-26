import { Desktop } from '@/components';
import { webAttribute, webNames } from '@/types/webTypes';
import { Profile, Portfolio } from '@/customWebs';
import { useEffect, useState } from 'react';

const profileIcon = {
  src: require('@/public/icons/profile.png'),
  alt: '프로필'
}

const portfolioIcon = {
  src: require('@/public/icons/portfolio.png'),
  alt: '포트폴리오'
}

const Landing = () => {
  const profile: webNames = 'profile';
  const portfolio: webNames = 'portfolio';

  const webList = new Array<webAttribute>(
    {
      name: profile,
      icon: profileIcon,
      openWeb: () => openWeb(profile),
      closeWeb: () => closeWeb(profile),
      component: Profile
    },
    {
      name: portfolio,
      icon: portfolioIcon,
      openWeb: () => openWeb(portfolio),
      closeWeb: () => closeWeb(portfolio),
      component: Portfolio
    }
  )

  const [renderedWebList, setRenderedWebList] = useState<Array<webNames>>([]);
  const [selectedWeb, setSelectedWeb] = useState<webNames>();

  const [webCloseComposeKey, setWebCloseComposeKey] = useState<boolean>();

  const openWeb = (webName: webNames) => {
    setSelectedWeb(webName);
    if (!renderedWebList.includes(webName)) setRenderedWebList([...renderedWebList, webName]);
  }
  const closeWeb = (webName: webNames) => {
    setRenderedWebList(renderedWebList?.filter((web) => web !== webName));
  }

  const keyDown = (keyDownEvent: KeyboardEvent) => {
    const downedKey = keyDownEvent.key;

    const composeKey = (keyUpEvent: KeyboardEvent) => {
      const upedKey = keyUpEvent.key;
      
      if (upedKey === 'w') {
        setWebCloseComposeKey(true);
      }
      else if (upedKey === 'Alt') {
        document.removeEventListener('keyup', composeKey);
        document.addEventListener('keydown', keyDown);
      }
    }
    
    if (downedKey === 'Alt') {
      document.removeEventListener('keydown', keyDown);
      document.addEventListener('keyup', composeKey);
    }
  }

  useEffect(() => {
    if (webCloseComposeKey) {
      if (!renderedWebList.includes(selectedWeb)) {
        setWebCloseComposeKey(false);
        return;
      }

      closeWeb(selectedWeb);
      setWebCloseComposeKey(false);
    }
  }, [webCloseComposeKey]);

  useEffect(() => {
    document.addEventListener('keydown', keyDown);
  }, []);

  return (
    <>
      <Desktop webList={webList} renderedWebList={renderedWebList} selectedWeb={selectedWeb} />
      {
        webList.map((web, index) => (
          <web.component name={web.name} rendering={renderedWebList.includes(web.name)} selected={selectedWeb === web.name} closeWeb={() => web.closeWeb()} selectWeb={() => setSelectedWeb(web.name)} key={index} />
        ))
      }
    </>
  );
}

export default Landing;