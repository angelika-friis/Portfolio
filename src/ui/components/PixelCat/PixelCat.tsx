import { useEffect, useRef, type CSSProperties } from 'react';
import styles from './PixelCat.module.css';

type PixelCatProps = {
  className?: string;
  label?: string;
  size?: number;
};

export function PixelCat({
  className,
  label = 'pixel cat',
  size = 240,
}: PixelCatProps) {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const classNames = className
    ? `${styles.pixelCat} ${className}`
    : styles.pixelCat;

  useEffect(() => {
    const root = rootRef.current;

    if (!root) {
      return;
    }

    const updateGaze = (clientX: number, clientY: number) => {
      const rect = root.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const deltaX = clientX - centerX;
      const deltaY = clientY - centerY;
      const distance = Math.hypot(deltaX, deltaY) || 1;
      const strength = Math.min(
        distance / (Math.max(rect.width, rect.height) * 0.5),
        1,
      );
      const lookX = (deltaX / distance) * strength * 4;
      const lookY = (deltaY / distance) * strength * 3;

      root.style.setProperty('--pixel-cat-look-x', `${lookX.toFixed(2)}px`);
      root.style.setProperty('--pixel-cat-look-y', `${lookY.toFixed(2)}px`);
    };

    const handlePointerMove = (event: PointerEvent) => {
      updateGaze(event.clientX, event.clientY);
    };

    const resetGaze = () => {
      root.style.setProperty('--pixel-cat-look-x', '0px');
      root.style.setProperty('--pixel-cat-look-y', '0px');
    };

    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerleave', resetGaze);

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerleave', resetGaze);
    };
  }, []);

  return (
    <div
      ref={rootRef}
      className={classNames}
      style={{ '--pixel-cat-size': `${size}px` } as CSSProperties}
      role="img"
      aria-label={label}
    >
      <svg
        className={styles.sprite}
        viewBox="0 0 120 120"
        aria-hidden="true"
        focusable="false"
      >
        <g className={styles.shadow}>
          <rect x="30" y="102" width="60" height="8" />
          <rect x="40" y="110" width="40" height="4" />
        </g>

        <g className={styles.outline}>
          <rect x="20" y="10" width="10" height="30" />
          <rect x="30" y="20" width="10" height="10" />
          <rect x="80" y="20" width="10" height="10" />
          <rect x="90" y="10" width="10" height="30" />
          <rect x="20" y="30" width="80" height="50" />
          <rect x="30" y="80" width="60" height="20" />
          <rect x="90" y="70" width="20" height="10" />
          <rect x="100" y="60" width="10" height="10" />
          <rect x="10" y="50" width="10" height="10" />
          <rect x="100" y="50" width="10" height="10" />
          <rect x="30" y="100" width="20" height="10" />
          <rect x="70" y="100" width="20" height="10" />
        </g>

        <g className={styles.fur}>
          <rect x="30" y="30" width="60" height="40" />
          <rect x="40" y="70" width="40" height="20" />
          <rect x="30" y="20" width="10" height="20" />
          <rect x="80" y="20" width="10" height="20" />
          <rect x="90" y="60" width="10" height="10" />
        </g>

        <g className={styles.innerEar}>
          <rect x="30" y="30" width="10" height="10" />
          <rect x="80" y="30" width="10" height="10" />
        </g>

        <g className={styles.cheeks}>
          <rect x="30" y="60" width="20" height="10" />
          <rect x="70" y="60" width="20" height="10" />
          <rect x="50" y="70" width="20" height="10" />
        </g>

        <g className={styles.eyeWhite}>
          <rect x="38" y="42" width="18" height="18" />
          <rect x="64" y="42" width="18" height="18" />
        </g>

        <g className={styles.pupils}>
          <rect x="43" y="47" width="8" height="10" />
          <rect x="69" y="47" width="8" height="10" />
        </g>

        <g className={styles.face}>
          <rect x="56" y="62" width="8" height="8" />
          <rect x="46" y="72" width="8" height="6" />
          <rect x="66" y="72" width="8" height="6" />
          <rect x="20" y="52" width="10" height="4" />
          <rect x="90" y="52" width="10" height="4" />
        </g>

        <g className={styles.highlight}>
          <rect x="40" y="34" width="10" height="6" />
          <rect x="50" y="30" width="20" height="4" />
        </g>
      </svg>
    </div>
  );
}
