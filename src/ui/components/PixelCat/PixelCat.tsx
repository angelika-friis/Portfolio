import { useEffect, useRef, type CSSProperties } from 'react';
import styles from './PixelCat.module.css';
import { CAT_MAP, PIXEL_SIZE, PUPILS, getPixelType } from './pixelCatSprite';

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

      const lookX = Math.round((deltaX / distance) * strength);
      const lookY = Math.round((deltaY / distance) * strength);

      root.style.setProperty('--pixel-cat-look-x', `${lookX * PIXEL_SIZE}px`);
      root.style.setProperty('--pixel-cat-look-y', `${lookY * PIXEL_SIZE}px`);
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

  const width = CAT_MAP[0].length * PIXEL_SIZE;
  const height = CAT_MAP.length * PIXEL_SIZE;

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
        viewBox={`0 0 ${width} ${height}`}
        aria-hidden="true"
        focusable="false"
      >
        {CAT_MAP.map((row, y) =>
          row.split('').map((cell, x) => {
            const pixelType = getPixelType(cell);

            if (!pixelType) {
              return null;
            }

            return (
              <rect
                key={`${x}-${y}`}
                x={x * PIXEL_SIZE}
                y={y * PIXEL_SIZE}
                width={PIXEL_SIZE}
                height={PIXEL_SIZE}
                className={styles[pixelType]}
              />
            );
          }),
        )}

        <g className={styles.pupils}>
          {PUPILS.map((pupil) => (
            <rect
              key={`${pupil.x}-${pupil.y}`}
              x={pupil.x * PIXEL_SIZE}
              y={pupil.y * PIXEL_SIZE}
              width={PIXEL_SIZE * 3}
              height={PIXEL_SIZE * 3}
            />
          ))}
        </g>
      </svg>
    </div>
  );
}
