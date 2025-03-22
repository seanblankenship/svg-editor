import { useEffect, useRef, useState } from 'react';
import * as monaco from 'monaco-editor';
import env from '@/config/env';

interface SvgCodeEditorProps {
  initialValue?: string;
  height?: string | number;
  className?: string;
  readonly?: boolean;
  onChange?: (value: string) => void;
}

// Default SVG code for an empty editor
const DEFAULT_SVG = `<svg width="${env.canvas.defaultWidth}" height="${env.canvas.defaultHeight}" xmlns="http://www.w3.org/2000/svg">
  <!-- Add your SVG elements here -->
  <rect width="100" height="100" x="50" y="50" fill="#3b82f6" stroke="#1d4ed8" stroke-width="2" />
</svg>`;

export function SvgCodeEditor({
  initialValue = DEFAULT_SVG,
  height = '100%',
  className = '',
  readonly = false,
  onChange,
}: SvgCodeEditorProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [editor, setEditor] = useState<monaco.editor.IStandaloneCodeEditor | null>(null);

  // Initialize Monaco editor
  useEffect(() => {
    if (!containerRef.current) return;

    // Configure the editor
    const editorInstance = monaco.editor.create(containerRef.current, {
      value: initialValue,
      language: 'xml', // Use XML language mode for SVG
      theme: 'vs-dark',
      automaticLayout: true,
      minimap: { enabled: false },
      scrollBeyondLastLine: false,
      lineNumbers: 'on',
      readOnly: readonly,
      wordWrap: 'on',
      formatOnPaste: true,
    });

    // Set up onChange event
    if (onChange) {
      editorInstance.onDidChangeModelContent(() => {
        onChange(editorInstance.getValue());
      });
    }

    // Store the editor instance
    setEditor(editorInstance);

    // Cleanup function
    return () => {
      editorInstance.dispose();
    };
  }, [initialValue, readonly, onChange]);

  // Configure editor when the theme changes
  useEffect(() => {
    if (!editor) return;

    // Get the current theme
    const isDarkMode = document.documentElement.classList.contains('dark');
    monaco.editor.setTheme(isDarkMode ? 'vs-dark' : 'vs');
  }, [editor]);

  return (
    <div
      ref={containerRef}
      className={`svg-code-editor border rounded ${className}`}
      style={{
        height: typeof height === 'number' ? `${height}px` : height,
        minHeight: '200px',
      }}
      data-testid="svg-code-editor"
    />
  );
}
