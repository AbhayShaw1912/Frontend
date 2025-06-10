export interface Result {
    diagnosis: string;
    detectedPercent: number;
    confidence?: 'low' | 'medium' | 'high';
    timestamp?: string;
    recommendations?: string[];
}

export interface DetectionError {
    message: string;
    code: string;
}