import type { Result } from './api';

export interface DropZoneProps {
    setResult: (res: Result | null) => void;
    setIsLoading: (loading: boolean) => void;
}

export interface ResultDisplayProps {
    result: Result | null;
    isLoading: boolean;
}

export interface UploadStatus {
    status: 'idle' | 'success' | 'error';
    error?: string;
}

export interface ConfidenceLevel {
    level: 'low' | 'medium' | 'high';
    color: string;
    bgColor: string;
}