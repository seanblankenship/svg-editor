import { useEffect, useRef, useState } from 'react';
import { SVG, Container, Svg } from '@svgdotjs/svg.js';
import env from '@/config/env';

interface SvgCanvasProps {
  width?: number;
  height?: number;
  showGrid?: boolean;
  gridSize?: number;
  className?: string;
  onCanvasReady?: (svg: Svg) => void;
}

export function SvgCanvas({
  width = env.canvas.defaultWidth,
  height = env.canvas.defaultHeight,
  showGrid = true,
  gridSize = env.canvas.defaultGridSize,
  className = '',
  onCanvasReady,
}: SvgCanvasProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [svgInstance, setSvgInstance] = useState<Svg | null>(null);

  // Initialize the SVG canvas
  useEffect(() => {
    if (!containerRef.current) return;

    // Clear previous instances
    containerRef.current.innerHTML = '';

    // Create new SVG drawing
    const svg = SVG().addTo(containerRef.current).size(width, height);

    // Set background
    svg.rect(width, height).fill('#ffffff').stroke({ color: '#ddd', width: 1 });

    // Draw grid if needed
    if (showGrid && gridSize > 0) {
      drawGrid(svg, width, height, gridSize);
    }

    // Store the SVG instance
    setSvgInstance(svg);

    // Notify parent
    if (onCanvasReady) {
      onCanvasReady(svg);
    }

    // Cleanup function
    return () => {
      svg.remove();
    };
  }, [width, height, showGrid, gridSize, onCanvasReady]);

  // Draw grid lines
  const drawGrid = (svg: Container, width: number, height: number, size: number) => {
    const gridGroup = svg.group().addClass('grid');

    // Vertical lines
    for (let x = size; x < width; x += size) {
      gridGroup.line(x, 0, x, height).stroke({ color: '#eee', width: 1 });
    }

    // Horizontal lines
    for (let y = size; y < height; y += size) {
      gridGroup.line(0, y, width, y).stroke({ color: '#eee', width: 1 });
    }
  };

  return (
    <div
      ref={containerRef}
      className={`svg-canvas-container overflow-auto border rounded ${className}`}
      data-testid="svg-canvas"
    />
  );
}
