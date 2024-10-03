import styles from '@/styles/icons/icons.module.css';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';

const profileIcon = {
  src: require('@/public/icons/profile.png'),
  alt: '프로필'
}

const Icon = (
  { icon, name }:
  { icon: StaticImport, name: string }
) => {
  return (
    <div className={`${styles.icon}`}>
      <Image src={icon} alt={name} />
      <p>{ name }</p>
    </div>
  );
}

const Icons = () => {
  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.wrapper}`}>
        <div className={`${styles.icons}`}>
          <Icon icon={profileIcon.src} name={profileIcon.alt} />
        </div>
      </div>
    </div>
  );
}

export default Icons;