import { Dialog, Web } from '@/components';
import { customWebProps } from '@/types/webTypes';
import styles from '@/styles/profile/profile.module.css';
import informationStyles from '@/styles/profile/information.module.css';
import highlightStyles from '@/styles/profile/highlight.module.css';
import { imageType } from '@/types/publicTypes';
import Inko from 'inko';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const profileIcon: imageType = {
  src: require('@/public/icons/mika.png'),
  alt: 'profile'
}

const characterIcon: imageType = {
  src: require('@/public/icons/character.png'),
  alt: 'character'
}

const licenseImage: imageType = {
  src: require('@/public/images/license.jpg'),
  alt: 'license'
}

const Profile = (props: customWebProps) => {
  interface informationAttribute {
    name?: string,
    value: string,
    openDialog?: Function
    closeDialog?: Function
  }

  const defaultInformation = new Array<informationAttribute>(
    {
      name: '이름',
      value: '권민석'
    },
    {
      name: '나이',
      value: '22'
    },
    {
      name: '성별',
      value: '남자'
    },
    {
      name: '군 여부',
      value: '미필'
    },
  );

  const etcInformation = new Array<informationAttribute>(
    {
      value: '소개 영상'
    },
    {
      value: '자격증',
      openDialog: () => setRenderingLicenseDialog(true)
    }
  );

  const allInformation = new Array<informationAttribute>(
    ...defaultInformation,
    ...etcInformation
  );

  const inko = new Inko();

  const [renderingLicenseDialog, setRenderingLicenseDialog] = useState<boolean>(false);

  const [searchValue, setSearchValue] = useState<string>('');
  const [searchWord, setSearchWord] = useState<string>('');
  const [searchingInformationList, setSearchingInformationList] = useState<Array<informationAttribute>>([]);

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

  const InformationBox = ({ name, value, openDialog }: { name?: informationAttribute['name'], value: informationAttribute['value'], openDialog?: informationAttribute['openDialog'] }) => {
    return (
      <div className={`${informationStyles.informationBox}`} onClick={() => openDialog && openDialog()}>
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

  const makeSearchWord = (value: string) => {
    const withoutWhitespace = value.replace(/ /g, '');
    const ko2en = inko.ko2en(withoutWhitespace);

    setSearchWord(ko2en);
  }

  useEffect(() => {
    const debounceTimeout: NodeJS.Timeout = setTimeout(() => {
      makeSearchWord(searchValue);
    }, 200);

    return () => {
      clearTimeout(debounceTimeout);
    }
  }, [searchValue]);

  useEffect(() => {
    const wording = searchWord;

    if (wording === '') {
      setSearchingInformationList([]);
      return;
    }

    let list = new Array<informationAttribute>();
    const wordList: Array<string> = wording.split(',');

    wordList.forEach((word) => {
      if (word === '') return;

      allInformation.map((information) => {
        const nameTag = information.name && inko.ko2en(information.name);
        const valueTag = inko.ko2en(information.value);

        if (nameTag?.includes(word)) list = [...list, information];
        else if (valueTag.includes(word)) list = [...list, information];
      });
    });

    setSearchingInformationList(list);
  }, [searchWord]);

  useEffect(() => {
    if (props.rendering) {
      setSearchValue('');
    }
  }, [props.rendering]);

  return props.rendering && (
    <Web name={props.name} rendering={props.rendering} selected={props.selected} selectWeb={() => props.selectWeb()} closeWeb={() => props.closeWeb()}>
      <Dialog rendering={renderingLicenseDialog} closeDialog={() => setRenderingLicenseDialog(false)}>
        <div className={`${styles.licenseDialog}`}>
          <p>정보 처리 기능사</p>
          <div className={`${styles.licenseImage}`}>
            <Image src={licenseImage.src} alt={licenseImage.alt} />
          </div>
        </div>
      </Dialog>
      <div className={`${styles.background}`}>
        <Highlight image={characterIcon} />
        <div className={`${styles.profile}`}>
          <div className={`${styles.profileIcon}`}>
            <Image src={profileIcon.src} alt={profileIcon.alt} />
          </div>
          <div className={`${styles.search}`}>
            <input type="text" placeholder="검색어 (Ex. 이름, skdl . . .)" onChange={(event: React.ChangeEvent<HTMLInputElement>) => setSearchValue(event.target.value)} spellCheck={false} />
          </div>
          <div className={`${styles.information}`}>
            {
              searchWord === '' ? (
                <>
                  <Information category="기본 정보">
                    {
                      defaultInformation.map((information, index) => (
                        <InformationBox name={information.name} value={information.value} openDialog={() => information.openDialog && information.openDialog()} key={index} />
                      ))
                    }
                  </Information>
                  <Information category="기타">
                    {
                      etcInformation.map((information, index) => (
                        <InformationBox value={information.value} openDialog={() => information.openDialog && information.openDialog()} key={index} />
                      ))
                    }
                  </Information>
                </>
              ) : (
                <>
                  <Information category="검색 결과">
                    {
                      searchingInformationList?.length !== 0 ? (
                        searchingInformationList?.map((information, index) => (
                          <InformationBox name={information.name ? information.name : ''} value={information.value} openDialog={() => information.openDialog && information.openDialog()} key={index} />
                        ))
                      ) : (
                        <div className={`${styles.nothingToSearch}`}>
                          <p>{'검색 결과가 없어요 >:('}</p>
                        </div>
                      )
                    }
                  </Information>
                </>
              )
            }
          </div>
        </div>
      </div>
    </Web>
  );
}

export default Profile;