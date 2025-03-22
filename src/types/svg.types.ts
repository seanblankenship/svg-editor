import { Element as SVGJSElement } from '@svgdotjs/svg.js';

export interface SVGElementPosition {
    startLine: number;
    startCol: number;
    endLine: number;
    endCol: number;
}

export interface SVGElementMapping {
    id: string;
    element: SVGJSElement;
    codePosition: SVGElementPosition;
    domElement: SVGElement;
}

export interface SVGDocumentState {
    rawXML: string;
    filename: string | null;
    modified: boolean;
    viewBox: string;
    width: number;
    height: number;
    elements: SVGElementMapping[];
}

export type SVGElementType =
    | 'svg'
    | 'g'
    | 'path'
    | 'rect'
    | 'circle'
    | 'ellipse'
    | 'line'
    | 'polyline'
    | 'polygon'
    | 'text'
    | 'image'
    | 'use'
    | 'symbol'
    | 'defs'
    | 'linearGradient'
    | 'radialGradient'
    | 'pattern'
    | 'clipPath'
    | 'mask'
    | 'filter';

export interface ElementAttributes {
    [key: string]: string | number | boolean;
}

export interface SVGElementData {
    id: string;
    type: SVGElementType;
    attributes: ElementAttributes;
    children?: SVGElementData[];
    parent?: string; // ID of parent element
}

// Helper interfaces for sync highlighting
export interface HighlightOptions {
    duration?: number;
    scroll?: boolean;
    flash?: boolean;
    select?: boolean;
}

export enum SVGDocumentAction {
    ELEMENT_SELECTED = 'element_selected',
    ELEMENT_MODIFIED = 'element_modified',
    ELEMENT_ADDED = 'element_added',
    ELEMENT_REMOVED = 'element_removed',
    DOCUMENT_LOADED = 'document_loaded',
    DOCUMENT_RESET = 'document_reset',
} 