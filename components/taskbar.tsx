import styles from '@/styles/taskbar/taskbar.module.css';
import Image from 'next/image';
import { ReactNode, useEffect, useState } from 'react';

const peroroIcon = {
  src: require('@/public/images/peroro.jpg'),
  alt: 'peroroIcon'
}

const Icon = ({ className, children }: { className?: string, children: ReactNode }) => {
  return (
    <div className={`${styles.icon} ${className?? className}`}>
      { children }
    </div>
  );
}

const taskbar = () => {
  const [date, setDate] = useState<string>('');

  const getDate = () => {
    const date = new Date();

    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    const zeroFill = (num: number) => {
      return String(num).padStart(2, '0');
    }

    setDate([
      `${hours}:${zeroFill(minutes)}:${zeroFill(seconds)}`,
      `${year}-${zeroFill(month)}-${zeroFill(day)}`
    ].join('\n'));
  }

  useEffect(() => {
    let interval: NodeJS.Timeout;

    interval = setInterval(() => {
      getDate();
    }, 200);

    return () => {
      clearInterval(interval);
    }
  }, []);

  return (
    <div className={`${styles.taskbar}`}>
      <div className={`${styles.container}`}>
        <div>
          <Icon>
            <Image src={peroroIcon.src} alt={peroroIcon.alt} priority />
          </Icon>
        </div>
        <div>
          <Icon className={`${styles.clock}`}>
            <p>{ date }</p>
          </Icon>
        </div>
      </div>
    </div>
  );
}

export default taskbar;