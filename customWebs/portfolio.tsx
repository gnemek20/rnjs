import { Web } from '@/components';
import { customWebProps, portfolioNames } from '@/types/webTypes';
import styles from '@/styles/portfolio/portfolio.module.css';
import itemStyles from '@/styles/portfolio/item.module.css';
import Image from 'next/image';
import { imageType } from '@/types/publicTypes';
import { useEffect, useRef, useState } from 'react';
import Introduce from './introduce';

const sampleImage: imageType = {
  src: require('@/public/images/peroro.jpg'),
  alt: 'sample'
}

const artificialVisionImage: imageType = {
  src: require('@/public/images/artificialVision.jpg'),
  alt: 'artificialVision'
}

const deayangINGImage: imageType = {
  src: require('@/public/images/daeyangING.jpg'),
  alt: 'daeyangING'
}

interface itemAttribute {
  icon?: imageType,
  link: string,
  title: portfolioNames,
  content: string
}

const Portfolio = (props: customWebProps) => {
  const itemList: Array<itemAttribute> = new Array(
    {
      link: 'https://rnjs.site',
      title: 'Kwondow',
      content: [
        `포트폴리오를 종합적으로 소개하는 사이트입니다.`,
        `마치 윈도우같은 환경에서 프로필과 포트폴리오를 확인할 수 있습니다.`
      ].join(' ')
    },
    {
      icon: deayangINGImage,
      link: 'https://daeyanging.com',
      title: '대양ING',
      content: [
        `의류 부자재를 판매하는 사이트입니다.`,
        `지인으로부터 요청받아 제작한 사이트입니다.`,
      ].join(' ')
    },
    {
      link: 'https://hyunwoo.ai',
      title: 'HyunWoo.AI',
      content: [
        `캔버스 위의 객체를 조작해 볼 수 있는 사이트입니다.`,
        `지인을 도와 제작한 사이트이며,`,
        `3D 오브젝트와 텍스트를 작업했습니다.`
      ].join(' ')
    },
    {
      icon: artificialVisionImage,
      link: 'https://artificialvision-python.com',
      title: 'Aritificial Vision',
      content: [
        `깃허브의 마크다운 파일을 가져와 보여주는 사이트입니다.`,
        `지인으로부터 요청받아 제작한 사이트이며,`,
        `여러 docs 사이트의 디자인을 참고하며 작업했습니다.`,
        `실제 깃허브에서 보는 마크다운처럼 작업했습니다.`
      ].join(' ')
    }
  );

  const [selectedPortfolio, setSelectedPortfolio] = useState<portfolioNames>();

  const Item = (props: itemAttribute) => {
    const ParagraphRef = useRef<HTMLParagraphElement>(null);

    const clickParagraphElement = () => {
      ParagraphRef.current?.click();
    }
  
    return (
      <div className={`${itemStyles.item}`}>
        <div className={`${itemStyles.title}`}>
          <div className={`${itemStyles.point}`} onClick={() => clickParagraphElement()}>
            <div className={`${itemStyles.icon}`}>
              {
                props.icon ? (
                  <Image src={props.icon.src} alt={props.icon.alt} />
                ) : (
                  <Image src={sampleImage.src} alt={sampleImage.alt} />
                )
              }
            </div>
            <p>{ props.link }</p>
          </div>
          <div className={`${itemStyles.hyperLink}`}>
            <p ref={ParagraphRef} onClick={() => setSelectedPortfolio(props.title)}>{ props.title }</p>
          </div>
        </div>
        <div className={`${itemStyles.content}`}>
          <p>{ props.content }</p>
        </div>
      </div>
    );
  }

  useEffect(() => {
    if (props.rendering) {
      setSelectedPortfolio(undefined);
    }
  }, [props.rendering]);
  
  return props.rendering && (
    <Web name={props.name} rendering={props.rendering} selected={props.selected} selectWeb={() => props.selectWeb()} closeWeb={() => props.closeWeb()}>
      {
        selectedPortfolio ? (
          <Introduce portfolioName={selectedPortfolio} routerBack={() => setSelectedPortfolio(undefined)} />
        ) : (
          <div className={`${styles.portfolioList}`}>
            {
              itemList.map((item, index) => (
                <Item icon={item.icon} link={item.link} title={item.title} content={item.content} key={index} />
              ))
            }
          </div>
        )
      }
    </Web>
  );
}

export default Portfolio;