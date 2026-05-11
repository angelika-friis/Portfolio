import { useEffect, useRef } from 'react';
import { useTheme } from '../../theme/useTheme';
import styles from './PixelClouds.module.css';

type Cloud = {
  x: number;
  y: number;
  speed: number;
  pixelSize: number;
  shape: number[][];
};

const CLOUD_A = [
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
  [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0],
];

const CLOUD_B = [
  [0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0],
  [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
  [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];

const CLOUD_C = [
  [0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0],
  [0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
  [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];

const SHAPES = [CLOUD_A, CLOUD_B, CLOUD_C];

export function PixelClouds() {
  const { theme } = useTheme();
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const clouds = useRef<Cloud[]>([]);
  const size = useRef({ width: 0, height: 0 });

  const colorRef = useRef('#ffffff');

  useEffect(() => {
    const updateColor = () => {
      colorRef.current = getCloudColor();
    };

    updateColor();

    // om du har theme toggle → lyssna här
    const observer = new MutationObserver(updateColor);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    });

    return () => observer.disconnect();
  }, [theme]);

  useEffect(() => {
    if (typeof CanvasRenderingContext2D === 'undefined') {
      return;
    }

    const canvas = canvasRef.current;

    if (!canvas) {
      return;
    }

    const ctx = canvas.getContext('2d');

    if (!ctx) {
      return;
    }

    const resize = () => {
      const { width, height } = canvas.getBoundingClientRect();
      const nextWidth = Math.max(0, Math.floor(width));
      const nextHeight = Math.max(0, Math.floor(height));
      const dpr = window.devicePixelRatio || 1;

      size.current = {
        width: nextWidth,
        height: nextHeight,
      };

      canvas.width = Math.max(1, Math.floor(nextWidth * dpr));
      canvas.height = Math.max(1, Math.floor(nextHeight * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();

    const resizeObserver =
      typeof ResizeObserver === 'undefined' ? null : new ResizeObserver(resize);

    if (resizeObserver) {
      resizeObserver.observe(canvas);
    } else {
      window.addEventListener('resize', resize);
    }

    // init clouds
    clouds.current = Array.from({ length: 20 }).map(() => {
      const shape = SHAPES[Math.floor(Math.random() * SHAPES.length)];

      return {
        x: Math.random() * size.current.width,
        y: Math.random() * size.current.height * 0.75,
        speed: 0.1 + Math.random() * 0.5,
        pixelSize: 4 + Math.random() * 4,
        shape,
      };
    });

    const drawPixelCloud = (ctx: CanvasRenderingContext2D, cloud: Cloud) => {
      ctx.fillStyle = colorRef.current;

      cloud.shape.forEach((row, rowIndex) => {
        row.forEach((cell, colIndex) => {
          if (cell === 1) {
            ctx.fillRect(
              cloud.x + colIndex * cloud.pixelSize,
              cloud.y + rowIndex * cloud.pixelSize,
              cloud.pixelSize,
              cloud.pixelSize,
            );
          }
        });
      });
    };

    let animationFrameId = 0;

    const loop = () => {
      const { width, height } = size.current;

      ctx.clearRect(0, 0, width, height);

      clouds.current.forEach((cloud) => {
        cloud.x += cloud.speed;

        const width = cloud.shape[0].length * cloud.pixelSize;

        if (cloud.x > size.current.width) {
          cloud.x = -width;
        }

        drawPixelCloud(ctx, cloud);
      });

      animationFrameId = requestAnimationFrame(loop);
    };

    loop();

    return () => {
      resizeObserver?.disconnect();
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className={styles.container}>
      <canvas ref={canvasRef} className={styles.canvas} />
    </div>
  );
}

function getCloudColor() {
  return (
    getComputedStyle(document.documentElement)
      .getPropertyValue('--color-cloud')
      .trim() || '#f9b5ee9f'
  );
}
