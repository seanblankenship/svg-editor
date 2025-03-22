import { useEffect, useRef } from 'react';
import { editor } from 'monaco-editor';
import { useSyncStore } from '@/store/sync-store';
import { ICodeRange } from '@/types/sync.types';
import { SVGElementMapping } from '@/types/svg.types';

interface UseCodeSyncProps {
  monacoEditor: editor.IStandaloneCodeEditor | null;
  elements: SVGElementMapping[];
  onVisualElementHighlight?: (elementIds: string[]) => void;
}

/**
 * Hook to manage bidirectional synchronization between code editor and visual SVG elements
 */
export function useCodeSync({
  monacoEditor,
  elements,
  onVisualElementHighlight,
}: UseCodeSyncProps) {
  const {
    selectedElementIds,
    selectedCodeRanges,
    decorations,
    isSyncing,
    lastSyncSource,
    setSelectedElementIds,
    setSelectedCodeRanges,
    setDecorations,
    setSyncing,
    setLastSyncSource,
  } = useSyncStore();

  const lastSelectionRef = useRef<ICodeRange | null>(null);

  // Create Monaco decorations for code highlighting
  useEffect(() => {
    if (
      !monacoEditor ||
      !elements.length ||
      !selectedElementIds.length ||
      lastSyncSource !== 'visual'
    ) {
      return;
    }

    setSyncing(true);

    try {
      // Find code positions for selected elements
      const selectedElements = elements.filter(el => selectedElementIds.includes(el.id));
      const ranges: ICodeRange[] = selectedElements.map(el => ({
        startLineNumber: el.codePosition.startLine,
        startColumn: el.codePosition.startCol,
        endLineNumber: el.codePosition.endLine,
        endColumn: el.codePosition.endCol,
      }));

      if (ranges.length) {
        // Create decorations for selected elements
        const decorationOptions: editor.IModelDeltaDecoration[] = ranges.map(range => ({
          range,
          options: {
            className: 'code-highlight',
            hoverMessage: { value: 'Selected SVG element' },
            isWholeLine: false,
          },
        }));

        // Apply decorations
        const model = monacoEditor.getModel();
        if (model) {
          const newDecorations = monacoEditor.deltaDecorations(decorations, decorationOptions);
          setDecorations(newDecorations);
          setSelectedCodeRanges(ranges);

          // Scroll to the first range if not visible
          if (ranges[0]) {
            monacoEditor.revealRangeInCenter(ranges[0]);
          }
        }
      }
    } finally {
      setSyncing(false);
    }
  }, [
    selectedElementIds,
    monacoEditor,
    elements,
    lastSyncSource,
    setDecorations,
    setSelectedCodeRanges,
    setSyncing,
    decorations,
  ]);

  // Listen for code selection changes
  useEffect(() => {
    if (!monacoEditor || !elements.length) {
      return;
    }

    const onSelectionChange = () => {
      if (isSyncing || lastSyncSource === 'visual') {
        return;
      }

      const selection = monacoEditor.getSelection();
      if (!selection) return;

      // Skip if selection hasn't changed
      const currentSelection = {
        startLineNumber: selection.startLineNumber,
        startColumn: selection.startColumn,
        endLineNumber: selection.endLineNumber,
        endColumn: selection.endColumn,
      };

      if (
        lastSelectionRef.current?.startLineNumber === currentSelection.startLineNumber &&
        lastSelectionRef.current?.startColumn === currentSelection.startColumn &&
        lastSelectionRef.current?.endLineNumber === currentSelection.endLineNumber &&
        lastSelectionRef.current?.endColumn === currentSelection.endColumn
      ) {
        return;
      }

      lastSelectionRef.current = currentSelection;

      // Find elements that overlap with the current selection
      const matchingElements = elements.filter(el => {
        const elStart = {
          lineNumber: el.codePosition.startLine,
          column: el.codePosition.startCol,
        };

        const elEnd = {
          lineNumber: el.codePosition.endLine,
          column: el.codePosition.endCol,
        };

        // Check if selection overlaps with element
        return (
          (selection.startLineNumber < elEnd.lineNumber ||
            (selection.startLineNumber === elEnd.lineNumber &&
              selection.startColumn <= elEnd.column)) &&
          (selection.endLineNumber > elStart.lineNumber ||
            (selection.endLineNumber === elStart.lineNumber &&
              selection.endColumn >= elStart.column))
        );
      });

      const elementIds = matchingElements.map(el => el.id);

      if (elementIds.length) {
        setLastSyncSource('code');
        setSelectedElementIds(elementIds);

        if (onVisualElementHighlight) {
          onVisualElementHighlight(elementIds);
        }
      }
    };

    const selectionChangeDisposable = monacoEditor.onDidChangeCursorSelection(onSelectionChange);

    return () => {
      selectionChangeDisposable.dispose();
    };
  }, [
    monacoEditor,
    elements,
    isSyncing,
    lastSyncSource,
    onVisualElementHighlight,
    setLastSyncSource,
    setSelectedElementIds,
  ]);

  /**
   * Highlight code ranges in the editor from element IDs
   */
  const highlightCodeFromElements = (elementIds: string[]) => {
    if (!monacoEditor || !elements.length) return;

    setLastSyncSource('visual');
    setSelectedElementIds(elementIds);
  };

  /**
   * Highlight visual elements from a code selection
   */
  const highlightElementsFromCode = (range: ICodeRange) => {
    if (!elements.length) return;

    // Find elements that overlap with the range
    const matchingElements = elements.filter(el => {
      const elStart = {
        lineNumber: el.codePosition.startLine,
        column: el.codePosition.startCol,
      };

      const elEnd = {
        lineNumber: el.codePosition.endLine,
        column: el.codePosition.endCol,
      };

      // Check if range overlaps with element
      return (
        (range.startLineNumber < elEnd.lineNumber ||
          (range.startLineNumber === elEnd.lineNumber && range.startColumn <= elEnd.column)) &&
        (range.endLineNumber > elStart.lineNumber ||
          (range.endLineNumber === elStart.lineNumber && range.endColumn >= elStart.column))
      );
    });

    const elementIds = matchingElements.map(el => el.id);

    if (elementIds.length) {
      setLastSyncSource('code');
      setSelectedElementIds(elementIds);

      if (onVisualElementHighlight) {
        onVisualElementHighlight(elementIds);
      }
    }
  };

  return {
    highlightCodeFromElements,
    highlightElementsFromCode,
    selectedElementIds,
    selectedCodeRanges,
  };
}
