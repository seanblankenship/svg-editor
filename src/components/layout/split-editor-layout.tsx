import { useState, useCallback, useEffect } from 'react';
import { SvgCanvas } from '@/components/canvas/svg-canvas';
import { SvgCodeEditor } from '@/components/code-editor/svg-code-editor';
import env from '@/config/env';

interface SplitEditorLayoutProps {
  initialCode?: string;
  className?: string;
}

export function SplitEditorLayout({ initialCode, className = '' }: SplitEditorLayoutProps) {
  const [code, setCode] = useState(initialCode);
  const [splitRatio, setSplitRatio] = useState(0.5); // 50% split by default
  const [isDragging, setIsDragging] = useState(false);

  // Handle code changes
  const handleCodeChange = useCallback((newCode: string) => {
    setCode(newCode);
    env.debug('Code updated', newCode.length);
  }, []);

  // Handle drag to resize
  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  // Calculate new split position based on mouse movement
  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!isDragging) return;

      const container = document.querySelector('.split-editor-container');
      if (!container) return;

      const containerRect = container.getBoundingClientRect();
      const newRatio = (e.clientX - containerRect.left) / containerRect.width;

      // Limit ratio between 0.2 and 0.8
      const limitedRatio = Math.max(0.2, Math.min(0.8, newRatio));
      setSplitRatio(limitedRatio);
    },
    [isDragging]
  );

  // Stop dragging on mouse up
  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  // Add and remove event listeners for dragging
  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, handleMouseMove, handleMouseUp]);

  return (
    <div
      className={`split-editor-container flex flex-row h-full relative ${className} ${isDragging ? 'select-none' : ''}`}
      data-testid="split-editor-layout"
    >
      {/* Visual SVG Canvas */}
      <div
        className="canvas-container overflow-auto bg-background"
        style={{ width: `${splitRatio * 100}%` }}
      >
        <SvgCanvas />
      </div>

      {/* Resizer Handle */}
      <div
        className="resizer-handle w-1 bg-border hover:bg-primary/50 cursor-col-resize"
        onMouseDown={handleMouseDown}
      />

      {/* Code Editor */}
      <div className="code-container" style={{ width: `${(1 - splitRatio) * 100}%` }}>
        <SvgCodeEditor initialValue={code} onChange={handleCodeChange} />
      </div>
    </div>
  );
}
