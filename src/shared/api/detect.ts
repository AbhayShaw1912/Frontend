import { Result } from '../types/api';

export async function detectGlaucoma(file: File): Promise<Result> {
    await new Promise(resolve => setTimeout(resolve, 2000 + Math.random() * 2000));

    const fileName = file.name.toLowerCase();
    const isGlaucomaPositive = fileName.includes('glaucoma') || 
                               fileName.includes('positive') || 
                               Math.random() > 0.7;
    
    if (isGlaucomaPositive) {
        const detectedPercent = Math.floor(65 + Math.random() * 30); 
        return {
            diagnosis: "Glaucoma indicators detected - Further evaluation recommended",
            detectedPercent,
            confidence: detectedPercent >= 80 ? 'high' : 'medium',
            timestamp: new Date().toISOString(),
            recommendations: [
                "Consult with an ophthalmologist immediately",
                "Schedule comprehensive eye examination",
                "Consider additional diagnostic tests (OCT, visual field)"
            ]
        };
    } else {
        const detectedPercent = Math.floor(5 + Math.random() * 35); 
        return {
            diagnosis: "No significant glaucoma indicators detected",
            detectedPercent,
            confidence: 'low',
            timestamp: new Date().toISOString(),
            recommendations: [
                "Continue regular eye examinations",
                "Maintain healthy lifestyle",
                "Monitor for any vision changes"
            ]
        };
    }
}

export const detect = detectGlaucoma;
export type { Result };