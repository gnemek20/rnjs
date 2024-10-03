import styles from '@/styles/wallpaper/wallpaper.module.css';
import { useEffect, useRef, useState } from 'react';

const Display = () => {
  const wallpaperRef = useRef<HTMLDivElement>(null);

  const [innerHeight, setInnerHeight] = useState<number>(0);

  const setInnerSize = async () => {    
    const height = window.innerHeight;
    
    setInnerHeight(height);
  }
  
  const setWallpaperSize = () => {
    const target = wallpaperRef.current;
    
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
    <div ref={wallpaperRef} className={`${styles.wallpaper}`} />
  );
}

export default Display;