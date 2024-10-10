import { useEffect, useRef, useState } from 'react';
import { Icons, Taskbar, Wallpaper } from '.';
import styles from '@/styles/desktop/desktop.module.css';
import { webAttribute, webNames } from '@/types/webTypes';

const Desktop = (
  { webList, renderedWebList, selectedWeb }:
  { webList: Array<webAttribute>, renderedWebList: Array<webNames>, selectedWeb: webNames }
) => {
  const desktopRef = useRef<HTMLDivElement>(null);

  const [innerHeight, setInnerHeight] = useState<number>(0);

  const setInnerSize = async () => {    
    const height = window.innerHeight;
    
    setInnerHeight(height);
  }
  
  const setWallpaperSize = () => {
    const target = desktopRef.current;
    
    const size = [
      `height: ${innerHeight}px`
    ].join('; ');

    target?.setAttribute('style', size);
  }

  const onResizing = () => {
    let throttleTimeout: NodeJS.Timeout | null;

    return () => {
      if (!throttleTimeout) {
        throttleTimeout = setTimeout(() => {
          throttleTimeout = null;
          setInnerSize();
        }, 100);
      }
    }
  }

  useEffect(() => {
    setInnerSize();
    window.addEventListener('resize', onResizing());

    return () => {
      window.removeEventListener('resize', onResizing());
    }
  }, []);

  useEffect(() => {
    setWallpaperSize();
  }, [innerHeight]);

  return (
    <div ref={desktopRef} className={`${styles.desktop}`}>
      <Wallpaper />
      <Icons webList={webList} />
      <Taskbar webList={webList} renderedWebList={renderedWebList} selectedWeb={selectedWeb} />
    </div>
  );
}

export default Desktop;