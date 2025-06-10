import { CONFIDENCE_LEVELS } from '../constants/ui';
import type { ConfidenceLevel } from '../types/ui';

export function getConfidenceLevel(percentage: number): ConfidenceLevel {
    if (percentage >= CONFIDENCE_LEVELS.high.threshold) {
        return CONFIDENCE_LEVELS.high;
    }
    if (percentage >= CONFIDENCE_LEVELS.medium.threshold) {
        return CONFIDENCE_LEVELS.medium;
    }
    return CONFIDENCE_LEVELS.low;
}

export function isPositiveDiagnosis(diagnosis: string): boolean {
    return diagnosis.toLowerCase().includes('glaucoma indicators detected');
}

export function formatConfidenceText(level: string): string {
    return level.charAt(0).toUpperCase() + level.slice(1);
}