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
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext('2d')!;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener('resize', resize);

    // init clouds
    clouds.current = Array.from({ length: 20 }).map(() => {
      const shape = SHAPES[Math.floor(Math.random() * SHAPES.length)];

      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height * 0.75,
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

    const loop = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      clouds.current.forEach((cloud) => {
        cloud.x += cloud.speed;

        const width = cloud.shape[0].length * cloud.pixelSize;

        if (cloud.x > canvas.width) {
          cloud.x = -width;
        }

        drawPixelCloud(ctx, cloud);
      });

      requestAnimationFrame(loop);
    };

    loop();
  }, []);

  return <canvas ref={canvasRef} className={styles.canvas} />;
}

function getCloudColor() {
  return (
    getComputedStyle(document.documentElement)
      .getPropertyValue('--color-cloud')
      .trim() || '#f9b5ee9f'
  );
}
