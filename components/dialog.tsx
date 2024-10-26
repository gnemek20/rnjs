import styles from '@/styles/dialog/dialog.module.css';
import { imageType } from '@/types/publicTypes';
import Image from 'next/image';
import { ReactNode, useEffect, useRef, useState } from 'react';

const xIcon: imageType = {
  src: require('@/public/icons/x.png'),
  alt: 'x'
}

const Dialog = (props: { rendering: boolean, closeDialog: Function, children: ReactNode }) => {
  const dialogRef = useRef<HTMLDivElement>(null);

  const [renderingDialog, setRenderingDialog] = useState<boolean>(false);

  const closeDialog = (event: React.MouseEvent, option?: { force: boolean }) => {
    if (option?.force) {
      setRenderingDialog(false);
      props.closeDialog();

      return;
    }

    const dialogContainer = dialogRef.current;
    const target = event && event.target;

    if (dialogContainer === target) {
      setRenderingDialog(false);
      props.closeDialog();
    }
  }

  useEffect(() => {
    if (props.rendering) setRenderingDialog(true);
  }, [props.rendering]);

  return renderingDialog && (
    <div ref={dialogRef} className={`${styles.dialog}`} onClick={(event: React.MouseEvent) => closeDialog(event)}>
      <div className={`${styles.container}`}>
        <div className={`${styles.content}`}>
          { props.children }
        </div>
        <div className={`${styles.closeIcon}`} onClick={(event: React.MouseEvent) => closeDialog(event, { force: true })}>
          <Image src={xIcon.src} alt={xIcon.alt} />
        </div>
      </div>
    </div>
  );
}

export default Dialog;