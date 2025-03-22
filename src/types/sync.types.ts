import { SVGElementMapping, SVGElementPosition } from './svg.types';
import { editor } from 'monaco-editor';

export interface ICodePosition {
    lineNumber: number;
    column: number;
}

export interface ICodeRange {
    startLineNumber: number;
    startColumn: number;
    endLineNumber: number;
    endColumn: number;
}

export interface IModelDeltaDecoration {
    range: ICodeRange;
    options: editor.IModelDecorationOptions;
}

export interface SyncEvent {
    type: SyncEventType;
    data: SyncEventData;
}

export enum SyncEventType {
    CODE_SELECTION_CHANGE = 'code_selection_change',
    VISUAL_SELECTION_CHANGE = 'visual_selection_change',
    CODE_EDIT = 'code_edit',
    VISUAL_EDIT = 'visual_edit',
    DOCUMENT_CHANGE = 'document_change',
    SYNC_REQUEST = 'sync_request',
}

export type SyncEventData =
    | CodeSelectionChangeData
    | VisualSelectionChangeData
    | CodeEditData
    | VisualEditData
    | DocumentChangeData
    | SyncRequestData;

export interface CodeSelectionChangeData {
    range: ICodeRange;
    elementId?: string;
}

export interface VisualSelectionChangeData {
    elementIds: string[];
    codePositions?: SVGElementPosition[];
}

export interface CodeEditData {
    range: ICodeRange;
    newText: string;
    oldText: string;
}

export interface VisualEditData {
    elementId: string;
    attributes: Record<string, string | number | boolean>;
}

export interface DocumentChangeData {
    elements: SVGElementMapping[];
    rawXML: string;
}

export interface SyncRequestData {
    source: 'code' | 'visual';
    elementIds?: string[];
    codePositions?: ICodeRange[];
}

export interface SyncState {
    selectedElementIds: string[];
    selectedCodeRanges: ICodeRange[];
    decorations: string[];
    isSyncing: boolean;
    lastSyncSource: 'code' | 'visual' | null;
} 