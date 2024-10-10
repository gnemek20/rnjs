import styles from '@/styles/icons/icons.module.css';
import { webAttribute } from '@/types/webTypes';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';

const Icon = (
  props:
  { icon: StaticImport, name: string, onClick: Function }
) => {
  return (
    <div className={`${styles.icon}`} onClick={() => props.onClick()}>
      <Image src={props.icon} alt={props.name} priority />
      <p>{ props.name }</p>
    </div>
  );
}

const Icons = ({ webList }: { webList: Array<webAttribute> }) => {
  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.wrapper}`}>
        <div className={`${styles.icons}`}>
          {
            webList.map((web, index) => (
              <Icon icon={web.icon.src} name={web.icon.alt} onClick={() => web.openWeb()} key={index} />
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default Icons;