import { create } from 'zustand';
import { ICodeRange, SyncState } from '@/types/sync.types';

interface SyncStoreState extends SyncState {
    setSelectedElementIds: (ids: string[]) => void;
    setSelectedCodeRanges: (ranges: ICodeRange[]) => void;
    setDecorations: (decorations: string[]) => void;
    setSyncing: (isSyncing: boolean) => void;
    setLastSyncSource: (source: 'code' | 'visual' | null) => void;
    resetSync: () => void;
}

export const useSyncStore = create<SyncStoreState>((set) => ({
    // Initial state
    selectedElementIds: [],
    selectedCodeRanges: [],
    decorations: [],
    isSyncing: false,
    lastSyncSource: null,

    // Actions
    setSelectedElementIds: (ids) =>
        set((state) => ({
            ...state,
            selectedElementIds: ids,
            lastSyncSource: 'visual'
        })),

    setSelectedCodeRanges: (ranges) =>
        set((state) => ({
            ...state,
            selectedCodeRanges: ranges,
            lastSyncSource: 'code'
        })),

    setDecorations: (decorations) =>
        set((state) => ({
            ...state,
            decorations
        })),

    setSyncing: (isSyncing) =>
        set((state) => ({
            ...state,
            isSyncing
        })),

    setLastSyncSource: (source) =>
        set((state) => ({
            ...state,
            lastSyncSource: source
        })),

    resetSync: () =>
        set(() => ({
            selectedElementIds: [],
            selectedCodeRanges: [],
            decorations: [],
            isSyncing: false,
            lastSyncSource: null
        })),
})); 