import { Web } from '@/components';
import { customWebProps } from '@/types/webTypes';
import styles from '@/styles/portfolio/portfolio.module.css';
import Image from 'next/image';

const dummyImage = {
  src: require('@/public/images/peroro.jpg'),
  alt: 'dummy'
}

// 작업중인 웹, 대양ING, Hyunwoo.ai, artificialvision, Inpock?

const Portfolio = (props: customWebProps) => {
  return props.rendering && (
    <Web name={props.name} rendering={props.rendering} selected={props.selected} selectWeb={() => props.selectWeb()} closeWeb={() => props.closeWeb()}>
      <div className={`${styles.portfolioList}`}>
        <div>
          <Image src={dummyImage.src} alt={dummyImage.alt} />
        </div>
        <div>
          <Image src={dummyImage.src} alt={dummyImage.alt} />
        </div>
        <div>
          <Image src={dummyImage.src} alt={dummyImage.alt} />
        </div>
        <div>
          <Image src={dummyImage.src} alt={dummyImage.alt} />
        </div>
        <div>
          <Image src={dummyImage.src} alt={dummyImage.alt} />
        </div>
        <div>
          <Image src={dummyImage.src} alt={dummyImage.alt} />
        </div>
      </div>
    </Web>
  );
}

export default Portfolio;