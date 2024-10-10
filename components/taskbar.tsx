import styles from '@/styles/taskbar/taskbar.module.css';
import { webAttribute, webNames } from '@/types/webTypes';
import Image from 'next/image';
import { ReactNode, useEffect, useState } from 'react';

const peroroIcon = {
  src: require('@/public/images/peroro.jpg'),
  alt: 'peroroIcon'
}

const Icon = (
  { className, onClick, children }:
  { className?: string, onClick?: Function, children: ReactNode }
) => {
  return (
    <div className={`${styles.icon} ${className ? className : ''}`} onClick={() => onClick && onClick()}>
      { children }
    </div>
  );
}

const Taskbar = (
  { webList, renderedWebList, selectedWeb }:
  { webList: Array<webAttribute>, renderedWebList: Array<webNames>, selectedWeb: webNames }
) => {
  interface taskAttribute {
    name: webAttribute['name'],
    icon: webAttribute['icon'],
    openWeb: webAttribute['openWeb']
  }

  const [taskList, setTaskList] = useState<Array<taskAttribute>>([]);
  const [taskNameList, setTaskNameList] = useState<Array<webNames>>([]);

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

  const reload = () => {
    window.location.reload();
  }

  useEffect(() => {
    if (renderedWebList.length === 0) {
      setTaskList([]);
      return;
    }

    let list = new Array<taskAttribute>(...taskList);

    webList.map((web) => {
      const webName = web.name;

      if (!taskNameList.includes(webName) && renderedWebList.includes(webName)) {
        list = [...list, {
          name: webName,
          icon: web.icon,
          openWeb: () => web.openWeb()
        }];
      }
      else if (taskNameList.includes(webName) && !renderedWebList.includes(webName)) {
        list = list.filter((item) => { return item.name !== webName });
      }
    });

    setTaskList(list);
  }, [renderedWebList]);

  useEffect(() => {
    if (taskList.length === 0) {
      setTaskNameList([]);
      return;
    }

    let list = new Array<webNames>();

    taskList.forEach((task) => {
      const taskName = task.name;
      list = [...list, taskName];
    });

    setTaskNameList(list);
  }, [taskList]);

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
          <Icon onClick={reload}>
            <Image src={peroroIcon.src} alt={peroroIcon.alt} priority />
          </Icon>
        </div>
        <div className={`${styles.taskContainer}`}>
          <div className={styles.taskList}>
            {
              taskList.map((task, index) => (
                <Icon className={`${selectedWeb === task.name ? styles.selectedTask : ''}`} onClick={() => task.openWeb()} key={index}>
                  <Image src={task.icon.src} alt={task.icon.alt} />
                </Icon>
              ))
            }
          </div>
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

export default Taskbar;