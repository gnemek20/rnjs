import styles from '@/styles/web/web.module.css';
import { useEffect, useRef, useState } from 'react';

const Web = () => {
  const webRef = useRef<HTMLDivElement>(null);

  const Outline = () => {
    const [webTop, setWebTop] = useState<number>();
    const [webLeft, setWebLeft] = useState<number>();
  
    const [webWidth, setWebWidth] = useState<number>();
    const [webHeight, setWebHeight] = useState<number>();

    type straight = 't' | 'r' | 'b' | 'l';
    type diagonal = 'tl' | 'tr' | 'br' | 'bl';

    const startResizing = (clickEvent: React.MouseEvent, direction: straight | diagonal) => {
      const resizeWeb = (moveEvent: MouseEvent) => {
        const deltaX = moveEvent.screenX - clickEvent.screenX;
        const deltaY = moveEvent.screenY - clickEvent.screenY;

        const top = webTop as number + deltaY;
        const left = webLeft as number + deltaX;

        let width = webWidth as number;
        if (direction.includes('l')) width -= deltaX;
        else width += deltaX

        let height = webHeight as number;
        if (direction.includes('t')) height -= deltaY;
        else height += deltaY;

        width = Math.max(width, 250);
        height = Math.max(height, 100);

        if (direction.includes('t') && height !== 100) {
          setWebHeight(height);
          setWebTop(top);
        }
        else if (direction.includes('b')) {
          setWebHeight(height);
        }

        if (direction.includes('l') && width !== 250) {
          setWebWidth(width);
          setWebLeft(left);
        }
        else if (direction.includes('r')) {
          setWebWidth(width);
        }
      }

      const finishResizing = () => {
        document.removeEventListener('mousemove', resizeWeb);
      }

      document.addEventListener('mousemove', resizeWeb);
      document.addEventListener('mouseup', finishResizing, { once: true });
    }

    useEffect(() => {
      const target = webRef.current;
    
      const webStyle = [
        `top: ${webTop}px`,
        `left: ${webLeft}px`,
        `width: ${webWidth}px`,
        `height: ${webHeight}px`
      ].join('; ');

      target?.setAttribute('style', webStyle);
    }, [webTop, webLeft, webWidth, webHeight]);

    useEffect(() => {
      const target = webRef.current;

      const targetTop = target?.offsetTop;
      const targetLeft = target?.offsetLeft;

      const targetWidth = target?.clientWidth;
      const targetHeight = target?.clientHeight;

      setWebTop(targetTop);
      setWebLeft(targetLeft);

      setWebWidth(targetWidth);
      setWebHeight(targetHeight);
    }, []);

    return (
      <div className={`${styles.outline}`}>
        <div className={`${styles.line}`}>
          {/* 위, 오른쪽, 아래, 왼쪽 */}
          <div onMouseDown={(event: React.MouseEvent) => startResizing(event, 't')} />
          <div onMouseDown={(event: React.MouseEvent) => startResizing(event, 'r')} />
          <div onMouseDown={(event: React.MouseEvent) => startResizing(event, 'b')} />
          <div onMouseDown={(event: React.MouseEvent) => startResizing(event, 'l')} />
        </div>
        <div className={`${styles.vertex}`}>
          {/* 북서, 북동, 남동, 남서 */}
          <div onMouseDown={(event: React.MouseEvent) => startResizing(event, 'tl')} />
          <div onMouseDown={(event: React.MouseEvent) => startResizing(event, 'tr')} />
          <div onMouseDown={(event: React.MouseEvent) => startResizing(event, 'br')} />
          <div onMouseDown={(event: React.MouseEvent) => startResizing(event, 'bl')} />
        </div>
      </div>
    );
  }

  return (
    <div ref={webRef} className={`${styles.web}`}>
      <Outline />
      <div className={`${styles.body}`}>

      </div>
    </div>
  );
}

export default Web;