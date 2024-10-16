import { Web } from '@/components';
import { customWebProps } from '@/types/webTypes';
import styles from '@/styles/profile/profile.module.css';
import { imageType } from '@/types/publicTypes';
import Image from 'next/image';

const profileIcon: imageType = {
  src: require('@/public/images/peroro.jpg'),
  alt: 'profile'
}

const Profile = (props: customWebProps) => {
  return props.rendering && (
    <Web name={props.name} rendering={props.rendering} selected={props.selected} selectWeb={() => props.selectWeb()} closeWeb={() => props.closeWeb()}>
      <div className={`${styles.profile}`}>
        <div className={`${styles.profileIcon}`}>
          <Image src={profileIcon.src} alt={profileIcon.alt} />
        </div>
        <div className={`${styles.search}`}>
          <input type="text" placeholder="검색어를 입력해주세요" spellCheck={false} />
        </div>
      </div>
    </Web>
  );
}

export default Profile;