import styles from '@/styles/wallpaper/wallpaper.module.css';
import { useEffect, useRef, useState } from 'react';

const Display = () => {
  const wallpaperRef = useRef<HTMLDivElement>(null);

  const [innerWidth, setInnerWidth] = useState<number>(0);
  const [innerHeight, setInnerHeight] = useState<number>(0);

  const setInnerSize = async () => {
    const width = window.innerWidth;
    const height = window.innerHeight;

    setInnerWidth(width);
    setInnerHeight(height);
  }

  const setWallpaperSize = () => {
    const target = wallpaperRef.current;

    const size = [
      `width: ${innerWidth}px`,
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
  }, [innerWidth, innerHeight]);

  return (
    <div ref={wallpaperRef} className={`${styles.wallpaper}`}>
    </div>
  );
}

export default Display;