import { Web } from '@/components';
import { customWebProps } from '@/types/webTypes';
import styles from '@/styles/profile/profile.module.css';
import informationStyles from '@/styles/profile/information.module.css';
import highlightStyles from '@/styles/profile/highlight.module.css';
import { imageType } from '@/types/publicTypes';
import Image from 'next/image';

const profileIcon: imageType = {
  src: require('@/public/images/peroro.jpg'),
  alt: 'profile'
}

const characterIcon: imageType = {
  src: require('@/public/icons/character.png'),
  alt: 'character'
}

const Profile = (props: customWebProps) => {
  const Information = ({ category, children }: { category: string, children: React.ReactNode }) => {
    return (
      <div className={`${informationStyles.informationContainer}`}>
        <div className={`${informationStyles.information}`}>
          <p className={`${informationStyles.category}`}>{ category }</p>
          <div className={`${informationStyles.line}`} />
          <div className={`${informationStyles.informationList}`}>
            { children }
          </div>
        </div>
      </div>
    );
  }

  const InformationBox = ({ name, value }: { name?: string, value: string }) => {
    return (
      <div className={`${informationStyles.informationBox}`}>
        { value && <p className={`${informationStyles.value}`}>{ value }</p> }
        { name && <p className={`${informationStyles.name}`}>{ name }</p> }
      </div>
    );
  }

  const Highlight = ({ image }: { image: imageType }) => {
    return (
      <div className={`${highlightStyles.highlight}`}>
        <Image src={image.src} alt={image.alt} />
        <div className={`${highlightStyles.gradation}`}>
          <div />
          <div />
          <div />
          <div />
        </div>
      </div>
    );
  }

  return props.rendering && (
    <Web name={props.name} rendering={props.rendering} selected={props.selected} selectWeb={() => props.selectWeb()} closeWeb={() => props.closeWeb()}>
      <div className={`${styles.background}`}>
        <Highlight image={characterIcon} />
        <div className={`${styles.profile}`}>
          <div className={`${styles.profileIcon}`}>
            <Image src={profileIcon.src} alt={profileIcon.alt} />
          </div>
          <div className={`${styles.search}`}>
            <input type="text" placeholder="검색어를 입력해주세요" spellCheck={false} />
          </div>
          <div className={`${styles.information}`}>
            <Information category="기본 정보">
              <InformationBox name="이름" value="권민석" />
              <InformationBox name="나이" value="22" />
            </Information>
            <Information category="기타">
              <InformationBox value="소개 영상" />
            </Information>
          </div>
        </div>
      </div>
    </Web>
  );
}

export default Profile;