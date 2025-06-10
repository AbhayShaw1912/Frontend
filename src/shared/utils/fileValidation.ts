import { FILE_CONSTRAINTS } from '../constants/ui';

export interface ValidationResult {
    isValid: boolean;
    error?: string;
}

export function validateFile(file: File): ValidationResult {
    if (!file.type.startsWith('image/')) {
        return {
            isValid: false,
            error: 'Please upload an image file'
        };
    }

    if (file.size > FILE_CONSTRAINTS.maxSize) {
        return {
            isValid: false,
            error: 'File size must be less than 10MB'
        };
    }

    return { isValid: true };
}

export function createPreviewUrl(file: File): string {
    return URL.createObjectURL(file);
}

export function revokePreviewUrl(url: string): void {
    URL.revokeObjectURL(url);
}