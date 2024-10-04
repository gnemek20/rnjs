import styles from '@/styles/icons/icons.module.css';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';

const profileIcon = {
  src: require('@/public/icons/profile.png'),
  alt: '프로필'
}

const portfolioIcon = {
  src: require('@/public/icons/portfolio.png'),
  alt: '포트폴리오'
}

const Icon = (
  { icon, name }:
  { icon: StaticImport, name: string }
) => {
  return (
    <div className={`${styles.icon}`}>
      <Image src={icon} alt={name} priority />
      <p>{ name }</p>
    </div>
  );
}

const Icons = () => {
  const iconList: Array<typeof profileIcon> = new Array(
    profileIcon,
    portfolioIcon
  );

  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.wrapper}`}>
        <div className={`${styles.icons}`}>
          {
            iconList.map((icon, index) => (
              <Icon icon={icon.src} name={icon.alt} key={index} />
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default Icons;